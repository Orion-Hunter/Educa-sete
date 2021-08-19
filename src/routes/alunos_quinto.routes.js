const { Router } = require("express");
const puppeteer = require("puppeteer");

const alunosquintoRoute = new Router();

alunosquintoRoute.get("/", async (req, res) => {
  const browser = await puppeteer.launch(); //getBrowser();
  const page = await browser.newPage();
  await page.goto(
    "https://novo.qedu.org.br/questionarios-saeb/alunos-5ano/7-brasil"
  );

  const result = await page.evaluate(() => {
    const questions = [];
    const totals = [];
    const objects = {};

    document.querySelectorAll("#tema26 > div >  h3").forEach((text) => {
      questions.push(text.textContent);
    });

    document.querySelectorAll("#tema26 > div > span").forEach((text) => {
      totals.push(text.textContent.split(" ")[3]);
    });

    objects["1"] = [];
    objects["2"] = [];
    objects["3"] = [];
    objects["4"] = [];
    objects["5"] = [];
    objects["6"] = [];
    objects["7"] = [];
    objects["8"] = [];
    objects["9"] = [];
    objects["10"] = [];
    objects["11"] = [];
    objects["12"] = [];
    objects["13"] = [];
    objects["14"] = [];
    objects["15"] = [];
    objects["16"] = [];
    objects["17"] = [];
    objects["18"] = [];

    document.querySelectorAll("#TX_RESP_Q001 > div > div").forEach((text) => {
      objects["1"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q002 > div > div").forEach((text) => {
      objects["2"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q003 > div > div").forEach((text) => {
      objects["3"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q004 > div > div").forEach((text) => {
      objects["4"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q005 > div > div").forEach((text) => {
      objects["5"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q006 > div > div").forEach((text) => {
      objects["6"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q007 > div > div").forEach((text) => {
      objects["7"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q008 > div > div").forEach((text) => {
      objects["8"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q009 > div > div").forEach((text) => {
      objects["9"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q0010 > div > div").forEach((text) => {
      objects["10"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q0011 > div > div").forEach((text) => {
      objects["11"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q0012 > div > div").forEach((text) => {
      objects["12"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q0013 > div > div").forEach((text) => {
      objects["13"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q0014 > div > div").forEach((text) => {
      objects["14"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q0015 > div > div").forEach((text) => {
      objects["15"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q0016 > div > div").forEach((text) => {
      objects["16"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q0017 > div > div").forEach((text) => {
      objects["17"].push(text.textContent);
    });

    document.querySelectorAll("#TX_RESP_Q0018 > div > div").forEach((text) => {
      objects["18"].push(text.textContent);
    });

    objects["1"] = objects["1"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["2"] = objects["2"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["3"] = objects["3"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["4"] = objects["4"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["5"] = objects["5"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["6"] = objects["6"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["7"] = objects["7"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["8"] = objects["8"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["9"] = objects["9"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["10"] = objects["10"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["11"] = objects["11"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["12"] = objects["12"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["13"] = objects["13"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["14"] = objects["14"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["15"] = objects["15"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["16"] = objects["16"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["17"] = objects["17"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    objects["18"] = objects["18"].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","));
      v = v
        .replace(",,,,,,,,,,,,,,,,,,,,,,,,,", " ")
        .replace(
          ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",
          " "
        );
      return v;
    });

    const response = {};

    for (var i = 0; i < questions.length; i++) {
      if (objects[i + 1].length > 0) {
        const resp = [];
        for (var x = 0; x < objects[i + 1].length; x++) {
          resp.push({
            values: objects[i + 1][x],
            labels: objects[i + 1][x + 1].replace(",", " "),
          });
          x += 1;
        }

        response[i] = {
          Indicador: questions[i],
          Respostas: totals[i],
          Resultados: resp,
        };
      }
    }

    return response; //{ questions: questions, answers: totals, objects: objects };
  });
  browser.close();

  return res.json(result);
});

module.exports = alunosquintoRoute;
