<p align="center">
  <img src="public/images/logo-horizontal.svg" alt="Tabibi — طبيبي" width="260" />
</p>

<h1 align="center">Tabibi — Portfolio / Case Study</h1>

<p align="center">
  A bilingual (Arabic RTL / English LTR) single-page portfolio that presents the <strong>Tabibi (طبيبي)</strong> digital health platform: the problem, the solution, the four portals, the AI pipeline, the architecture and the team.
</p>

<p align="center">
  <a href="https://tabibi-frontend.apps.taqat.academy" target="_blank" rel="noopener noreferrer">Live platform</a> ·
  <a href="#getting-started">Getting started</a> ·
  <a href="#deploying-to-vercel">Deploy</a>
</p>

> The live portfolio URL will appear here once the repository is connected to Vercel.

---

## About

Tabibi is a digital platform that helps private clinic doctors manage appointments, medical records and digital prescriptions in one place — available as a **web platform (4 portals)** and a **mobile app (patient + doctor)**, with a **QR medical record** and **AI-assisted documentation** (voice note → transcription → identity stripping → Claude via MCP → structured JSON → doctor review → save).

This repository contains only the portfolio/case-study website. It ships **no secrets, no API keys and no demo credentials**.

## Screenshots

The gallery shows real screenshots of the admin, doctor and patient portals plus the mobile app. Screenshots that were not available yet are rendered as clearly labeled gray placeholders.

## Tech stack (this site)

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion (respects `prefers-reduced-motion`) |
| Internationalization | i18next + react-i18next (ar / en) |
| Icons | lucide-react |
| Font | Cairo (Google Fonts) |
| Hosting | Vercel (SPA rewrites via `vercel.json`) |

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/    Navbar, Hero, Stats, Problem, Solution, Timeline, RolesTabs,
                 Gallery + Lightbox, AiPipeline, TechStack, Decisions,
                 Roadmap, Team, Contact, Footer, toggles, Reveal, SectionHead
  data/content.js    All external links + non-translatable data
  locales/ar.json    Every Arabic text
  locales/en.json    Every English text
  hooks/useTheme.js  Light/dark theme (prefers-color-scheme aware)
  i18n.js            i18next setup + lang/dir handling
public/
  images/screens/    Platform screenshots (gray placeholders where missing)
  images/team/       Team photos (initial fallback when a photo is missing)
```

## Deploying to Vercel

1. Import this repository in Vercel.
2. Framework preset: **Vite** · Build command: `npm run build` · Output directory: `dist`.
3. After deployment, update the real domain in:
   - `index.html` (`canonical`, `og:url`)
   - `public/sitemap.xml`
   - `public/robots.txt`

## Localization & theming

- Arabic (RTL) is the default; the language toggle switches instantly and persists in `localStorage`.
- Light/dark theme follows `prefers-color-scheme` on first visit and persists afterwards.
- All copy lives in `src/locales/*.json` — no hard-coded strings inside components.

## Roadmap of this repository

- [ ] Add the presentation URL to `links.presentation` in `src/data/content.js` (the hero button appears automatically once it is set).
- [ ] Replace gray placeholders in `public/images/screens/` with real screenshots.
- [ ] Blur or replace personal data (names/emails) visible in some screenshots before public release.
- [ ] Update `og:url`, `sitemap.xml` and `robots.txt` with the final Vercel domain.

## Team

| Name | Role |
|---|---|
| Mazen Hazem Abu Saif | Team Leader + Full-Stack Developer |
| Abdallah Al-Manaama | Full-Stack Developer |
| Jaber Abdullah | Backend Developer |
| Amin Al-Nawajha | Mobile Developer |
| Basel Mahmoud Jaber | UI/UX Designer |

## License

Case study for academic showcase. All rights reserved by the Tabibi team.
