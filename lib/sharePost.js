import puppeteer from 'puppeteer';
export const sharePost = async() => {
    console.log("Logining IN ")
    const browser = await puppeteer.launch({headless:false},{defaultViewport: null});

    const page = await browser.newPage();
    await page.goto('https://nnuforum.com/login');

    await page.type('[name="username_x"]', 'whittingtondavid3@gmail.com')    
    await page.type('.col .col-100 [name="password"]', '12345678')
    await page.evaluate( () => {
        window.scrollBy(0, window.innerHeight);
    });
await page.waitForSelector('.btn-lg');
    await Promise.all([
      page.waitForNavigation(), // The promise resolves after navigation has finished
      page.click('.btn-lg') // Clicking the link will indirectly cause a navigation
    ]); 
    console.log("Logging SuccessFul")
    const getPage = async () => {
        console.info('******** Loading Home Page ******** \n\n');
         return( await Promise.all([
            page.waitForNavigation(), // The promise resolves after navigation has finished
            await page.evaluate(() => {
                document.querySelector("body > div > div.container > div.col.content-middle.col-75 > div > div > nav > div > ul:nth-child(1) > li:nth-child(5) > a").click();  
          }) 
        ]))       
      } 
      await getPage();
      await Promise.all([
        page.waitForNavigation(), // The promise resolves after navigation has finished
        await page.evaluate(() => {
            document.querySelector("body > div > div > div.col.content-middle.col-75 > div > div > div.account-content > div > ul > li:nth-child(1) > a").click();  
      }) 
    ])
    await Promise.all([
        page.waitForNavigation(), // The promise resolves after navigation has finished
        await page.evaluate(() => {
            document.querySelector(" body > div > div > div.col.content-middle.col-58 > div.content-dark.text-left > div > h2:nth-child(8) > a").click();  
      }) 
    ])
    
    await page.focus('input#input_1');
    await page.keyboard.type('username')
    await page.focus('input#input_2');
    await page.keyboard.type('password');
    // await page.type('#email', 'whittingtondavid3@gmail.com')    
    // await page.type('#pass', '12345678')
 
// await Promise.all([
        // page.waitForNavigation(), // The promise resolves after navigation has finished
        // await page.evaluate(() => {
            // document.querySelector(" body > div > div > div.col.content-middle.col-75 > div > div > div.account-content > div > ul > li:nth-child(1)").click();  
    //   }) 
    // ])
//then we are going to login here
    
// // then share post here 
// await Promise.all([
//     page.waitForNavigation(), // The promise resolves after navigation has finished
//     await page.evaluate(() => {
//         document.querySelector("#u_v_0 > div > ul > li._54ni._2al7.__MenuItem > a").click();  
//   }) 
// ])

// body > div > div > div.col.content-middle.col-58 > div.content-dark.text-left > div > h2:nth-child(8) > a
}
