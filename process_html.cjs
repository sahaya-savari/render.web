const fs = require("fs");

let html = fs.readFileSync("index.html", "utf8");

// 1. Safe non-greedy regex to remove all <script> tags
html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");

// 2. Remove overflow-hidden
html = html.replace(/overflow-hidden/g, "");

// 3. Inject SW unregister script at the very top of <head>
const unregisterScript = `<script>if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(r){for(let i=0;i<r.length;i++)r[i].unregister();});}</script>`;
html = html.replace("<head>", "<head>" + unregisterScript);

fs.writeFileSync("index.html", html);
console.log("Processed index.html successfully. Length: " + html.length);
