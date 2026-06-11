const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

https.get('https://render.com', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const $ = cheerio.load(html);
    
    // Inject all S:X divs into B:X templates
    for (let i = 0; i <= 20; i++) {
      const template = $(`template#B\\:${i}`);
      const sdiv = $(`div#S\\:${i}`);
      if (template.length && sdiv.length) {
        template.replaceWith(sdiv.html());
        sdiv.remove();
      }
    }

    // Strip Next.js scripts to prevent hydration crashes
    $('script').each((i, el) => {
      $(el).remove();
    });

    // Remove overflow-hidden ONLY from body/html so it can scroll
    $('body').removeClass('overflow-hidden');
    $('html').removeClass('overflow-hidden');

    // Ensure dark mode is active by default
    $('html').addClass('dark');

    // Inject SW cache killer
    $('head').prepend(`<script>if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(r){for(let i=0;i<r.length;i++)r[i].unregister();});}</script>`);

    fs.writeFileSync('index.html', $.html());
    console.log('Assembled HTML perfectly!');
  });
}).on('error', (e) => {
  console.error(e);
});
