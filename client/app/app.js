var anirevs = angular.module('anirevs', [
  'anirevs.services',
  'anirevs.reviews',
  'anirevs.write',
  'ngRoute'
])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/reviews', {
      templateUrl: 'app/views/reviews.html',
      controller: 'reviewsController'
    })
    .when('/write', {
      templateUrl: 'app/views/write.html',
      controller: 'writeController'
    })
    .otherwise({
      redirectTo: '/reviews'
    })

  $locationProvider.html5Mode(true);
});