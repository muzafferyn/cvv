const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
const liveExp = fs.readFileSync('live_experience.html', 'utf8');

// The marker before experience section
const beforeExpMarker = `\n                </section>\n                <section class="max-w-5xl mx-auto px-4 py-20" id="experience">`;

// Find where experience starts
let expStartIndex = html.indexOf('<section class="max-w-5xl mx-auto px-4 py-20" id="experience">');
if (expStartIndex === -1) {
    console.log("Experience section not found");
    process.exit(1);
}

// Find where people say section starts
let peopleStartIndex = html.indexOf('<section class="max-w-7xl mx-auto px-4 py-20">\n                    <h2 class="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">İnsanlar Ne Diyor');
if (peopleStartIndex === -1) {
    // maybe line endings differ
    peopleStartIndex = html.indexOf('<section class="max-w-7xl mx-auto px-4 py-20">\r\n                    <h2 class="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">İnsanlar Ne Diyor');
}

if (peopleStartIndex === -1) {
    console.log("People say section not found");
    process.exit(1);
}

// Find end of people say section
let peopleEndIndex = html.indexOf('</section>', peopleStartIndex) + '</section>'.length;

// Find end of experience section (which is right before people say section)
// Actually, experience section ends with </section> just before peopleStartIndex
let expEndIndex = html.lastIndexOf('</section>', peopleStartIndex) + '</section>'.length;

// Extract people say block
let peopleBlock = html.substring(peopleStartIndex, peopleEndIndex);

// Reconstruct
let newHtml = html.substring(0, expStartIndex) + 
              peopleBlock + '\n' +
              liveExp + '\n' +
              html.substring(peopleEndIndex);

fs.writeFileSync('index.html', newHtml, 'utf8');
console.log('Successfully swapped sections and applied new experience layout!');
