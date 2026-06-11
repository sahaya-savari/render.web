const https = require("https");
const fs = require("fs");

const files = [
  "/images/homepage/hero-wide-dark.json",
  "/images/homepage/hero-wide-light.json",
  "/images/homepage/hero-tall-dark.json",
  "/images/homepage/hero-tall-light.json",
];

for (const file of files) {
  const url = `https://render.com${file}`;
  const localPath = `public${file}`;

  https
    .get(url, (res) => {
      if (res.statusCode === 200) {
        const w = fs.createWriteStream(localPath);
        res.pipe(w);
        w.on("finish", () => console.log("Downloaded", file));
      } else {
        console.error("Failed to download", file, res.statusCode);
      }
    })
    .on("error", console.error);
}
