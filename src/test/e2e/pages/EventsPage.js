var EventsPage = function() {

    // *** Elements *** //

    var allEvents = function() {
        return element.all(by.css('event'))
    }

    var eventAtIndex = function(index) {
        return allEvents().get(index)
    }

    var addEventDescriptionTextField = function() {
        return element(by.id('addEventTextField'))
    }

    var addEventSubmitButton = function() {
        return element(by.id('addEventSubmitButton'))
    }

    // *** Properties *** //

    var eventDescriptionAtIndex = function(index) {
        return eventAtIndex(index).getText()
    }

    var numberOfEvents = function() {
        return allEvents().count()
    }

    // *** Actions *** //

    var addEventWithDescription = function(description) {
        addEventDescriptionTextField().sendKeys(description)
        addEventSubmitButton().click()
    }

    // *** Public Functions *** //

    return {
        eventDescriptionAtIndex: eventDescriptionAtIndex,
        numberOfEvents: numberOfEvents,
        addEventWithDescription: addEventWithDescription
    }
}

module.exports = new EventsPage()