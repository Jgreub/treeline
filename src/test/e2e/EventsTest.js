var TestEndpointsHelper = require('./support/Helpers.js')

describe('EventsTest', function() {

    beforeAll(function(done) {
        TestEndpointsHelper.resetTestDB(done)
    })

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
        expect(element.all(by.css('event')).count()).toEqual(3)
    }

    function iAddAnEvent() {
        element(by.id('addEventTextField')).sendKeys('The cake is a lie.')
        element(by.id('addEventSubmitButton')).click()
    }

    function iSeeTheNewEvent() {
        expect(element.all(by.css('event')).count()).toEqual(4)
        expect(element(by.css('event:nth-child(4)')).getText()).toEqual('The cake is a lie.')
    }
});