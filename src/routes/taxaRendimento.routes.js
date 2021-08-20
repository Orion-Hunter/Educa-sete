const { Router } = require("express");
const puppeteer = require("puppeteer");

const taxaRendimentoRouter = new Router();

taxaRendimentoRouter.get("/", async (req, res) => {
  const browser = await puppeteer.launch(); //getBrowser();
  const page = await browser.newPage();
  await page.goto("https://qedu.org.br/brasil/taxas-rendimento");

  const result = await page.evaluate(() => {
    const labels = [];
    const percents = [];
    const objects = [];

    document.querySelectorAll(".container .table")
      .forEach(item => {
        const data = item.innerText;
        const row = data.split("\n");

        const headerTable = row[0].split("\t");
        // objectList.headerTable = headerTable;

        const objectList = {
          headerTable: headerTable,
          dataTable: [
            {
              stepSchool: row[1].replace("\t", ""),
              items: [
                {
                  percent: row[2].replace(" ", ""),
                  text: row[3].replace("\t", ""),
                },
                {
                  percent: row[4].replace(" ", ""),
                  text: row[5].replace("\t", ""),
                },
                {
                  percent: row[6].replace(" ", ""),
                  text: row[7].replace("\t", ""),
                }
              ]
            },
            {
              stepSchool: row[8].replace("\t", ""),
              items: [
                {
                  percent: row[9].replace(" ", ""),
                  text: row[10].replace("\t", ""),
                },
                {
                  percent: row[11].replace(" ", ""),
                  text: row[12].replace("\t", ""),
                },
                {
                  percent: row[13].replace(" ", ""),
                  text: row[14].replace("\t", ""),
                }
              ]
            },
            {
              stepSchool: row[15].replace("\t", ""),
              items: [
                {
                  percent: row[16].replace(" ", ""),
                  text: row[17].replace("\t", ""),
                },
                {
                  percent: row[18].replace(" ", ""),
                  text: row[19].replace("\t", ""),
                },
                {
                  percent: row[20].replace(" ", ""),
                  text: row[21].replace("\t", ""),
                }
              ]
            }
          ]
        }

        objects.push(objectList)
      });
    return objects;
  });

  browser.close();
  return res.json(result);
});

module.exports = taxaRendimentoRouter;
