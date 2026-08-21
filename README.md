# Coding Session

## Prerequisites

- .NET 10 SDK
- Node.js 20.9+

## Getting started

Run each app in its own terminal:

| Folder            | What                                  | Port | Run                          |
| ----------------- | ------------------------------------- | ---- | ---------------------------- |
| `backend/`        | .NET 10 minimal API                   | 8080 | `cd backend && dotnet run`   |
| `listing-manager/`| Next.js app for real estate agencies  | 3000 | `cd listing-manager && npm install && npm run dev` |
| `frontend/`       | Next.js app for end users             | 3001 | `cd frontend && npm install && npm run dev` |

The start page of both Next.js apps shows the backend's current time —
if you see it, everything is wired up correctly.

## Test data

`data/listings.csv` contains 100 sample real estate listings.
Multi-value fields (`image_urls`, `features`) are `|`-separated.
