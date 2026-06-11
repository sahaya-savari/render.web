const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('raw_render.html', 'utf8');
const $ = cheerio.load(html);

// Inject all S:X divs into B:X templates
for (let i = 0; i <= 20; i++) {
  const template = $(`template#B\\:${i}`);
  const sdiv = $(`div#S\\:${i}`);
  
  if (template.length && sdiv.length) {
    // Replace the template with the inner HTML of the sdiv
    template.replaceWith(sdiv.html());
    // Remove the sdiv from the DOM
    sdiv.remove();
  }
}

// Strip Next.js scripts to prevent hydration crashes
$('script').each((i, el) => {
  $(el).remove();
});

// Remove overflow-hidden from body/html so it can scroll
$('body').removeClass('overflow-hidden');
$('html').removeClass('overflow-hidden');

// Ensure dark mode is active by default
$('html').addClass('dark');

// Inject SW cache killer
$('head').prepend(`<script>if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(r){for(let i=0;i<r.length;i++)r[i].unregister();});}</script>`);

fs.writeFileSync('index.html', $.html());
console.log('Assembled HTML perfectly!');
