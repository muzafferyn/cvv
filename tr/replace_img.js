const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('href="spor.jpeg"', 'href="yuruyus.jpg"');
html = html.replace('src="spor.jpeg"', 'src="yuruyus.jpg"');
html = html.replace('alt="Sports"', 'alt="Yürüyüş"');
html = html.replace("label: 'Spor'", "label: 'Yürüyüş'");

fs.writeFileSync('index.html', html, 'utf8');
console.log('Images and labels updated!');
