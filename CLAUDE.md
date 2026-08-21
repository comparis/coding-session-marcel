# Project

Three apps, all run locally:

- `backend/` — .NET 10 minimal API (`dotnet run`, http://localhost:8080)
- `listing-manager/` — Next.js app for real estate agencies (`npm run dev`, port 3000)
- `frontend/` — Next.js app for end users (`npm run dev`, port 3001)

Sample data: `data/listings.csv` — 100 real estate listings;
`image_urls` and `features` columns are `|`-separated.

## Notes for the two Next.js apps (`listing-manager/`, `frontend/`)

- Next.js 16 (App Router, TypeScript, Tailwind, `src/` layout, npm). Next.js 16
  has breaking changes vs. older versions — check `node_modules/next/dist/docs/`
  before assuming an API exists. Each app also contains an auto-generated
  `AGENTS.md` maintained by `next dev`; keep it committed.
- Both start pages fetch the backend from a **server component**
  (see `src/app/page.tsx`) — follow that pattern for backend calls.

## Backend

- Keep it a single process. No external services.
