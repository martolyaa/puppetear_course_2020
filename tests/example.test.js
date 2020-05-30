const puppeteer = require('puppeteer')

describe('My first puppeteer test', () => {
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({ 
            headless: false, 
            slowMo: 100, 
            devtools: false })
        const page = await browser.newPage()
        await page.goto('http://example.com/')
        const title = await page.title()
        const url = await page.url()
        
        const.log('TITLE: ' + title)
        const.log('URL: ' + url)
        await browser.close()
    })
})