angular.module('treeline').controller('ProjectController', ['$http', function($http) {
    var $ctrl = this

    $http.get('/api/events').then(function(response) {
        $ctrl.events = response.data._embedded.events
    })
}])