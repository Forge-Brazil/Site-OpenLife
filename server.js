import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(__dirname, 'dist/client');
const PORT = Number(process.env.PORT) || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
};

function send(res, filePath) {
  const ext = path.extname(filePath);
  const stream = fs.createReadStream(filePath);
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  stream.pipe(res);
}

const server = http.createServer((req, res) => {
  let pathname = decodeURIComponent(req.url.split('?')[0]);
  if (pathname !== '/' && pathname.endsWith('/')) pathname = pathname.slice(0, -1);

  // 1) Asset estático (tem extensão): serve direto se existir
  const ext = path.extname(pathname);
  if (ext) {
    const filePath = path.join(clientDir, pathname);
    if (filePath.startsWith(clientDir) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return send(res, filePath);
    }
    res.writeHead(404);
    return res.end('Not found');
  }

  // 2) Rota pré-renderizada: dist/client/<rota>/index.html
  const prerenderedPath = path.join(clientDir, pathname, 'index.html');
  if (prerenderedPath.startsWith(clientDir) && fs.existsSync(prerenderedPath)) {
    return send(res, prerenderedPath);
  }

  // 3) Fallback SPA: index.html raiz (CSR para rotas sem pré-render)
  return send(res, path.join(clientDir, 'index.html'));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
