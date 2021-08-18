const puppeteer = require("puppeteer");

let labels = async () => {
  const browser = await puppeteer.launch(); //getBrowser();
  const page = await browser.newPage();
  await page.goto("https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/28285-pnad-educacao-2019-mais-da-metade-das-pessoas-de-25-anos-ou-mais-nao-completaram-o-ensino-medio");
  //await page.screenshot({path: 'screenshot.png'})
  const result = await page.evaluate(() => {
    const labels = [];
    const percents = [];
    const objects = [];
    
    const rows = document.querySelectorAll("div > table > tbody > tr");
    const data = Array.from(rows, row => {
         const columns = row.querySelectorAll('th')
         return Array.from(columns, column => column.textContent);
    });
    return data;
  });

  browser.close();
  return result;
};

// let percents = async () => {
//   const browser = await puppeteer.launch(); //getBrowser();
//   const page = await browser.newPage();
//   await page.goto("https://qedu.org.br/brasil/aprendizado");
//   //await page.screenshot({path: 'screenshot.png'})
//   const result = await page.evaluate(() => {
//     const books = [];
//     document
//       .querySelectorAll("span > span")
//       .forEach((book) => books.push(book.textContent));
//     return books;
//   });

//   browser.close();
//   return result;
// };

 labels().then((result) => {
   console.log(result);
});

// percents().then((v) => {
//   console.log(v);
// });
