import puppeteer from 'puppeteer';

export const login = async(username, password) => {
    console.clear()
    console.log("Logining IN ")
    // const browser = await puppeteer.launch({headless:false},{defaultViewport: null});
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: false,
        slowMo: 100
      });
      
      
    const page = await browser.newPage();
      const headers = ['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36', 'Opera/9.80 (Macintosh; Intel Mac OS X 10.14.1) Presto/2.12.388 Version/12.16', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14931', 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:63.0) Gecko/20100101 Firefox/63.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:10.0) Gecko/20100101 Firefox/62.0', 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.13; ko; rv:1.9.1b2) Gecko/20081201 Firefox/60.0', 'Chrome (AppleWebKit/537.1; Chrome50.0; Windows NT 6.3) AppleWebKit/537.36 (KHTML like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko']
      let x =Math.round(Math.random() * (10 - 0) )
    
    await page.setUserAgent(headers[x])

    await page.goto('https://nnuforum.com/login');
    console.clear()
    console.log('Typing ')
    await page.type(`.col .col-100 [name="username_x"]`, username)    
    await page.type('.col .col-100 [name="password"]', password)
    await page.evaluate( () => {
        window.scrollBy(0, window.innerHeight);
    }); 
    console.clear()
    console.log('Submitting')
    await page.waitForSelector('.btn-lg');
    await Promise.all([
      page.waitForNavigation(), // The promise resolves after navigation has finished
      page.click('.col .col-100 .btn-lg') // Clicking the link will indirectly cause a navigation
    ]); 
    console.clear()
    console.log("Logging SuccessFul")
    const getPage = async () => {
        console.clear()
        console.info('******** Loading Home Page ******** \n\n');
         return( await Promise.all([
            page.waitForNavigation(), // The promise resolves after navigation has finished
            await page.evaluate(() => {
              document.querySelector('body > div > div > div.col.content-middle.col-75 > div > div > div.content-dark > h3 > a:nth-child(4)').click();  
          }) 
        ]))       
      } 
      const openLink = async (link) => {
        console.clear()  
        console.info(`*******opening********* ${link}`)
        const page = await browser.newPage();
        
        try {
            await page.goto(link);
              
            
        } catch (error) {
         console.error("opening Link failed",error) 
        }
        await page.bringToFront()
        await page.evaluate( () => {
            window.scrollTo(0, 500)
        }); 
        await page.waitFor(4000)
        await page.evaluate( () => {
            window.scrollTo(0, 500)
        });
        await page.waitFor(2000)
        await page.close()
      }    
      const getLink = async () => {
        console.info("Loaded Succefully")
        console.info('******** Extracting Post Links ********\n\n');
            const link = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('ul.related-posts a '))
                  .map(data => data.href);
              });    
              let i = 0;
              for (let i of link) {
                console.log(`opening Link: ${i}`)
                await openLink(i)

                if (i === link[link.length -1]){
                   await openLink(i)
                }
              }
        //  await page.close()
    }    
      await getPage()
      await getLink()
      console.info("thank you for all of this ... i am full working and now i am closing the browser")
    await browser.close()
}
  