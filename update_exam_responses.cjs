const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('ExamResponse.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/className="bg-gray-50 min-h-screen py-12 md:py-20"/g, 'className="bg-[#0a0a0a] min-h-screen py-12 md:py-20"');
  content = content.replace(/className="bg-black text-white px-3 py-1 rounded-full text-\[10px\] font-bold tracking-widest uppercase"/g, 'className="bg-gold/10 text-gold border border-gold/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"');
  content = content.replace(/className="bg-white shadow-2xl rounded-\[2\.5rem\] overflow-hidden border border-gray-100"/g, 'className="bg-[#141414] shadow-2xl rounded-[2.5rem] overflow-hidden border border-[#262626]"');
  content = content.replace(/className="bg-black p-8 md:p-12 text-white border-b border-gray-800"/g, 'className="bg-[#0a0a0a] p-8 md:p-12 text-white border-b border-[#262626]"');
  content = content.replace(/className="text-4xl md:text-5xl font-black font-serif mb-4 leading-tight"/g, 'className="text-4xl md:text-5xl font-black font-serif mb-4 leading-tight text-white"');
  content = content.replace(/className="text-gray-400 font-mono text-sm tracking-wide uppercase"/g, 'className="text-white/50 font-mono text-sm tracking-wide uppercase"');
  content = content.replace(/className="text-6xl font-black font-mono"/g, 'className="text-6xl font-black font-mono text-gold"');
  content = content.replace(/className="text-\[10px\] text-gray-500 uppercase tracking-tighter"/g, 'className="text-[10px] text-white/40 uppercase tracking-tighter"');
  content = content.replace(/className="p-8 md:p-16 prose prose-lg max-w-none font-serif text-gray-800 leading-relaxed"/g, 'className="p-8 md:p-16 prose prose-invert prose-lg max-w-none font-serif text-white/80 leading-relaxed"');
  content = content.replace(/className="text-xl font-medium text-gray-600 italic border-l-4 border-gray-200 pl-6 mb-12"/g, 'className="text-xl font-medium text-gold/80 italic border-l-4 border-gold/30 pl-6 mb-12"');
  content = content.replace(/className="my-12 border-gray-100"/g, 'className="my-12 border-[#262626]"');
  content = content.replace(/className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3"/g, 'className="text-3xl font-black text-white mb-6 font-sans flex items-center gap-3"');
  
  // Replace icon colors
  content = content.replace(/text-gray-400" strokeWidth=\{2\}/g, 'text-gold" strokeWidth={2}');
  content = content.replace(/text-purple-600" strokeWidth=\{2\}/g, 'text-gold" strokeWidth={2}');
  content = content.replace(/text-blue-500" strokeWidth=\{2\}/g, 'text-gold" strokeWidth={2}');
  content = content.replace(/text-blue-600" strokeWidth=\{2\}/g, 'text-gold" strokeWidth={2}');
  content = content.replace(/text-green-600" strokeWidth=\{2\}/g, 'text-gold" strokeWidth={2}');
  content = content.replace(/text-red-600" strokeWidth=\{2\}/g, 'text-gold" strokeWidth={2}');
  content = content.replace(/text-yellow-600" strokeWidth=\{2\}/g, 'text-gold" strokeWidth={2}');
  content = content.replace(/text-indigo-600" strokeWidth=\{2\}/g, 'text-gold" strokeWidth={2}');
  content = content.replace(/text-pink-600" strokeWidth=\{2\}/g, 'text-gold" strokeWidth={2}');
  content = content.replace(/text-orange-600" strokeWidth=\{2\}/g, 'text-gold" strokeWidth={2}');
  content = content.replace(/text-teal-600" strokeWidth=\{2\}/g, 'text-gold" strokeWidth={2}');
  content = content.replace(/text-cyan-600" strokeWidth=\{2\}/g, 'text-gold" strokeWidth={2}');
  
  content = content.replace(/className="text-xl font-bold text-gray-900 mb-4 font-sans"/g, 'className="text-xl font-bold text-white mb-4 font-sans"');
  content = content.replace(/className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans"/g, 'className="text-xl font-bold text-white mt-8 mb-4 font-sans"');
  content = content.replace(/className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6 italic"/g, 'className="bg-[#1a1a1a] p-6 rounded-xl border border-[#333] mt-6 italic text-white/60"');
  content = content.replace(/className="text-2xl italic mb-8 border-l-4 border-black pl-6"/g, 'className="text-2xl italic mb-8 border-l-4 border-gold/50 pl-6 text-white/90"');
  content = content.replace(/className="bg-black text-white p-6 rounded-xl mt-8 font-sans"/g, 'className="bg-gold/10 border border-gold/20 text-white p-6 rounded-xl mt-8 font-sans"');
  content = content.replace(/className="mt-20 border-t-2 border-black pt-12 text-center italic text-gray-500"/g, 'className="mt-20 border-t border-[#262626] pt-12 text-center italic text-white/40"');
  content = content.replace(/className="text-2xl mb-4"/g, 'className="text-2xl mb-4 font-serif text-white/60"');
  content = content.replace(/className="font-bold text-black uppercase tracking-widest text-sm"/g, 'className="font-bold text-gold uppercase tracking-widest text-sm font-sans"');
  content = content.replace(/variant="primary" size="lg"/g, 'variant="gold" size="lg"');

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Done");
