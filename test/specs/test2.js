describe('Test', () => {
    it('test1', () => {
        browser.url('https://learn.javascript.ru/')
        browser.pause(1000)

        const paragraph  = $('//li/div/a')
        console.log(paragraph.getText())
        elem.click()

        //browser.waitUntil($('#breadcrumb-2').isClickable)
        //browser.waitUntil($('#breadcrumb-2').isClickable)
        //$('#breadcrumb-2').click
        //expect(browser).toHaveUrlContaining('123')

    } );
});
