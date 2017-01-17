angular.module('draw.squares', [])

.controller('squaresController', function($scope, $location, Squares) {
  $scope.message = 'Hello from the squares page!';
  $scope.data = {};

  //this should provide all the data from api to the scope
  Squares.getAll().then(function(resp) {
    $scope.data.squares = resp;
  });

  $scope.guess = function() {
    //localStorage.clear();
    localStorage.setItem('URI', this.square.URI);
    localStorage.setItem('squareID', this.square._id);
    $location.path('/square');
  }

  $scope.drawOne = function() {
    $location.path('/make');
  }
});