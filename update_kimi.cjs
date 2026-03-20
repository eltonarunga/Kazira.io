const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pages', 'KimiExamResponse.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/text-red-100/g, 'text-white/80');
content = content.replace(/text-red-200/g, 'text-white/60');
content = content.replace(/text-red-400/g, 'text-white/50');
content = content.replace(/text-red-600/g, 'text-gold');
content = content.replace(/text-red-700/g, 'text-white');
content = content.replace(/border-red-200/g, 'border-gold/20');
content = content.replace(/hover:bg-red-100/g, 'hover:bg-gold/10');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Done");
