const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix the "Başla" button mistake from previous run
// Find the broken section: </svg></a><a class="text-muted-foreground...
const brokenPart = /<\/svg><\/a><a class="text-muted-foreground hover:text-foreground transition-colors" href="https:\/\/www\.kariyer\.net\/ozgecmis\/caglarcakmak0"[\s\S]*?<\/svg><\/a>/;
html = html.replace(brokenPart, '</svg></a>');

// 2. Target the BIO card socials section specifically and fix it
// This section starts around line 1506
const bioSocialsSectionStart = '<div class="flex gap-4 pt-2">';
// Find the next </div> after this start
const bioStartIdx = html.indexOf(bioSocialsSectionStart);
if (bioStartIdx !== -1) {
    const bioEndIdx = html.indexOf('</div>', bioStartIdx + bioSocialsSectionStart.length) + 6;
    const oldBioSocials = html.substring(bioStartIdx, bioEndIdx);
    
    // New clean socials for the bio card
    const newBioSocials = `<div class="flex gap-4 pt-2">
                            <a class="text-muted-foreground hover:text-foreground transition-colors" href="https://linkedin.com/in/caglarcakmak0" rel="noopener noreferrer" target="_blank" title="LinkedIn"><svg aria-hidden="true" class="lucide lucide-linkedin w-5 h-5" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                            <a class="text-muted-foreground hover:text-foreground transition-colors" href="https://www.kariyer.net/ozgecmis/caglarcakmak0" rel="noopener noreferrer" target="_blank" title="Kariyer.net"><svg class="w-5 h-5" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 3v18"></path><path d="M18 3l-10 9 10 9"></path><path d="M8 12h2"></path></svg></a>
                        </div>`;
    
    html = html.substring(0, bioStartIdx) + newBioSocials + html.substring(bioEndIdx);
}

// 3. Update the header pill (line 383 logic)
// Update any remaining Muzaffer IDs to Caglar IDs
html = html.replace(/my5tdaxgab/g, 'caglarcakmak0');
html = html.replace(/m-yorgun-1a0a44293/g, 'caglarcakmak0');

// Cleanup any remaining github/twitter list items in footer (line 1459 area)
html = html.replace(/<li><a class="text-muted-foreground hover:text-foreground transition-colors" href="https:\/\/github\.com"[\s\S]*?<\/li>/, '');
html = html.replace(/<li><a class="text-muted-foreground hover:text-foreground transition-colors" href="https:\/\/twitter\.com"[\s\S]*?<\/li>/, '');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Bio socials and header links fixed perfectly!');
