describe('EventsTest', function() {

    it('I can view all events', iCanViewAllEvents)
    it('I can add an event', iCanAddAnEvent)

    function iCanViewAllEvents() {
        iGoToTheWebsite()
        iSeeAllEvents()
    }

    function iCanAddAnEvent() {
        iAddAnEvent()
        iSeeTheNewEvent()
    }

    // *** Helper Functions *** //

    function iGoToTheWebsite() {
        browser.get('index.html')
    }

    function iSeeAllEvents() {
        expect(element.all(by.css('event')).count()).toBeGreaterThan(0)
    }

    function iAddAnEvent() {
        element(by.id('addEventTextField')).sendKeys('The cake is a lie.')
        element(by.id('addEventSubmitButton')).click()
    }

    function iSeeTheNewEvent() {
        expect(element(by.css('event:last-of-type')).getText()).toEqual('The cake is a lie.')
    }
});