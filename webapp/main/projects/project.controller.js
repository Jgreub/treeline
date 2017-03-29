angular.module('treeline').controller('ProjectController', ['$http', function($http) {
    var $ctrl = this

    $ctrl.events = []
    $ctrl.newEvent = {}

    $http.get('/api/events').then(function(response) {
        $ctrl.events = response.data._embedded.events
    })

    $ctrl.hasError = function(field) {
        var invalid = $ctrl.addEventForm[field].$invalid
        var dirty = $ctrl.addEventForm[field].$dirty
        var submitted = $ctrl.addEventForm.$submitted
        return invalid && (dirty || submitted)
    }

    $ctrl.addEvent = function() {
        $http.post('/api/events', $ctrl.newEvent)
            .then(function(response) {
                $ctrl.events.push(response.data)
                $ctrl.newEvent = {}
                $ctrl.addEventForm.$setPristine()
            })
    }
}])