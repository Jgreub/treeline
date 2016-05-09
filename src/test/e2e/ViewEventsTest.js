describe('ViewEventsTest', function() {

    it('I can view all events', iCanViewAllEvents);

    function iCanViewAllEvents() {
        iGoToTheWebsite();
        iSeeAllEvents();
    }

    // *** Helper Functions *** //

    function iGoToTheWebsite() {
        browser.get('index.html');
    }

    function iSeeAllEvents() {
        expect(element.all(by.css('event')).count()).toEqual(4)
    }
});