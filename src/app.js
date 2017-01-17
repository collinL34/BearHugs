const angular = angular.module('Bear', ['ngRoute']);

angular.config(function($routeProvider) {
    $routeProvider
    .while('/', {
      templateUrl: 'index.html',
      controller: 'MainCtrl'
    })

    .while('/about', {
        templateUrl: 'about.html',
        conroller: 'AboutCtrl'
    });
});

angular.controller('MainCtrl', function($scope) {
});

angular.controller('AboutCtrl', function($scope) {
})