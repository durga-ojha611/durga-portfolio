const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'components');

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the hex color
  content = content.replace(/#ff2a2a/g, '#700215');
  content = content.replace(/#FF2A2A/g, '#700215');
  
  // Replace Tailwind red-500/600/400 with the new hex (using brackets for JIT)
  // We'll replace the specific classes to avoid breaking things, but since Tailwind allows arbitrary values:
  content = content.replace(/text-red-500/g, 'text-[#700215]');
  content = content.replace(/text-red-600/g, 'text-[#700215]');
  content = content.replace(/text-red-400/g, 'text-[#700215]');
  
  content = content.replace(/bg-red-500/g, 'bg-[#700215]');
  content = content.replace(/bg-red-600/g, 'bg-[#700215]');
  
  content = content.replace(/border-red-500/g, 'border-[#700215]');
  content = content.replace(/border-red-400/g, 'border-[#700215]');
  
  content = content.replace(/from-red-500/g, 'from-[#700215]');
  content = content.replace(/via-red-500/g, 'via-[#700215]');
  content = content.replace(/to-red-500/g, 'to-[#700215]');
  content = content.replace(/via-red-400/g, 'via-[#700215]');
  
  // Replace rgba variants if any (like rgba(255,42,42,0.4))
  // 255,42,42 corresponds to #ff2a2a.
  // #700215 is rgb(112, 2, 21).
  content = content.replace(/255,42,42/g, '112,2,21');
  
  fs.writeFileSync(filePath, content, 'utf8');
};

const walkSync = (dir, callback) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath, callback);
    } else if (stats.isFile() && (filepath.endsWith('.jsx') || filepath.endsWith('.js'))) {
      callback(filepath);
    }
  });
};

walkSync(directoryPath, replaceInFile);

// Also replace in App.jsx and index.html if needed, but components cover most
replaceInFile(path.join(__dirname, 'src', 'App.jsx'));

console.log("Colors replaced successfully!");
