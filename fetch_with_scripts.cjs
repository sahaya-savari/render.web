const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

https.get('https://render.com', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    // Just inject dark mode and kill service worker
    // DO NOT ASSEMBLE CHUNKS, DO NOT REMOVE SCRIPTS
    let newHtml = html.replace('<html lang="en" class="', '<html lang="en" class="dark ');
    newHtml = newHtml.replace('<head>', '<head><script>if("serviceWorker" in navigator){navigator.serviceWorker.getRegistrations().then(function(r){for(let i=0;i<r.length;i++)r[i].unregister();});}</script>');
    
    fs.writeFileSync('index.html', newHtml);
    console.log('Saved raw HTML with scripts intact for Next.js hydration!');
  });
}).on('error', (e) => {
  console.error(e);
});
