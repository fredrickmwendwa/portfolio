# Fredrick Mwendwa Portfolio

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)

A responsive personal portfolio website for Fredrick Mwendwa, a full-stack developer based in Nairobi, Kenya. The site presents his work, learning journey, technical stack, and contact information in a polished single-page experience built with React and Vite.

## What the project does

This project is a portfolio landing page for a developer who works across the full product stack:

- user-facing interfaces
- backend/API logic
- database-aware application thinking

The site highlights:

- a hero section with a clear value proposition
- selected project showcases
- professional journey and education timeline
- technology stack overview
- contact links for hiring and collaboration

The primary app layout is defined in [src/App.jsx](src/App.jsx), while the portfolio content is centralized in [src/data.js](src/data.js). Images and static assets live in [public](public).

## Why the project is useful

This project is useful for:

- recruiters evaluating full-stack candidates
- clients seeking a product-minded developer
- collaborators looking for a clear introduction to the developer’s background
- showcasing skills in frontend, backend, and data work in one place

Key benefits:

- fast, modern single-page experience
- easy to edit personal details and project data
- built with a lightweight React + Vite setup
- responsive design for desktop and mobile browsing

## Getting started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173
```

### Production build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project structure

```text
.
├── public/
│   ├── images/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customizing the content

Most portfolio content is stored in [src/data.js](src/data.js). Update the following to personalize the site:

- name, role, location, email, LinkedIn, and GitHub
- project details and case study entries
- journey and education text
- technology stack sections
- contact details and availability

Static images can be placed in [public/images](public/images) and referenced from [src/data.js](src/data.js).

## Where to get help

If you want to ask about this project or discuss opportunities:

- email: fredrickmwendwa77@gmail.com
- LinkedIn: https://linkedin.com/in/fredrick-mwendwa
- GitHub: https://github.com/fredrickmwendwa

For local development issues, start by checking the Vite dev server output and the browser console. If you are making content updates, review the portfolio data in [src/data.js](src/data.js) first.

## Maintenance and contribution

This project is maintained by Fredrick Mwendwa and is used as a personal developer portfolio and professional landing page.

Contributions are welcome if you want to suggest improvements such as:

- content polish
- accessibility fixes
- design refinements
- stronger portfolio storytelling

To contribute, open an issue or contact the maintainer directly using the links above. For larger changes, fork the repository and submit a pull request with a clear explanation of the improvement.

## License

No license file is included in this repository at the moment, so usage and redistribution should be confirmed directly with the maintainer before reuse beyond personal or educational purposes.
