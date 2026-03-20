const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('ExamResponse.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/bg-white/g, 'bg-[#141414]');
  content = content.replace(/border-red-100/g, 'border-[#262626]');
  
  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Done");
