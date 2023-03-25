const puppeteer = require("puppeteer");


async function fetchData(){

    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://www.github.com/trending");

    await page.waitForSelector(".Box-row");
    
    const quotes = await page.evaluate(()=>{

        const Box = document.querySelectorAll(".Box-row");
    return Array.from(Box).map((Box)=>{
         const title = Box.querySelector("h1").innerText;
         const description= "manishjaunjalkar";
        
        const URL = Box.querySelector('h1 > a').href;
         const sfl = Box.querySelector(".f6");
          const stars = sfl.querySelector("a").innerText;
          const forks = sfl.querySelector("a + a").innerText;
          const language = sfl.querySelector("span").innerText;
    
        return  {title,description, URL,  stars, forks, language };
    });

});
    console.log(quotes);
    await browser.close();
    myjson = JSON.stringify(quotes);

}

fetchData();


