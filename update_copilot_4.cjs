const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pages', 'CopilotExamResponse.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/text-indigo-900/g, 'text-white');
content = content.replace(/text-indigo-400/g, 'text-gold');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Done");
