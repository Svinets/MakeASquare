angular.module('draw.square', [])

.controller('squareController', function($scope, $location, $window, Squares) {
  $scope.message = 'Hello from the square page!';
  $scope.data = {};

  $scope.loadSquare = function() {
    $scope.data.URI = $window.localStorage.URI;
  }

  $scope.takeAGuess = function() {
    console.log($window.localStorage.squareID);
    console.log($scope.guess);
    $scope.guess = '';
    // Squares.takeGuess({
    //   _id: $window.localStorage.squareID
    // });
  }

  $scope.noClue = function() {
    $location.path('/squares');
  }

});