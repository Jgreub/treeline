describe('Project Component', function() {

    beforeEach(module('treeline', 'templates'))

    beforeEach(inject(function($compile, $rootScope, $httpBackend) {
        this.$scope = $rootScope.$new()
        this.$httpBackend = $httpBackend

        var existingEvents = [
            {description: 'event-one', createdTime: '2013-02-08T09:30:26.123'},
            {description: 'event-two', createdTime: '2014-11-24T11:30:27.443'}
        ]
        this.$httpBackend.expectGET('/api/events').respond(200, {_embedded: {events: existingEvents}})

        this.element = $compile('<project></project>')(this.$scope)
        appendSetFixtures(this.element)

        this.$httpBackend.flush()
    }))

    it('displays the existing events for the project', function() {
        expect(this.element.find('event').length).toEqual(2)
        expect(this.element.find('event:eq(0) .description').text()).toEqual('event-one')
        expect(this.element.find('event:eq(1) .description').text()).toEqual('event-two')
    })

    describe('adding a new event', function() {
        beforeEach(function() {
            var newEvent = {description: 'new-event-from-server', createdTime: '2014-11-24T11:30:27.443'}
            this.$httpBackend.expectPOST('/api/events', {description: 'new-event'}).respond(200, newEvent)

            this.element.find('input[name="description"]').val('new-event').trigger('change')
            this.element.find('input[name="submit"]').click()
            this.$httpBackend.flush()
        })

        it('displays the new event in the list events', function() {
            expect(this.element.find('event').length).toEqual(3)
            expect(this.element.find('event:eq(2) .description').text()).toEqual('new-event-from-server')
        })

        it('clears the description input field', function () {
            expect(this.element.find('input[name="description"]').val()).toEqual('')
        })

        it('requires entering a description', function () {
            this.element.find('input[name="description"]').val('').trigger('change')
            this.element.find('input[name="submit"]').click()

            expect(this.element.find('.form-group')).toHaveClass('has-error')
            expect(this.element.find('.help-block')).toBeVisible()
            this.$httpBackend.verifyNoOutstandingRequest()
        })
    })
})