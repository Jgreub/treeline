var app = angular.module('treeline', [])

app.controller('eventController', ['$http', function($http) {
    var $ctrl = this

    $http.get('/api/event/50').then(function(response) {
        $ctrl.message = response.data.description
    })
}])

app.component('event', {
    template: '<div>{{$ctrl.message}}</div>',
    controller: 'eventController'
})