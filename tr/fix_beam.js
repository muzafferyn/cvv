const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix the Javascript animation
const oldJs1 = 'highlight.style.top = (progress * 100) + \'%\';';
const newJs1 = 'const progressPixels = progress * containerHeight; highlight.style.top = (progressPixels - highlightHeight) + \'px\';';

const oldJs2 = 'highlight.style.transform = `translateY(-50%)`;';
// Some editors turn `` into "" or '', so we'll just regex
html = html.replace(oldJs1, newJs1);
html = html.replace(/highlight\.style\.transform = .*?;/, "highlight.style.transform = 'none';");

// 2. Fix the title styling to look EXACTLY like the screenshot (serif font, larger base text)
// The extracted HTML used text-lg md:text-4xl text-black dark:text-white max-w-4xl
const oldTitleRegex = /<h2 class="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">Deneyimlerim<\/h2>/;
const newTitle = '<h2 class="text-3xl md:text-6xl font-serif font-medium tracking-tight mb-4 text-foreground max-w-4xl">Deneyimlerim</h2>';
html = html.replace(oldTitleRegex, newTitle);

const oldSubTitleRegex = /<p class="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">Yıllar içerisindeki deneyimlerim<\/p>/;
const newSubTitle = '<p class="text-muted-foreground text-base md:text-xl max-w-sm font-medium">Yıllar içerisindeki deneyimlerim</p>';
html = html.replace(oldSubTitleRegex, newSubTitle);

// Make sure the beam default style is correctly restored and does not have height:0px/opacity:0
html = html.replace('style="height:0px;opacity:0"', 'style="height:485px;opacity:1"');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed JS and Title successfully!');
