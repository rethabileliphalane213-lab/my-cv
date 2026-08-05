const puppeteer = require("puppeteer");

async function generate(){

const browser = await puppeteer.launch();

const page = await browser.newPage();


await page.goto(
"http://localhost:5500/index.html",
{
waitUntil:"networkidle0"
}
);


await page.pdf({
path:"Rethabile_Liphalane_CV.pdf",
format:"A4",
printBackground:true
});


await browser.close();

}


generate();