const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('ExamResponse.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // bg-gray-50
  content = content.replace(/bg-gray-50/g, 'bg-[#1a1a1a]');
  
  // border-gray-100, border-gray-200, border-gray-300
  content = content.replace(/border-gray-100/g, 'border-[#333]');
  content = content.replace(/border-gray-200/g, 'border-[#333]');
  content = content.replace(/border-gray-300/g, 'border-[#333]');
  
  // text-gray-900, text-gray-800
  content = content.replace(/text-gray-900/g, 'text-white');
  content = content.replace(/text-gray-800/g, 'text-white/90');
  
  // text-gray-500, text-gray-600, text-gray-700
  content = content.replace(/text-gray-500/g, 'text-white/50');
  content = content.replace(/text-gray-600/g, 'text-white/60');
  content = content.replace(/text-gray-700/g, 'text-white/70');
  
  // text-gray-400
  content = content.replace(/text-gray-400/g, 'text-white/40');
  
  // bg-gray-100
  content = content.replace(/bg-gray-100/g, 'bg-[#141414]');
  
  // bg-gray-400
  content = content.replace(/bg-gray-400/g, 'bg-[#333]');
  
  // bg-gray-500
  content = content.replace(/bg-gray-500/g, 'bg-[#444]');
  
  // text-blue-600
  content = content.replace(/text-blue-600/g, 'text-gold');
  
  // border-red-900
  content = content.replace(/border-red-900/g, 'border-gold/50');
  
  // bg-red-950/40
  content = content.replace(/bg-red-950\/40/g, 'bg-gold/10');
  
  // border-red-900/30
  content = content.replace(/border-red-900\/30/g, 'border-gold/20');

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Done");
