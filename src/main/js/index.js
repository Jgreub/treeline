var app = angular.module('treeline', [])

app.controller('projectController', ['$http', function($http) {
    var $ctrl = this

    $http.get('/api/events').then(function(response) {
        $ctrl.events = response.data._embedded.events
    })
}])

app.component('project', {
    templateUrl: '/templates/project.html',
    controller: 'projectController'
})

app.component('event', {
    templateUrl: '/templates/event.html',
    bindings: {
        event: '<'
    }
})