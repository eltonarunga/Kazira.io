const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('ExamResponse.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/text-gray-300/g, 'text-white/80');
  content = content.replace(/border-gray-700/g, 'border-[#333]');
  content = content.replace(/bg-gray-800/g, 'bg-[#222]');
  content = content.replace(/border-gray-800/g, 'border-[#262626]');
  content = content.replace(/from-gray-900/g, 'from-[#111]');
  content = content.replace(/border-gold\/50\/30/g, 'border-gold/20');

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Done");
