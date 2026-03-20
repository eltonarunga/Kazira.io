const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pages', 'CopilotExamResponse.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/bg-gradient-to-r from-blue-600 to-indigo-700/g, 'bg-[#0a0a0a]');
content = content.replace(/border-blue-800/g, 'border-[#262626]');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Done");
