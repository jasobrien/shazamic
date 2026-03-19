import { test, expect } from '@playwright/test';

// This test checks that the homepage loads and displays a recognizable element
// Run with: npx playwright test

test('homepage loads and displays main content', async ({ page }) => {
  await page.goto('/');
  // Wait for a key element that should always be present
  await expect(page.locator('.site-shell')).toBeVisible();
  await expect(page.locator('.brand-name')).toContainText('Shazamic');
});
