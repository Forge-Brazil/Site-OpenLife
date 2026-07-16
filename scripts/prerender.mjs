import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const clientDir = path.join(root, 'dist/client');
const serverEntry = path.join(root, 'dist/server/entry-server.js');

const ROUTES = [
  '/',
  '/cursos',
  '/metodologia',
  '/sobre',
  '/blog',
  '/contato',
  '/franquia',
  '/ingles-online',
  '/ingles-para-adultos',
  '/ingles-para-criancas',
  '/ingles-para-adolescentes',
  '/ingles-para-negocios',
  '/termos',
  '/privacidade',
  '/cookies',
  '/reels',
  '/openstore',
];

const template = fs.readFileSync(path.join(clientDir, 'index.html'), 'utf-8');
const { render } = await import(pathToFileURL(serverEntry).href);

for (const route of ROUTES) {
  const { html: appHtml, meta } = render(route);

  let page = template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${meta.description}$2`
    )
    .replace(
      /(<meta property="og:title" content=")[^"]*(")/,
      `$1${meta.title}$2`
    )
    .replace(
      /(<meta property="og:description" content=")[^"]*(")/,
      `$1${meta.description}$2`
    )
    .replace(
      /(<meta property="og:url" content=")[^"]*(")/,
      `$1${meta.canonical}$2`
    )
    .replace(
      /(<meta name="twitter:title" content=")[^"]*(")/,
      `$1${meta.title}$2`
    )
    .replace(
      /(<meta name="twitter:description" content=")[^"]*(")/,
      `$1${meta.description}$2`
    );

  if (page.includes('rel="canonical"')) {
    page = page.replace(
      /(<link rel="canonical" href=")[^"]*(")/,
      `$1${meta.canonical}$2`
    );
  } else {
    page = page.replace(
      '</title>',
      `</title>\n    <link rel="canonical" href="${meta.canonical}" />`
    );
  }

  const outDir = route === '/' ? clientDir : path.join(clientDir, route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), page, 'utf-8');
  console.log(`Prerendered ${route}`);
}

console.log(`\nPré-renderização concluída: ${ROUTES.length} rotas.`);
