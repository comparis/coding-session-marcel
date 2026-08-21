# Coding Session: Real Estate Listings

## Background

We operate a real estate marketplace. Partner agencies send us their
property listings. We import the listings, check them, and improve
their data. End users then search the listings.

You will build a small version of this system.

## How we work

This is a pair programming session. We work together for 90 minutes.
You drive: you make the decisions and you write the code with Claude
Code. We are your pair. Ask us questions at any time. Tell us what you
think and what you plan. There are no wrong questions.

## What you get

The repository contains three applications. All three start correctly.
See the README for the commands.

| Folder             | What it is               | Port |
| ------------------ | ------------------------ | ---- |
| `backend/`         | .NET 10 API              | 8080 |
| `listing-manager/` | Web app for agency users | 3000 |
| `frontend/`        | Web app for end users    | 3001 |

You also get test data: `data/listings.csv`. It contains 100 listings
from 5 agencies.

## Architecture rule

The real system is a set of small services. The services communicate
through a message bus. Your system must show the same structure, but it
runs as one process. Simulate the message bus inside the process. In
.NET, `System.Threading.Channels` is one option.

Keep all data in memory. Do not add a database.

## Tasks

You can do the tasks in any order. Tell us how you choose your order.
You do not have to finish all tasks. A small part that works is better
than a large part that does not work.

- **Single-listing API.** The backend accepts one new listing through
  an HTTP POST request. Store the listing in memory.

- **CSV import.** Get the 100 listings from `data/listings.csv` into
  the backend. How the listings get into the backend is your decision.
  Tell us why you chose your way.

- **Enrichment.** Each listing that enters the backend goes through
  three enrichment steps:
  - *Geo coding.* Add coordinates to the listing. Fake coordinates
    are OK.
  - *Fraud check.* Reject the listing if the contact e-mail starts
    with `fraud@`. End users must never see a rejected listing.
  - *Price calculation.* Compute the price per m² for each listing.
    For rent listings, use the monthly rent. For buy listings, use the
    purchase price. The search portal shows this value on the detail
    page.

  Each enrichment step takes time in the real system. Simulate this
  with a short delay (for example, one second for each step).

- **Search portal (`frontend/`).** An end user searches the enriched
  listings. Filter by city and price. Show a detail page for one
  listing.

- **Listing manager (`listing-manager/`).** An agency user sees the
  listings of their agency. The user edits a listing and publishes it.
  A published listing goes through the enrichment steps again. The
  listing manager always shows the listing exactly as the agency sent
  it. The search portal shows the enriched listing.

- **Bonus: live status.** Enrichment takes time. After the user
  publishes a listing, show the status of the listing in the listing
  manager (for example: processing, published, rejected). Update the
  status automatically. The user does not reload the page.

## Rules

- No login and no user accounts. The listing manager selects the
  agency in a simple way (for example, a dropdown or a URL parameter).
  The backend trusts the client.
- Do not call external services. Fake everything.
- Use Claude Code as your coding assistant. We want to see how you
  work with it.
- You can start Claude Code with `claude --permission-mode auto` if
  you feel comfortable with it. This is your choice.

## What we look at

- Does the software work?
- How do you structure the code and the data?
- How do you handle the asynchronous flow?
- How do you plan and order your work?
- How do you work with Claude Code?
- How do you check the code that Claude Code writes?
- How do you explain your decisions?
