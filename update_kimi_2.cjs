const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pages', 'KimiExamResponse.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/bg-red-50/g, 'bg-[#0a0a0a]');
content = content.replace(/bg-red-600/g, 'bg-gold/10');
content = content.replace(/bg-red-900/g, 'bg-[#1a1a1a]');
content = content.replace(/border-red-700/g, 'border-[#262626]');
content = content.replace(/hover:bg-red-700/g, 'hover:bg-gold/20');
content = content.replace(/text-white px-3/g, 'text-gold px-3');
content = content.replace(/text-white border-b/g, 'text-white border-b');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Done");
