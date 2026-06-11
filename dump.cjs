const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport to mobile to see if it makes a difference, actually desktop is better
  await page.setViewport({ width: 1440, height: 900 });

  console.log("Navigating to render.com...");
  await page.goto("https://render.com", { waitUntil: "networkidle0", timeout: 60000 });

  // Wait an extra 2 seconds to ensure all React animations finish
  await new Promise((r) => setTimeout(r, 2000));

  console.log("Extracting HTML...");
  // Get the fully hydrated DOM
  let html = await page.evaluate(() => document.documentElement.outerHTML);

  // Add DOCTYPE
  html = "<!DOCTYPE html>\n<html" + html.substring(5);

  console.log("Cleaning up HTML...");
  // Strip ALL scripts
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");

  // Strip overflow-hidden
  html = html.replace(/overflow-hidden/g, "");
  html = html.replace(/overflow: hidden/g, "");

  // Make relative URLs absolute so we don't rely on local files
  // (Wait, actually local files are fine. We will just leave them as is.)

  fs.writeFileSync("public/index.html", html);
  console.log("Saved to public/index.html! Length:", html.length);

  await browser.close();
})();
