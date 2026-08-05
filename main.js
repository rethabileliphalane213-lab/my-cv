const puppeteer = require("puppeteer");
const path = require("path");

async function generate() {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox"
    ]
  });

  const page = await browser.newPage();

  const filePath = "file://" + path.join(__dirname, "index.html");

  await page.goto(filePath, {
    waitUntil: "networkidle0"
  });

  await page.pdf({
    path: "Rethabile_Liphalane_CV.pdf",
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true
  });

  await browser.close();

  console.log("✅ PDF created successfully!");
}

generate().catch(console.error);