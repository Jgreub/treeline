var app = angular.module('treeline', [])

app.controller('projectController', ['$http', function($http) {
    var $ctrl = this

    $http.get('/api/events').then(function(response) {
        $ctrl.events = response.data._embedded.events
    })
}])

app.component('project', {
    template: '<event ng-repeat="event in $ctrl.events" event="event"></event>',
    controller: 'projectController'
})

app.component('event', {
    template: '<div>{{$ctrl.event.description}}</div>',
    bindings: {
        event: '<'
    }
})