const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");

// Remove all <script> tags and their contents
html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

fs.writeFileSync("index.html", html);
console.log("Removed all script tags from index.html");
