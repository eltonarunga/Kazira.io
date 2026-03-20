import fs from 'fs';
import path from 'path';

const directories = ['components', 'pages', '.'];

function processFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace bg-black with bg-white when it's a full class name
  content = content.replace(/bg-black(?=[\s"'])/g, 'bg-white');
  
  // Fix specific text-black that should be text-white on dark elements
  // But wait, we just made everything bg-white. So text-black is correct for bg-white.
  
  // Let's fix the header
  content = content.replace(/bg-black\/90/g, 'bg-white/90');

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
