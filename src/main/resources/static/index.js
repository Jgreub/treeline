var app = angular.module('treeline', [])

app.controller('eventController', function($http) {
    var $ctrl = this

    $http.get('/api/event/50').then(function(response) {
        console.log(response.data)
        $ctrl.message = response.data.description
    })
})

app.component('event', {
    template: '<div>{{$ctrl.message}}</div>',
    controller: 'eventController'
})