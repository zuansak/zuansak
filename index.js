const puppeteer = require("puppeteer");
const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("http://wijaya-fun.42web.io/");


});

app.listen(process.env.PORT || 3000, () => {
  console.log("Star On Serv....");
});
