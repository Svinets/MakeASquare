angular.module('draw.square', [])

.controller('squareController', function($scope, $location, $window, Squares) {
  $scope.message = 'Hello from the square page!';
  $scope.data = {};

  //this should provide all the data from api to the scope
  $scope.help = function() {
    $scope.data.URI = $window.localStorage.URI;
  }

  $scope.noClue = function() {
    $location.path('/squares');
  }
});