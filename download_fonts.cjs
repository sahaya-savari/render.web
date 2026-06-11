const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  "/_next/static/media/36de5d5a6fde5419-s.p.woff2",
  "/_next/static/media/44bcf5dc211ed559-s.p.woff2",
  "/_next/static/media/55dd12438d118bd8-s.p.woff2",
  "/_next/static/media/614210d7392d1f42-s.p.woff2",
  "/_next/static/media/772d87814c6d4363-s.p.woff2",
  "/_next/static/media/a02a323226559df3-s.p.woff2",
  "/_next/static/media/b134c96c03a76fa5-s.p.woff2",
  "/_next/static/media/c7e359b9e8a1a81c-s.p.woff2",
  "/_next/static/media/dc03e58dafb0f94e-s.p.woff2",
  "/_next/static/media/e8e1f899a4774ee8-s.p.woff2",
  "/_next/static/media/eb0b6447daad5399-s.p.woff2"
];

const mediaDir = path.join(__dirname, 'public', '_next', 'static', 'media');
fs.mkdirSync(mediaDir, { recursive: true });

urls.forEach(urlPath => {
  const filename = path.basename(urlPath);
  const dest = path.join(mediaDir, filename);
  const file = fs.createWriteStream(dest);
  const fullUrl = `https://render.com${urlPath}`;
  
  https.get(fullUrl, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close();
      console.log('Downloaded ' + filename);
    });
  }).on('error', function(err) {
    fs.unlink(dest, () => {});
    console.error('Error downloading ' + filename + ': ' + err.message);
  });
});
