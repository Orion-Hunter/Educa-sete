const { Router } = require("express");
const puppeteer = require("puppeteer");

const aprendizadoRouter = new Router();

aprendizadoRouter.get("/", async (req, res) => {
  const browser = await puppeteer.launch(); //getBrowser();
  const page = await browser.newPage();
  await page.goto("https://qedu.org.br/brasil/aprendizado");

  const result = await page.evaluate(() => {
    const labels = [];
    const percents = [];
    const objects = [];
    document
      .querySelectorAll("#state-100 > div > h3")
      .forEach((label) => labels.push(label.textContent));

    document
      .querySelectorAll("span > span")
      .forEach((percent) => percents.push(percent.textContent));

    for (var i = 0; i < percents.length; i++) {
      objects.push({ Indicador: labels[i], valor: percents[i] });
    }

    return objects;
  });

  browser.close();
  return res.json(result);
});

module.exports = aprendizadoRouter;
