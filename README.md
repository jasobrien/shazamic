# Shazamic

Shazamic is a React-based affiliate comparison site focused on dependable top-5 product
recommendations by price range.

## MVP Scope

- Category: Headphones
- Affiliate channel: Amazon Associates (primary)
- Positioning: dependable recommendations with transparent scoring and disclosure

## Local Development

1. Install dependencies:

	npm install

2. Run the dev server:

	npm run dev

3. Build production assets:

	npm run build

4. Preview the production build:

	npm run preview

## Deploy To Fly.io

1. Install Fly CLI:

	curl -L https://fly.io/install.sh | sh

2. Authenticate:

	fly auth login

3. Update the app name in `fly.toml` to a globally unique value.

4. Create the app (first time only):

	fly apps create <your-unique-app-name>

5. Deploy:

	fly deploy

6. Open the live site:

	fly open

Notes:

- The app is deployed as a static SPA behind Caddy, with route fallback to `index.html`.
- `fly.toml` currently uses `iad` as the primary region and a small shared VM profile.

## Recommendation Data Pattern

Product entries live in `src/data/headphones.js` and include:

- `priceBand`, `rank`, and `priceUSD` for top-5 list ordering
- score dimensions (`value`, `reliability`, `sound`, `comfort`)
- `pros`, `cons`, `editorialNote`, and `updatedOn` for trust signals
- Amazon affiliate metadata: `affiliate.url` + `affiliate.associateTag`

## Affiliate Compliance Notes

- Keep affiliate disclosure text visible near purchase buttons.
- Use Amazon URLs with the active associate tag.
- Do not present prices as guaranteed; note that Amazon pricing can change.
- Preserve methodology transparency and include trade-offs for each recommendation.