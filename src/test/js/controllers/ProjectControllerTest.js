describe('Project Controller', function() {

    beforeEach(module('treeline'))

    beforeEach(inject(function($controller, $http) {
        this.$http = $http

        this.getEventsPromise = spyOnAndReturnPromise(this.$http, 'get')

        this.controller = $controller('ProjectController', { $http: this.$http })
    }));

    it('should fetch the events', function() {
        expect(this.$http.get).toHaveBeenCalledWith('/api/events')
    });

    describe('when the get events promise is fulfilled', function() {
        var events = [{description: "Event!"}, {description: "Event Two!"}]
        var getEventsResponse = {data: {_embedded: {events: events}}}

        beforeEach(function() {
            this.getEventsPromise.resolve(getEventsResponse)
        })

        it('should expose the returned events', function() {
            expect(this.controller.events).toEqual(events)
        })
    })

    describe('#addEvent', function() {
        var result

        beforeEach(function() {
            this.controller.newEventText = 'Mongo Mango'
            this.saveEventPromise = spyOnAndReturnPromise(this.$http, 'post')

            result = this.controller.addEvent()
        })

        it('should save the event', function() {
            expect(this.$http.post).toHaveBeenCalledWith('/api/events', {description: 'Mongo Mango'})
        })

        describe('when the save event promise is fulfilled', function() {
            var savedEvent = {description: "Mongo Mango"}
            var saveEventResponse = {data: savedEvent}

            beforeEach(function() {
                this.saveEventPromise.resolve(saveEventResponse)
            })

            it('should add the saved event to the exposed events', function() {
                expect(this.controller.events).toEqual([savedEvent])
            })
        })
    })
});