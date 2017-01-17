var TestEndpointsHelper = require('./support/TestEndpointsHelpers.js')
var EventsPage = require('./pages/EventsPage.js')

describe('EventsTest', function() {

    beforeAll(function(done) {
        TestEndpointsHelper.resetTestDB(done)
    })

    it('I can view all events', iCanViewAllEvents)
    it('I can add an event', iCanAddAnEvent)

    // *** Steps *** //

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
        browser.get('/')
        console.log('browser: ', browser);
        browser.driver.findElement(by.css('.container')).getText().then(function (text) { console.log('text: \n', text) })
        browser.driver.findElement(by.css('.container')).getOuterHtml().then(function (outer) { console.log('outer: \n', outer) })
        browser.driver.findElement(by.css('.container')).getInnerHtml().then(function (inner) { console.log('inner: \n', inner) })
    }

    function iSeeAllEvents() {
        expect(EventsPage.numberOfEvents()).toEqual(3)
        expect(EventsPage.eventDescriptionAtIndex(0)).toEqual('Earth has been born')
        expect(EventsPage.eventDescriptionAtIndex(1)).toEqual('Cheese is invented')
        expect(EventsPage.eventDescriptionAtIndex(2)).toEqual('All humans have died')
    }

    function iAddAnEvent() {
        EventsPage.addEventWithDescription('The cake is a lie')
    }

    function iSeeTheNewEvent() {
        expect(EventsPage.numberOfEvents()).toEqual(4)
        expect(EventsPage.eventDescriptionAtIndex(3)).toEqual('The cake is a lie')
    }
});