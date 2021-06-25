describe('Test', () => {
    it('test1', () => {
        browser.url('https://webdriver.io/docs/gettingstarted/')
        //browser.waitUntil($('[href="/docs/api"]'))
        const link = $('body')
        console.log(link.getText()) // outputs: "WebdriverIO"

        const api = ($('[href="/docs/api"]'))
        console.log(api)
        api.click()
        //$('[href="/docs/api"]').click
        expect(browser).toHaveTitleContaining('https://webdriver.io/docs/api')
        expect(true).toBe(true)
    } );
});
