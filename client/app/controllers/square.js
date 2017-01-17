angular.module('draw.square', [])

.controller('squareController', function($scope, $location, $window, Squares) {
  $scope.message = 'Hello from the square page!';
  $scope.data = {};

  $scope.loadSquare = function() {
    $scope.data.URI = $window.localStorage.URI;
  }

  $scope.takeAGuess = function() {
    Squares.makeSquare({
      artist
    });
  }

  $scope.noClue = function() {
    $location.path('/squares');
  }

});