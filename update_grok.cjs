const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pages', 'GrokExamResponse.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/bg-red-900\/30/g, 'bg-gold/10');
content = content.replace(/text-red-400/g, 'text-gold');
content = content.replace(/text-red-500/g, 'text-gold');
content = content.replace(/border-gold\/50\/50/g, 'border-gold/20');
content = content.replace(/border-gold\/50\/20/g, 'border-gold/20');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Done");
