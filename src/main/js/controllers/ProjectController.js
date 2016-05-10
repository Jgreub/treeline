angular.module('treeline').controller('ProjectController', ['$http', function($http) {
    var $ctrl = this

    $ctrl.events = []

    $http.get('/api/events').then(function(response) {
        $ctrl.events = response.data._embedded.events
    })

    $ctrl.addEvent = function() {
        $http.post('/api/events', {description: $ctrl.newEventText}).then(function(response) {
            var newEvent = response.data
            $ctrl.events.push(newEvent)
        })
    }
}])