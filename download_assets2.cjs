const fs = require('fs');
const https = require('https');
const path = require('path');

const html = fs.readFileSync('index.html', 'utf8');

const urlsToDownload = new Set();
// Broad regex for anything starting with /_next/, /cdn.sanity.io/, or /fonts/ in quotes
const broadRegex = /['"](\/_next\/[^'"]+|\/cdn\.sanity\.io\/[^'"]+|\/fonts\/[^'"]+)['"]/g;

let match;
while ((match = broadRegex.exec(html)) !== null) {
  let url = match[1].replace(/&amp;/g, '&');
  urlsToDownload.add(url);
}

// Ensure CSS is downloaded first so we can parse it
async function downloadAsset(url) {
  return new Promise((resolve) => {
    const isCdn = url.startsWith('/cdn.sanity.io');
    let fullUrl = isCdn ? `https:/${url}` : `https://render.com${url}`;
    
    if (url.startsWith('/_next/image')) {
       const urlParams = new URLSearchParams(url.split('?')[1]);
       const actualUrl = urlParams.get('url');
       if (actualUrl) {
          if (actualUrl.startsWith('http')) fullUrl = actualUrl;
          else fullUrl = `https://render.com${actualUrl}`;
       }
    }
  
    let localPath = path.join(__dirname, 'public', decodeURIComponent(url.split('?')[0]));
    fs.mkdirSync(path.dirname(localPath), { recursive: true });
  
    https.get(fullUrl, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(localPath);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          
          // If it's a CSS file, parse it for fonts
          if (localPath.endsWith('.css')) {
            const cssContent = fs.readFileSync(localPath, 'utf8');
            const cssRegex = /url\(['"]?(\/fonts\/[^'")]+)['"]?\)/g;
            let cssMatch;
            while ((cssMatch = cssRegex.exec(cssContent)) !== null) {
              urlsToDownload.add(cssMatch[1]);
            }
          }
          resolve();
        });
      } else {
         console.log('Failed to download', fullUrl, res.statusCode);
         resolve();
      }
    }).on('error', err => {
      console.error('Error downloading', fullUrl, err.message);
      resolve();
    });
  });
}

async function run() {
  console.log(`Found ${urlsToDownload.size} initial assets to download.`);
  for (const url of Array.from(urlsToDownload)) {
    await downloadAsset(url);
  }
  // Run again to catch fonts discovered in CSS
  for (const url of Array.from(urlsToDownload)) {
    const localPath = path.join(__dirname, 'public', decodeURIComponent(url.split('?')[0]));
    if (!fs.existsSync(localPath)) {
      console.log('Downloading discovered asset:', url);
      await downloadAsset(url);
    }
  }
  console.log('All assets downloaded successfully!');
}

run();
