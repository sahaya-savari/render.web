const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");
html = html.replace('<html lang="en" class="', '<html lang="en" class="dark ');
fs.writeFileSync("index.html", html);
console.log("Added dark class to html");
