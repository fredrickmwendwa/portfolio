// Runs after `vite build` and the SSR build: renders <App /> to static HTML and
// injects it into dist/index.html so search engines get the full page content
// without running JavaScript. Also stamps today's date into the sitemap.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const serverDir = path.join(root, 'dist-server');

const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href);

const htmlPath = path.join(dist, 'index.html');
const template = fs.readFileSync(htmlPath, 'utf8');
if (!template.includes('<!--app-html-->')) throw new Error('index.html is missing the <!--app-html--> marker');
fs.writeFileSync(htmlPath, template.replace('<!--app-html-->', render()));

const sitemapPath = path.join(dist, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const today = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(sitemapPath, fs.readFileSync(sitemapPath, 'utf8').replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${today}</lastmod>`));
}

fs.rmSync(serverDir, { recursive: true, force: true });
console.log('Prerendered dist/index.html and stamped sitemap lastmod.');
