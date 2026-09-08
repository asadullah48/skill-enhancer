# Contributing to Skill Enhancer

Thanks for wanting to help! Skill Enhancer is a Next.js + Sanity CMS platform
for discovering international scholarships and free courses. Contributions of
any size — a broken link, a new country page, a whole feature — are welcome.

## Getting set up

1. Fork and clone the repo.
2. `npm install --legacy-peer-deps` (required — see "Known Issues" in the
   README: a pinned React 19 RC conflicts with a package that still declares
   a strict `react@^18` peer dependency).
3. Create a [Sanity](https://www.sanity.io/) project (free tier) with a
   `scholarship` document type matching
   `src/sanity/schemaTypes/scholarship-schema.ts`, then:
   ```bash
   cp .env.example .env.local
   ```
   and fill in your project ID and dataset name.
4. `npm run dev` and open [http://localhost:3000](http://localhost:3000).
   Manage content at `/studio` (embedded Sanity Studio).

## Before opening a PR

```bash
npm run lint          # ESLint
npx tsc --noEmit       # type check
```

Both run in CI on every push and pull request (see `.github/workflows/ci.yml`).
Note that CI does **not** run `next build` — the build fetches live content
from a real Sanity dataset, which CI doesn't have credentials for. Please
run `npm run build` locally against your own Sanity project before a PR that
touches data-fetching code.

## Code style

- Server components fetch data via `client.fetch(...)` from
  `@/sanity/lib/client`; image URLs are built via `urlFor(...)` from
  `@/sanity/lib/image` — keep those two imports separate (a past bug had
  every page importing `urlFor` from the wrong module).
- Country/level browsing pages follow a consistent pattern — see
  `src/app/scholarshipdivision/levelwise/*/page.tsx` for the template when
  adding a new dimension (e.g. by scholarship type).

## Reporting bugs / suggesting features

Open a GitHub issue with steps to reproduce (for bugs) or the use case you
have in mind (for features). Screenshots help a lot for UI issues.
