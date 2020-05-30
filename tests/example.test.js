const puppeteer = require('puppeteer')

describe('My first puppeteer test', () => {
    it('should launch the browser', async function() {
        const browser = await puppeteer.launch({ 
            headless: false, 
            slowMo: 100, 
            devtools: false })
        const page = await browser.newPage()
        await page.goto('http://devexpress.github.io/testcafe/example/')
        await page.type('#developer-name', 'Mike', { delay: 200})
        await page.waitFor(5000)
        await browser.close()
    })
})