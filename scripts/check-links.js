#!/usr/bin/env node
/**
 * check-links.js
 * Validates all affiliate links across every product data file.
 *
 * Usage:  node scripts/check-links.js
 *         npm run test:links
 *
 * Two-phase approach:
 *   1. Structural — instant, regex-based checks (valid URL, HTTPS, affiliate
 *      tag present, no encoded backslash, etc.)
 *   2. Live HTTP  — HEAD requests to confirm the URL actually resolves.
 *      Amazon often returns 503/429 for automated requests (bot protection);
 *      those are flagged as warnings rather than failures.
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DATA_DIR   = join(__dirname, "../src/data");
const AFFILIATE_TAG = "ardeevin-22";
const REQUEST_TIMEOUT_MS = 12_000;
const CONCURRENCY = 4; // parallel HTTP requests

// ─── 1. Collect every .js file under src/data ──────────────────────────────

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) results.push(...walk(full));
    else if (entry.endsWith(".js")) results.push(full);
  }
  return results;
}

// ─── 2. Extract affiliate URLs via regex (no module imports needed) ──────────

function extractLinks(filePath) {
  const src  = readFileSync(filePath, "utf8");
  const lines = src.split("\n");
  const links = [];
  const re    = /\burl:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const lineNumber = src.slice(0, m.index).split("\n").length;
    links.push({ url: m[1], file: filePath, line: lineNumber });
  }
  return links;
}

// ─── 3. Structural validation ────────────────────────────────────────────────

function structuralIssues(url) {
  const issues = [];
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    issues.push("Not a valid URL");
    return issues;
  }

  if (parsed.protocol !== "https:")
    issues.push("Not HTTPS");

  if (!url.includes(AFFILIATE_TAG))
    issues.push(`Missing affiliate tag "${AFFILIATE_TAG}"`);

  if (/[%]5[Cc]/.test(url))
    issues.push("Contains encoded backslash (%5C) — URL likely truncated/malformed");

  if (!["www.amazon.com", "amazon.com"].includes(parsed.hostname))
    issues.push(`Unexpected domain: ${parsed.hostname}`);

  return issues;
}

// ─── 4. Live HTTP check (HEAD, follow redirects) ─────────────────────────────

async function checkLive(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method:   "HEAD",
      redirect: "follow",
      signal:   controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) " +
          "AppleWebKit/537.36 (KHTML, like Gecko) " +
          "Chrome/122.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });
    // If HEAD is not allowed, retry with GET
    if (res.status === 405) {
      const res2 = await fetch(url, {
        method:   "GET",
        redirect: "follow",
        signal:   controller.signal,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) " +
            "AppleWebKit/537.36 (KHTML, like Gecko) " +
            "Chrome/122.0.0.0 Safari/537.36",
        },
      });
      return { status: res2.status };
    }
    return { status: res.status };
  } catch (err) {
    return { status: null, error: err.name === "AbortError" ? "Timeout" : err.message };
  } finally {
    clearTimeout(timer);
  }
}

function httpVerdict(status) {
  if (status === null)              return "error";
  if (status >= 200 && status < 400) return "pass";
  // Amazon returns 503/429/999 for bot detection — treat as a warning, not a failure
  if ([429, 503, 999].includes(status)) return "warn";
  return "fail";
}

// ─── 5. Batch async runner ───────────────────────────────────────────────────

async function inBatches(items, size, fn) {
  const results = [];
  for (let i = 0; i < items.length; i += size) {
    const batch = await Promise.all(items.slice(i, i + size).map(fn));
    results.push(...batch);
  }
  return results;
}

// ─── Main ────────────────────────────────────────────────────────────────────

const skipLive = process.argv.includes("--no-http");

const files    = walk(DATA_DIR);
const allLinks = files.flatMap(extractLinks);
const uniqueUrls = [...new Set(allLinks.map((l) => l.url))];

const hr = "─".repeat(62);

console.log(`\n${"═".repeat(62)}`);
console.log("  Product Link Checker");
console.log(`  ${allLinks.length} links across ${files.filter(f => extractLinks(f).length > 0).length} data files — ${uniqueUrls.length} unique URLs`);
console.log(`${"═".repeat(62)}\n`);

// ── Phase 1: Structural ───────────────────────────────────────────────────────

console.log(`${hr}`);
console.log("  Phase 1 — Structural Validation (instant)");
console.log(`${hr}\n`);

let structFails = 0;
for (const { url, file, line } of allLinks) {
  const issues = structuralIssues(url);
  if (issues.length === 0) continue;
  structFails++;
  const rel = relative(DATA_DIR, file);
  console.log(`  ✗  ${rel}:${line}`);
  console.log(`     ${url}`);
  for (const issue of issues) console.log(`     → ${issue}`);
  console.log();
}

if (structFails === 0) {
  console.log(`  ✓  All ${allLinks.length} links passed structural checks.\n`);
}

// ── Phase 2: Live HTTP ────────────────────────────────────────────────────────

let httpPasses = 0, httpWarns = 0, httpFails = 0;

if (skipLive) {
  console.log(`${hr}`);
  console.log("  Phase 2 — Live HTTP (skipped via --no-http)");
  console.log(`${hr}\n`);
} else {
  console.log(`${hr}`);
  console.log(`  Phase 2 — Live HTTP (${uniqueUrls.length} unique URLs, ${CONCURRENCY} at a time)`);
  console.log("  Note: Amazon returns 503/429 for bots — flagged as warning not failure.");
  console.log(`${hr}\n`);

  // Build a url→occurrences map for reporting file context on failures
  const urlMap = new Map();
  for (const { url, file, line } of allLinks) {
    if (!urlMap.has(url)) urlMap.set(url, []);
    urlMap.get(url).push({ file: relative(DATA_DIR, file), line });
  }

  const httpResults = await inBatches(uniqueUrls, CONCURRENCY, async (url) => {
    const result = await checkLive(url);
    return { url, ...result };
  });

  for (const r of httpResults) {
    const verdict = httpVerdict(r.status);
    const detail  = r.error ? r.error : `HTTP ${r.status}`;

    if (verdict === "pass") {
      httpPasses++;
      console.log(`  ✓  ${String(r.status).padEnd(4)} ${r.url}`);
    } else if (verdict === "warn") {
      httpWarns++;
      console.log(`  ~  ${String(r.status).padEnd(4)} ${r.url}`);
      console.log(`     (bot-protection response — link is likely valid but unverifiable)`);
    } else {
      httpFails++;
      console.log(`  ✗  ${detail.padEnd(4)} ${r.url}`);
      // Show which file(s) reference this URL
      for (const loc of urlMap.get(r.url) ?? []) {
        console.log(`     referenced in ${loc.file}:${loc.line}`);
      }
    }
    console.log();
  }
}

// ── Summary ───────────────────────────────────────────────────────────────────

console.log(`${"═".repeat(62)}`);
console.log("  Summary");
console.log(`${"═".repeat(62)}`);
console.log(
  `  Structural : ${structFails === 0 ? `✓ all ${allLinks.length} passed` : `✗ ${structFails} failed`}`,
);
if (!skipLive) {
  console.log(
    `  HTTP       : ✓ ${httpPasses} passed  ` +
    (httpWarns  ? `~ ${httpWarns} warned  ` : "") +
    (httpFails  ? `✗ ${httpFails} failed` : ""),
  );
}
console.log(`${"═".repeat(62)}\n`);

const exitCode = structFails > 0 || httpFails > 0 ? 1 : 0;
process.exit(exitCode);
