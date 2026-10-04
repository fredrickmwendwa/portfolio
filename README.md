# Fredrick Mwendwa — Portfolio

React + Vite. No UI library, no animation library: CSS transitions and a little React state.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview
```

## Replace the placeholders

- **Content:** everything is in `src/data.js`. Anything in `[BRACKETS]` is a placeholder.
- **Screenshots:** add `public/images/projects/project-01.png` (and 02, 03). The `<img>` covers the placeholder automatically.
- **Portrait:** add `public/images/portrait.jpg` (4:5).
- **Projects:** add or remove entries in `projects` in `src/data.js`.
- **Attachment details:** fill in the three lines in `attachment.placeholders`.

## Before deploying

- Replace `YOUR-DOMAIN.example` in `index.html`, `public/robots.txt` and `public/sitemap.xml`.
- Add an Open Graph image and an `og:image` tag in `index.html` if you want a social preview card.
- Add alt text that describes each real screenshot in `src/data.js`.

## Structure

```
src/
  data.js            all copy and links
  styles.css         tokens + styles
  components/        Nav, Hero, Work, ProjectShot, Journey, About, Stack, Philosophy, Contact, Footer
public/              favicon, robots.txt, sitemap.xml, images/
```
