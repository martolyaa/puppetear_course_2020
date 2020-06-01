const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('Feedback Test', () => {
    let browser
    let package
    
    before(async function() {
        browser = await puppeteer.launch({
            headless: true, 
            slowMo: 0, 
            devtools: false
        })
        page = await browser.newPage()
        await page.setDefaultTimeout(20000)
        await page.setDefaultNavigationTimeout(30000)
    })

    after(async function () {
        await browser.close()
    })


    it('Display Feedback Form', async function() {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.waitForSelector('#feedback')
        await page.click('#feedback')
    })

    it('Submit Feedback Form', async function() {
        await page.waitForSelector('form')
        await page.type('#name', 'Name')
        await page.type('#email', 'test@email.com')
        await page.type('#subject', 'Subject')
        await page.type('#comment', 'Just a message to the textarea')
        await page.click('input[type="submit"]')
    })

    it('Display Results Page', async function() {
        await page.waitForSelector('#feedback-title')
        const url = await page.url()
        expect(url).to.include('/sendFeedback.html')
    })
})

