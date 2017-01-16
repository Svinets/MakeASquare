angular.module('anirevs.reviews', [])

.controller('reviewsController', function($scope, $location, Reviews) {
  $scope.message = 'Hello from the reviews page!';
  $scope.data = {};

  //this should provide all the data from api to the scope
  Reviews.getAll().then(function(resp) {
    $scope.data.reviews = resp;
  });

  $scope.writeReview = function() {
    $location.path('/write');
  }
});