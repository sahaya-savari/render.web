const fs = require("fs");
const https = require("https");
const path = require("path");

const html = fs.readFileSync("index.html", "utf8");

const urlsToDownload = new Set();
const regexes = [
  /href="(\/_next\/static\/css\/[^"]+)"/g,
  /src="(\/cdn\.sanity\.io\/[^"]+)"/g,
  /href="(\/cdn\.sanity\.io\/[^"]+)"/g,
  /src="(\/_next\/image[^"]+)"/g,
  /url\((['"]?)(\/fonts\/[^'"]+)\1\)/g,
  /href="(\/fonts\/[^"]+)"/g,
];

for (const regex of regexes) {
  let match;
  while ((match = regex.exec(html)) !== null) {
    let url = match[1];
    // Decode HTML entities
    url = url.replace(/&amp;/g, "&");
    urlsToDownload.add(url);
  }
}

console.log(`Found ${urlsToDownload.size} unique assets to download.`);

function downloadAsset(url) {
  const isCdn = url.startsWith("/cdn.sanity.io");
  let fullUrl = isCdn ? `https:/${url}` : `https://render.com${url}`;

  // Handle Next.js image optimizer paths by getting the real URL
  if (url.startsWith("/_next/image")) {
    const urlParams = new URLSearchParams(url.split("?")[1]);
    const actualUrl = urlParams.get("url");
    if (actualUrl) {
      if (actualUrl.startsWith("http")) fullUrl = actualUrl;
      else fullUrl = `https://render.com${actualUrl}`;
    }
  }

  // Define local path
  let localPath = path.join(__dirname, "public", decodeURIComponent(url.split("?")[0]));

  fs.mkdirSync(path.dirname(localPath), { recursive: true });

  https
    .get(fullUrl, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(localPath);
        res.pipe(file);
        file.on("finish", () => {
          file.close();
        });
      } else {
        console.log("Failed to download", fullUrl, res.statusCode);
      }
    })
    .on("error", (err) => {
      console.error("Error downloading", fullUrl, err.message);
    });
}

for (const url of urlsToDownload) {
  downloadAsset(url);
}
