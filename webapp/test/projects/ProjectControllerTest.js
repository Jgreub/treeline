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
        var events = [
            {description: 'event-one', createdDate: '2013-02-08T09:30:26.123'},
            {description: 'event-two', createdDate: '2014-11-24T11:30:27.443'}
        ]
        var getEventsResponse = {data: {_embedded: {events: events}}}

        beforeEach(function() {
            this.getEventsPromise.resolve(getEventsResponse)
            this.$rootScope.$apply()
        })

        it('exposes the returned events', function() {
            var expectedEvents = [
                {description: 'event-one', createdDate: '2013-02-08T09:30:26.123'},
                {description: 'event-two', createdDate: '2014-11-24T11:30:27.443'}
            ]
            expect(this.controller.events).toEqual(expectedEvents)
        })
    })

    describe('#addEvent', function() {
        beforeEach(function() {
            this.controller.events = [{description: 'existing-event', createdDate: '2013-02-08T09:30:26.123'}]
            this.saveEventPromise = spyOnAndReturnPromise(this.$http, 'post')

            this.controller.newEventText = 'new-event'
            this.controller.addEvent()
        })

        it('attempts to save the event', function() {
            expect(this.$http.post).toHaveBeenCalledWith('/api/events', {description: 'new-event'})
        })

        describe('when saving the event succeeds', function() {
            var saveEventResponse = {data: {description: 'new-event-from-server', createdDate: '2014-11-24T11:30:27.443'}}

            beforeEach(function() {
                this.saveEventPromise.resolve(saveEventResponse)
                this.$rootScope.$apply()
            })

            it('adds the saved event to the exposed events', function() {
                var expectedEvents = [
                    {description: 'existing-event', createdDate: '2013-02-08T09:30:26.123'},
                    {description: 'new-event-from-server', createdDate: '2014-11-24T11:30:27.443'}
                ]
                expect(this.controller.events).toEqual(expectedEvents)
            })
        })
    })
})