import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import AppShell, { SEO_META } from './App';

export function render(url: string) {
  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </React.StrictMode>
  );
  const meta = SEO_META[url] ?? SEO_META['/'];
  return { html, meta };
}
