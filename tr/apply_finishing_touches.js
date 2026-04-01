const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Global replacement of the email
html = html.replace(/muzafferyorgun0@icloud\.com/gi, 'relaxofficialz@icloud.com');

// Global replacement of the image source link
html = html.replace(/kod\.jpeg/gi, 'kod.jpg');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated email and image extension!');
