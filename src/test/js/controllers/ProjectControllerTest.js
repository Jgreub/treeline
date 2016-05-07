describe('Project Controller', function() {

    beforeEach(module('treeline'))

    beforeEach(inject(function($controller, $http) {
        this.$http = $http

        this.eventsPromise = spyOnAndReturnPromise($http, 'get')

        this.controller = $controller('ProjectController', { $http: this.$http })
    }));

    it('should fetch the events', function() {
        expect(this.$http.get).toHaveBeenCalledWith('/api/events')
    });

    describe('when the events promise is fulfilled', function() {
        var events = [{description: "Event!"}, {description: "Event Two!"}]
        var eventsResponse = {data: {_embedded: {events: events}}}

        beforeEach(function() {
            this.eventsPromise.resolve(eventsResponse)
        })

        it('should expose the returned events', function() {
            expect(this.controller.events).toEqual(events)
        })
    })
});