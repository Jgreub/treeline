describe('Project Controller', function() {

    beforeEach(module('treeline'))

    beforeEach(inject(function($controller, $rootScope, $http) {
        this.$rootScope = $rootScope
        this.$http = $http

        this.getEventsPromise = spyOnAndReturnPromise(this.$http, 'get')

        this.controller = $controller('ProjectController')
    }))

    it('attempts to fetch the events', function() {
        expect(this.$http.get).toHaveBeenCalledWith('/api/events')
    })

    describe('when fetching the events succeeds', function() {
        var getEventsResponse = {data: {_embedded: {events: [{description: 'event-one'}, {description: 'event-two'}]}}}

        beforeEach(function() {
            this.getEventsPromise.resolve(getEventsResponse)
            this.$rootScope.$apply()
        })

        it('exposes the returned events', function() {
            expect(this.controller.events).toEqual([{description: 'event-one'}, {description: 'event-two'}])
        })
    })

    describe('#addEvent', function() {
        beforeEach(function() {
            this.controller.events = [{description: 'existing-event'}]
            this.saveEventPromise = spyOnAndReturnPromise(this.$http, 'post')

            this.controller.newEventText = 'new-event'
            this.controller.addEvent()
        })

        it('attempts to save the event', function() {
            expect(this.$http.post).toHaveBeenCalledWith('/api/events', {description: 'new-event'})
        })

        describe('when saving the event succeeds', function() {
            var saveEventResponse = {data: {description: 'new-event-from-server'}}

            beforeEach(function() {
                this.saveEventPromise.resolve(saveEventResponse)
                this.$rootScope.$apply()
            })

            it('adds the saved event to the exposed events', function() {
                expect(this.controller.events).toEqual([{description: 'existing-event'}, {description: 'new-event-from-server'}])
            })
        })
    })
})