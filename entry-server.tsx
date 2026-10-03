import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import AppShell, { SEO_META } from './App';
import { buildSchema } from './data/schema';
import { MOCK_POSTS } from './constants';

// Catálogo público do blog (dist/client/blog-posts.json, gerado no prerender).
// O ERP lê esta lista para anexar artigos às edições da newsletter; o link de
// cada artigo é /blog?post=<slug>. Só metadados — nunca o conteúdo inteiro.
export function blogPostsCatalog() {
  return MOCK_POSTS.map(({ id, title, excerpt, category, tags, date, image, slug }) => ({
    id, title, excerpt, category, tags, date, image, slug,
  }));
}

export function render(url: string) {
  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </React.StrictMode>
  );
  const meta = SEO_META[url] ?? SEO_META['/'];
  const schema = buildSchema(url);
  return { html, meta, schema };
}
