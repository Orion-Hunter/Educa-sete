const { Router } = require("express");
const puppeteer = require("puppeteer");

const alunosTerceiroRoute = new Router();

alunosTerceiroRoute.get("/", async (req, res) => {
  const browser = await puppeteer.launch(); //getBrowser();
  const page = await browser.newPage();
  await page.goto(
    "https://novo.qedu.org.br/questionarios-saeb/alunos-3em/7-brasil"
  );
 
  const result = await page.evaluate(() => {
     const questions = [];
     const totals = [];
     const objects = {};

    document.querySelectorAll("#tema30 > div >  h3").forEach((text) => {
      questions.push(text.textContent);
    });

    document.querySelectorAll("#tema30 > div > span").forEach((text) => {
      totals.push(text.textContent.split(" ")[3]);
    });
    
  
    objects['1'] = [];
    objects['2'] = [];
    objects['3'] = [];
    objects['4'] = [];
    objects['5'] = [];
    objects['6'] = [];
    objects['7'] = [];
    objects['8'] = [];
    objects['9'] = [];
    objects['10'] = [];
    objects['11'] = [];
    objects['12'] = [];
     
    document.querySelectorAll("#TX_RESP_Q001 > div > div").forEach((text) => {
        objects['1'].push(text.textContent)
    })

    document.querySelectorAll("#TX_RESP_Q002 > div > div").forEach((text) => {
      objects['2'].push(text.textContent)
    })
    
    document.querySelectorAll("#TX_RESP_Q003 > div > div").forEach((text) => {
      objects['3'].push(text.textContent)
    })
    
    document.querySelectorAll("#TX_RESP_Q004 > div > div").forEach((text) => {
      objects['4'].push(text.textContent)
    })
     
    document.querySelectorAll("#TX_RESP_Q005 > div > div").forEach((text) => {
      objects['5'].push(text.textContent)
    })

    document.querySelectorAll("#TX_RESP_Q006 > div > div").forEach((text) => {
      objects['6'].push(text.textContent)
    })

    document.querySelectorAll("#TX_RESP_Q007 > div > div").forEach((text) => {
      objects['7'].push(text.textContent)
    })

    document.querySelectorAll("#TX_RESP_Q008 > div > div").forEach((text) => {
      objects['8'].push(text.textContent)
    })

    document.querySelectorAll("#TX_RESP_Q009 > div > div").forEach((text) => {
      objects['9'].push(text.textContent)
    })

    document.querySelectorAll("#TX_RESP_Q0010 > div > div").forEach((text) => {
      objects['10'].push(text.textContent)
    })

    document.querySelectorAll("#TX_RESP_Q0011 > div > div").forEach((text) => {
      objects['11'].push(text.textContent)
    })

    document.querySelectorAll("#TX_RESP_Q0012 > div > div").forEach((text) => {
      objects['12'].push(text.textContent)
    })


    objects['1'] = objects['1'].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","))
      v  = v.replace(",,,,,,,,,,,,,,,,,,,,,,,,,", ' ').replace(".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"," ")
      return v
    })
    
    objects['2'] = objects['2'].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","))
      v  = v.replace(",,,,,,,,,,,,,,,,,,,,,,,,,", ' ').replace(".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"," ")
      return v
    })

    objects['3'] = objects['3'].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","))
      v  = v.replace(",,,,,,,,,,,,,,,,,,,,,,,,,", ' ').replace(".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"," ")
      return v
    })

    objects['4'] = objects['4'].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","))
      v  = v.replace(",,,,,,,,,,,,,,,,,,,,,,,,,", ' ').replace(".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"," ")
      return v
    })

    objects['5'] = objects['5'].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","))
      v  = v.replace(",,,,,,,,,,,,,,,,,,,,,,,,,", ' ').replace(".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"," ")
      return v
    })
    
    objects['6'] = objects['6'].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","))
      v  = v.replace(",,,,,,,,,,,,,,,,,,,,,,,,,", ' ').replace(".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"," ")
      return v
    })
    
    objects['7'] = objects['7'].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","))
      v  = v.replace(",,,,,,,,,,,,,,,,,,,,,,,,,", ' ').replace(".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"," ")
      return v
    })

    objects['8'] = objects['8'].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","))
      v  = v.replace(",,,,,,,,,,,,,,,,,,,,,,,,,", ' ').replace(".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"," ")
      return v
    })

    objects['9'] = objects['9'].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","))
      v  = v.replace(",,,,,,,,,,,,,,,,,,,,,,,,,", ' ').replace(".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"," ")
      return v
    })

    objects['10'] = objects['10'].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","))
      v  = v.replace(",,,,,,,,,,,,,,,,,,,,,,,,,", ' ').replace(".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"," ")
      return v
    })

    objects['11'] = objects['11'].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","))
      v  = v.replace(",,,,,,,,,,,,,,,,,,,,,,,,,", ' ').replace(".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"," ")
      return v
    })

    objects['12'] = objects['12'].map((text) => {
      let v = String(String(String(text.split("\n")).split(" ")).split(","))
      v  = v.replace(",,,,,,,,,,,,,,,,,,,,,,,,,", ' ').replace(".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"," ")
      return v
    })
      return { questions: questions, answers: totals, objects: objects };
    });
  browser.close();
  
  return res.json(result);
});

module.exports = alunosTerceiroRoute;
