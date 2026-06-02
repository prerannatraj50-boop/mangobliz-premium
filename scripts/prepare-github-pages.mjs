import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const clientDir = 'dist/client';

if (!existsSync(clientDir)) {
  console.error(`GitHub Pages deploy folder not found: ${clientDir}`);
  process.exit(1);
}

const copyIfExists = (from, to) => {
  if (!existsSync(from)) return;
  mkdirSync(dirname(to), { recursive: true });
  copyFileSync(from, to);
};

const copyHtmlFallbacks = (dir) => {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    if (!statSync(fullPath).isDirectory()) continue;

    const indexPath = join(fullPath, 'index.html');
    if (existsSync(indexPath)) {
      copyFileSync(indexPath, join(fullPath, '404.html'));
    }
    copyHtmlFallbacks(fullPath);
  }
};

copyIfExists('CNAME', join(clientDir, 'CNAME'));
copyIfExists(join(clientDir, 'index.html'), join(clientDir, '404.html'));
copyHtmlFallbacks(clientDir);
writeFileSync(join(clientDir, '.nojekyll'), '');

console.log('GitHub Pages files prepared in dist/client');
