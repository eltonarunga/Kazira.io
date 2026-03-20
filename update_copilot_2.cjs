const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pages', 'CopilotExamResponse.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/text-blue-100/g, 'text-white/80');
content = content.replace(/text-blue-200/g, 'text-white/60');
content = content.replace(/text-blue-400/g, 'text-white/50');
content = content.replace(/text-blue-700/g, 'text-gold');
content = content.replace(/border-blue-600/g, 'border-gold/30');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Done");
