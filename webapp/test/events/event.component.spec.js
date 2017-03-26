describe('Event Component', function() {

    beforeEach(module('treeline', 'templates'))

    beforeEach(inject(function($compile, $rootScope, $httpBackend) {
        this.$scope = $rootScope.$new()

        this.$scope.event = {description: 'event-one', createdTime: '2013-02-08T09:30:26.123'}

        this.element = $compile('<event event="event"></event>')(this.$scope)
        this.$scope.$digest()
    }))

    it('displays the description', function() {
        expect(this.element.find('.description').text()).toEqual('event-one')
    })

    it('displays the created time', function () {
        expect(this.element.find('.created-time').text()).toEqual('February 8, 2013 9:30 AM')
    })
})