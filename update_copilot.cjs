const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pages', 'CopilotExamResponse.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/bg-blue-600/g, 'bg-gold/10');
content = content.replace(/bg-blue-50/g, 'bg-[#1a1a1a]');
content = content.replace(/border-blue-200/g, 'border-[#262626]');
content = content.replace(/hover:bg-blue-700/g, 'hover:bg-gold/20');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Done");
