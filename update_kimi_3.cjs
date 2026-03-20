const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pages', 'KimiExamResponse.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/border-red-500/g, 'border-gold/30');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Done");
