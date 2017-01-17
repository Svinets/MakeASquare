angular.module('draw.squares', [])

.controller('squaresController', function($scope, $location, Squares) {
  $scope.message = 'Hello from the squares page!';
  $scope.data = {};

  //this should provide all the data from api to the scope
  Squares.getAll().then(function(resp) {
    $scope.data.squares = resp;
  });

  $scope.drawOne = function() {
    $location.path('/make');
  }
});