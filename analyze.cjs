const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const templates = html.match(/<template[^>]*>/g);
const sdivs = html.match(/<div hidden="" id="S:[^>]*>/g);
console.log('Templates:', templates ? templates.length : 0);
console.log('S-divs:', sdivs ? sdivs.length : 0);

// We need to inject the content of <div hidden="" id="S:X"> into <template id="B:X"> or similar parent?
// Actually, in Next.js App Router, the fallback <template id="B:X"> is replaced.
// Or <div hidden="" id="S:X"> replaces `<template id="P:X">`.

// Let's print out the exact template tags
console.log('Template tags:', templates);
