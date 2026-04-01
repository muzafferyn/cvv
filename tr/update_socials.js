const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Update LinkedIn links to the one found on Caglar's live site
html = html.replace(/https:\/\/www\.linkedin\.com\/in\/m-yorgun-1a0a44293\//g, 'https://linkedin.com/in/caglarcakmak0');
html = html.replace(/https:\/\/linkedin\.com\/in\/muzafferyorgun/g, 'https://linkedin.com/in/caglarcakmak0');

// 2. Update Kariyer.net links (placeholder using similar ID)
html = html.replace(/https:\/\/www\.kariyer\.net\/ozgecmis\/my5tdaxgab/g, 'https://www.kariyer.net/ozgecmis/caglarcakmak0');

// 3. Remove GitHub and Twitter from the specific social icon list (Bio card)
// This block is identified by line ~1518
const socialBlockStart = '<div class="flex gap-4 pt-2">';
const githubBlock = /<a class="text-muted-foreground hover:text-foreground transition-colors" href="https:\/\/github\.com\/muzafferyorgun"[\s\S]*?<\/svg><\/a>/;
const twitterBlock = /<a class="text-muted-foreground hover:text-foreground transition-colors" href="https:\/\/twitter\.com\/muzafferyorgun"[\s\S]*?<\/svg><\/a>/;

html = html.replace(githubBlock, '');
html = html.replace(twitterBlock, '');

// 4. Add Kariyer.net Icon instead (matching LinkedIn style)
const kIcon = `<a class="text-muted-foreground hover:text-foreground transition-colors" href="https://www.kariyer.net/ozgecmis/caglarcakmak0" rel="noopener noreferrer" target="_blank" title="Kariyer.net"><svg class="w-5 h-5" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 3v18"></path><path d="M18 3l-10 9 10 9"></path><path d="M8 12h2"></path></svg></a>`;

// Re-inserting Kariyer.net after LinkedIn
html = html.replace('</svg></a>', '</svg></a>' + kIcon);

// 5. Cleanup footer links (if they exist as list items)
html = html.replace(/<li><a class="text-muted-foreground hover:text-foreground transition-colors" href="https:\/\/github\.com"[\s\S]*?<\/li>/, '');
html = html.replace(/<li><a class="text-muted-foreground hover:text-foreground transition-colors" href="https:\/\/twitter\.com"[\s\S]*?<\/li>/, '');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Socials updated successfully!');
