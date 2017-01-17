var draw = angular.module('draw', [
  'draw.services',
  'draw.squares',
  'draw.make',
  'ngRoute'
])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/squares', {
      templateUrl: 'app/views/squares.html',
      controller: 'squaresController'
    })
    .when('/make', {
      templateUrl: 'app/views/make.html',
      controller: 'makeController'
    })
    .otherwise({
      redirectTo: '/squares'
    })

  $locationProvider.html5Mode(true);
});