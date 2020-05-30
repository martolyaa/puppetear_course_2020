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
        await page.waitFor(2000)
        await page.click('#tried-test-cafe', { clickCount: 1})
        await page.select('#preferred-interface', 'Javascript API')
        const message = 'Lets fill that message with some text'
        await page.type('#comments', message)
        await page.click('#submit-button')
        await page.waitForSelector('.result-content')
        await page.waitFor(1000)
        await browser.close()
    })
})