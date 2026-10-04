<div align="center">

# Fredrick Mwendwa — Portfolio

**Full-stack developer in Nairobi, Kenya.** A fast, accessible, pre-rendered portfolio built with React and Vite.

[Live site](https://fredrickmwendwa.vercel.app) · [LinkedIn](https://linkedin.com/in/fredrick-mwendwa) · [GitHub](https://github.com/fredrickmwendwa) · [Email](mailto:fredrickmwendwa77@gmail.com)

![React](https://img.shields.io/badge/React-18-101614?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-5-101614?logo=vite&logoColor=FFD62E)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-101614?logo=javascript&logoColor=F7DF1E)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-101614?logo=vercel&logoColor=white)

<img src="public/og-image.png" alt="Fredrick Mwendwa portfolio preview" width="720" />

</div>

---

## Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech stack](#tech-stack)
4. [Project structure](#project-structure)
5. [Getting started](#getting-started)
6. [Editing content](#editing-content)
7. [Design system](#design-system)
8. [SEO and Google Search Console](#seo-and-google-search-console)
9. [Deployment](#deployment)
10. [Performance and accessibility](#performance-and-accessibility)
11. [Troubleshooting](#troubleshooting)

---

## Overview

The site presents one idea: every page is read like a request travelling **interface → API → data**. Section labels are routes (`GET /work`, `POST /contact`), the stack is shown as three layers, and the journey is the same path taken over time. It has one job: help the right person contact me about a full-stack internship or junior software engineering role.

Sections: **Hero · Selected work · Journey · About · Stack · How I work · Contact**.

## Features

- **One-viewport hero** sized with `100svh`, with an interface / API / data visual that works without animation.
- **Sticky header that hides on scroll down and returns instantly on scroll up** (desktop). It stays visible while keyboard focus is inside it. On phones it is replaced by a bottom route dock.
- **Three consistent project case studies** (problem, built, role, outcome, stack, links), all driven by one data file.
- **Pre-rendered HTML.** The build renders the React app to static HTML, so crawlers read the full page without running JavaScript. React then hydrates it.
- **Complete SEO setup:** title and description, canonical, Open Graph and Twitter cards, a 1200×630 share image, JSON-LD (`WebSite`, `ProfilePage`, `Person`), `robots.txt`, an auto-dated `sitemap.xml`, favicon set, web manifest, and the Google Search Console verification file.
- **Contact section** with an email button, copy-to-clipboard with spoken feedback for screen readers, and LinkedIn and GitHub rows.
- **Accessible by default:** semantic landmarks, a single `h1`, visible focus states, a skip link, 44px touch targets, `prefers-reduced-motion` support.
- **No UI libraries.** Hand-written CSS with design tokens, plain React, about 51 kB of gzipped JavaScript.

## Tech stack

| Layer | Choice |
| --- | --- |
| UI | React 18 (JavaScript, JSX) |
| Build | Vite 5, with an SSR build used only for pre-rendering |
| Styling | Plain CSS with custom properties (`src/styles.css`) |
| Fonts | Bricolage Grotesque, Hanken Grotesk, IBM Plex Mono (Google Fonts) |
| Hosting | Vercel (static output in `dist/`) |

## Project structure

```
.
├── index.html               # SEO metadata, JSON-LD, root element
├── vercel.json              # Security and cache headers
├── scripts/
│   └── prerender.mjs        # Runs after the build: injects rendered HTML, stamps sitemap date
├── public/                  # Served as-is from the site root
│   ├── images/              # Portrait and project screenshots
│   ├── og-image.png         # 1200×630 social share image
│   ├── favicon.svg / .ico   # Icons (plus 48, 192, 512 px PNGs and apple-touch-icon)
│   ├── site.webmanifest
│   ├── robots.txt
│   ├── sitemap.xml
│   └── google8c865cb0a4f36a4e.html   # Search Console verification
└── src/
    ├── main.jsx             # Hydrates the pre-rendered page (renders from scratch in dev)
    ├── entry-server.jsx     # Server entry used by the pre-render step
    ├── App.jsx              # Header, hero, sections, contact, footer
    ├── data.js              # All editable content
    └── styles.css           # Design tokens and all styles
```

## Getting started

Requires **Node.js 18.18 or newer** (the current LTS is fine) and Git.

```bash
git clone https://github.com/fredrickmwendwa/portfolio.git
cd portfolio
npm install
npm run dev
```

Open <http://localhost:5173>. Windows users can run these commands in PowerShell, Windows Terminal or the VS Code terminal.

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server with hot reload |
| `npm run build` | Builds the site, then pre-renders it into `dist/` |
| `npm run preview` | Serves the production build at <http://localhost:4173> |

> Use `npm run build` followed by `npm run preview` to check the real production output, including the pre-rendered HTML. View the page source in the browser and you will see the full content inside `<div id="root">`.

## Editing content

Almost everything lives in **`src/data.js`**. Change the text and the layout updates itself.

- **Projects:** edit the three entries in `projects` (`name`, `kind`, `stack`, `problem`, `built`, `role`, `outcome`, `image`, `imageAlt`). Add `liveUrl` and/or `sourceUrl`; a link only appears when its URL is set.
- **Journey, stack, principles:** edit `journey`, `layers` and `principles`.
- **Contact details and site URL:** edit `EMAIL`, `LINKEDIN`, `GITHUB` and `SITE_URL` at the top of the file.
- **About text and hero copy:** edit `src/App.jsx` (`About` and `Hero`).

**Images**

1. Put files in `public/images/` (for example `project-1.jpg`).
2. Reference them from `data.js` with a path starting with `/` (for example `'/images/project-1.jpg'`).
3. Keep project screenshots around 1600 px wide and under 300 kB (JPG or WebP). Give every image a descriptive `imageAlt`.

## Design system

All tokens are CSS custom properties at the top of `src/styles.css`.

| Token | Value | Use |
| --- | --- | --- |
| `--lichen` | `#ECEEE9` | Page ground |
| `--paper` | `#F6F7F4` | Raised surfaces |
| `--ink` | `#101614` | Text |
| `--graphite` | `#4B5651` | Secondary text |
| `--hair` | `#CDD2CB` | Borders |
| `--signal` / `--signal-text` | `#E4572E` / `#B63A14` | One accent: marks and rules / accessible text |
| `--night` / `--signal-night` | `#0F1A17` / `#FF7A4D` | Dark sections and the accent on dark |
| `--live` | `#2F7D4F` | Availability dot |

Typography: Bricolage Grotesque for display, Hanken Grotesk for body, IBM Plex Mono for routes and metadata. Layout is a 12-column grid on desktop that collapses below 900 px, with a bottom dock replacing the nav below 640 px.

## SEO and Google Search Console

Everything below is already in the repository. The production URL is `https://fredrickmwendwa.vercel.app`.

**What is configured**

- `index.html`: title, description, canonical, robots directives, Open Graph, Twitter cards, icons, manifest and JSON-LD.
- `public/robots.txt` allows everything and points to the sitemap.
- `public/sitemap.xml` lists the page and portrait; the build stamps today's date into `<lastmod>`.
- Pre-rendered HTML, so the content is indexable without JavaScript.

**If you change the domain** (for example to a custom domain), replace `https://fredrickmwendwa.vercel.app` in `index.html`, `public/robots.txt`, `public/sitemap.xml`, `public/og-image.png` (the URL is printed on it) and `SITE_URL` in `src/data.js`.

**Submit the site to Google**

1. Go to [Google Search Console](https://search.google.com/search-console) and choose **Add property → URL prefix**, then enter `https://fredrickmwendwa.vercel.app/`.
2. Choose **HTML file** verification. The file `google8c865cb0a4f36a4e.html` is already deployed from `public/`. Open `https://fredrickmwendwa.vercel.app/google8c865cb0a4f36a4e.html` to confirm it loads, then click **Verify**. If Google gives you a different file name, add that file to `public/` with the exact content it shows, deploy, then verify.
3. Open **Sitemaps**, enter `sitemap.xml` and click **Submit**.
4. Open **URL Inspection**, paste the homepage URL and click **Request indexing**.
5. Come back after a few days. Check **Pages** for indexing status and **Performance** for queries. Do not delete the verification file, or the property can lose verification.

**Check the result**

- [Rich Results Test](https://search.google.com/test/rich-results) for the JSON-LD.
- [PageSpeed Insights](https://pagespeed.web.dev) for Core Web Vitals.
- Paste the URL into a LinkedIn post draft or the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to confirm the share image.

## Deployment

Hosted on **Vercel** and redeployed automatically on every push to `main`.

1. Push the repository to GitHub.
2. In Vercel choose **Add New → Project**, import the repository and click **Deploy**.
3. Vercel detects Vite. The defaults are correct: build command `npm run build`, output directory `dist`.

`vercel.json` adds security headers (HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) and long-lived caching for hashed assets.

To update the site: edit, then run

```bash
git add .
git commit -m "Describe the change"
git push
```

## Performance and accessibility

- Pre-rendered HTML and about 51 kB gzipped JavaScript, with no animation or UI libraries.
- Images below the fold use `loading="lazy"` and `decoding="async"`, and image frames reserve their space with `aspect-ratio` to avoid layout shift.
- Motion is limited to short entrance and hover transitions, all disabled under `prefers-reduced-motion`.
- Colour pairs meet WCAG AA for text; the orange accent on light backgrounds uses the darker `--signal-text` value.
- Keyboard: skip link, visible focus rings, the hidden header reappears when focus enters it.

## Troubleshooting

- **`npm` is not recognised on Windows:** reinstall Node.js, then open a new terminal window.
- **A project image does not show:** check the file is in `public/images/` and the path in `data.js` starts with `/images/` and matches the file name and case exactly.
- **Build fails with an SSR error:** code that touches `window` or `document` must run inside `useEffect`, because the page is rendered on the server during the build.
- **Google still shows an old title or image:** use **URL Inspection → Request indexing**; changes can take days to appear.

---

<div align="center">

Designed and built by **Fredrick Mwendwa** · Nairobi, Kenya · © 2026

</div>
