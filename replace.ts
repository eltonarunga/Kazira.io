import fs from 'fs';
import path from 'path';

const directories = ['components', 'pages', '.'];

function processFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-white');
  content = content.replace(/bg-\[#141414\]/g, 'bg-gray-50');
  content = content.replace(/bg-\[#1a1a1a\]/g, 'bg-gray-100');
  content = content.replace(/bg-\[#0f0f0f\]/g, 'bg-white');
  content = content.replace(/border-\[#262626\]/g, 'border-gray-200');
  content = content.replace(/border-\[#333\]/g, 'border-gray-300');
  content = content.replace(/text-white/g, 'text-black');
  content = content.replace(/border-white/g, 'border-black');
  content = content.replace(/bg-white/g, 'bg-black');
  content = content.replace(/text-\[#0a0a0a\]/g, 'text-white');
  content = content.replace(/from-\[#111\]/g, 'from-gray-100');
  content = content.replace(/to-black/g, 'to-white');
  content = content.replace(/prose-invert/g, '');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        walkDir(filePath);
      }
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.html')) {
      processFile(filePath);
    }
  }
}

for (const dir of directories) {
  if (dir === '.') {
    processFile('App.tsx');
    processFile('index.tsx');
    processFile('index.html');
  } else {
    walkDir(dir);
  }
}
