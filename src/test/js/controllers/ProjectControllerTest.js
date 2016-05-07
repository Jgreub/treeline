describe('Project Controller', function() {

    beforeEach(module('treeline'));

    beforeEach(inject(function($controller, $http) {
        this.$http = $http

        spyOn($http, 'get').and.returnValue({then: function() {}})

        this.controller = $controller('ProjectController', { $http: this.$http });
    }));

    it('should fetch the events', function() {
        expect(this.$http.get).toHaveBeenCalledWith('/api/events');
    });
});