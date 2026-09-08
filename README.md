# 🎓 Skill Enhancer

**Your skill-enhanced journey leads to growth and opportunity.**

Skill Enhancer is a scholarship and free-course discovery platform built with
Next.js and Sanity CMS. It helps students find international scholarships —
browsable by country or level of study — funded by a headless CMS so new
opportunities can be published without a code deploy.

**Live:** [skill-enhancer-eight.vercel.app](https://skill-enhancer-eight.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19_RC-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Sanity](https://img.shields.io/badge/CMS-Sanity-f03e2f?logo=sanity)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss)
![CI](https://github.com/asadullah48/skill-enhancer/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

## 📖 Overview

Higher education is full of real opportunities — scholarships, grants, free
courses — that are hard to *find*. Skill Enhancer's vision is to make that
search simple: a fast, browsable catalog of scholarships by country and by
level of study, backed by a CMS so the underlying content can grow (new
countries, new listings, new courses) without touching application code.

**Vision:** become the front door for discovering education funding —
scholarships today, free/low-cost courses next — with the content layer
already structured well enough to eventually power a matching *agent*, not
just a browsable list (see [Agentic AI Alignment](#-agentic-ai-alignment)).

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack in dev) + React 19 RC
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Radix UI primitives (Accordion, Dropdown Menu,
  Sheet) styled as shadcn/ui-pattern components
- **Icons:** lucide-react
- **CMS:** [Sanity](https://www.sanity.io/) — headless content, embedded
  Studio at `/studio`, GROQ queries via `@sanity/client`
- **Rich text:** `@portabletext/react` for CMS-authored scholarship
  descriptions
- **CI:** GitHub Actions (lint + typecheck on every push/PR)

## ✨ Features & Modules

- 🏠 **Home** — "Recommended" and "Just Landed" scholarship grids, pulled
  live from Sanity with 30-second ISR revalidation
- 🌍 **Country-wise browsing** — `/scholarshipdivision/countrieswise` plus a
  per-country page; the schema models 26 countries, with a "Popular
  Countries" flag-icon shortcut on the homepage for the top 6
- 🎓 **Level-wise browsing** — dedicated pages for Undergraduate, Masters,
  Doctoral, and Postdoctoral scholarships
- 📄 **Scholarship detail pages** — dynamic `[slug]` routes rendering
  Portable Text (rich text) descriptions from the CMS
- 🖥️ **Content management** — non-technical editors manage listings through
  the embedded Sanity Studio at `/studio`, no redeploy needed
- 📬 **Contact page** — a form is in place; see *Known Issues* below, it
  isn't wired to a backend yet
- 📚 **Free Courses** — page scaffolded, marked "Coming Soon" (not built yet)

## 🧭 Agentic AI Alignment

Skill Enhancer isn't an agent today, but its content layer is deliberately
shaped to become one's data source — a real step in the **Agentic AI ARA**
journey:

- **Autonomy** — `lib/client.ts` and `lib/image.ts` are pure, framework-free
  wrappers around Sanity's GROQ API. An agent could query
  `*[_type=='scholarship' && 'masters' in levelOfStudies]` directly — the
  same call the UI makes — to autonomously match scholarships to a student's
  profile, with no UI code in the loop.
- **Resilience** — this audit found and fixed a missing dependency
  (`next-sanity`) and a broken import (`urlFor` pulled from the wrong
  module) that silently broke every content page. CI now runs lint +
  typecheck on every push specifically to catch that class of regression
  before it reaches production — the same guardrail an agent pipeline needs
  around any step it can't fully observe.
- **Adaptivity** — the `scholarship` schema (`src/sanity/schemaTypes/
  scholarship-schema.ts`) drives country lists, study levels, and funding
  types entirely from CMS-editable dropdowns. Extending the domain (a new
  country, a new scholarship type) is a content change, not a code change —
  the same flexibility an adaptive agent needs as its domain grows.

**Concretely next**, per the roadmap below: wrap the existing GROQ queries as
an MCP tool so an AI assistant can recommend scholarships from a natural-
language student profile, using this exact dataset.

## 🚀 Getting Started

```bash
git clone https://github.com/asadullah48/skill-enhancer.git
cd skill-enhancer
npm install                # .npmrc handles the peer-dep conflict, see Known Issues
cp .env.example .env.local # fill in your Sanity project ID + dataset
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the site, or
[http://localhost:3000/studio](http://localhost:3000/studio) for the CMS.

## 🧪 Checks

```bash
npm run lint       # ESLint
npx tsc --noEmit   # TypeScript
```

Both run in CI on every push and PR. `next build` is intentionally **not**
run in CI — it fetches live content from a real Sanity dataset at build
time, which CI has no credentials for; run it locally against your own
Sanity project instead.

## ⚠️ Known Issues

Found during this audit, documented rather than hidden:

- **Peer dependency conflict:** the pinned React 19 RC build conflicts with
  `@sanity/vision`'s strict `react@^18` peer requirement — a plain
  `npm install` fails with `ERESOLVE` without it. `.npmrc` sets
  `legacy-peer-deps=true` so this resolves automatically (on Vercel, CI,
  and fresh clones alike) until the Sanity toolchain (or this project's
  React pin) updates.
- **Contact form is a front-end stub** — it validates and resets, but
  `handleSubmit` only `console.log`s the payload; no email/API integration
  yet.
- **Free Courses page** is a placeholder ("Coming Soon") — the nav links to
  it, but no course content or data model exists yet.

## 🗺 Roadmap

- [ ] Wire the Contact form to a real backend or transactional-email API
- [ ] Build out Free Courses (own Sanity schema + listing/detail pages)
- [ ] Resolve the React 19 RC / Sanity peer-dependency conflict with a
      matched stable version pin
- [ ] Add automated tests (component + GROQ query smoke tests)
- [ ] Expose the scholarship GROQ queries as an MCP tool so an AI assistant
      can recommend scholarships from a student's profile
- [ ] Deploy to Vercel with a live, linked homepage URL
- [ ] Longer term: adaptive learning — track which recommendations students
      act on to improve future matches

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for local setup (including the
Sanity project you'll need) and the checks that run in CI.

## 📄 License

MIT — see [LICENSE](./LICENSE).

## 👨‍💻 Author

Built by Asadullah Shafique.

🔗 Explore my portfolio showcasing Agentic AI projects and real-world applications:
[asadullahshafique-devunity.vercel.app](https://asadullahshafique-devunity.vercel.app)
