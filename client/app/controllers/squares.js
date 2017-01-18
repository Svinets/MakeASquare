angular.module('draw.squares', [])

.controller('squaresController', function($scope, $location, $sce, $window, Squares) {
  $scope.user = $window.localStorage.playerUserName;
  $scope.data = {};

  Squares.getAll().then(function(resp) {
    $scope.data.squares = resp.reverse();
  });

  $scope.login = function() {
    if (!$window.localStorage.hasOwnProperty('playerUserName')) {
      $window.localStorage.playerUserName = prompt('Pick a username!') || 'Anonymous';
      location.reload();      
    }
  }

  $scope.logout = function() {
    $window.localStorage.removeItem('playerUserName');
    location.reload();
  }

  $scope.done = function(square) {
    return square.solved;
  }

  $scope.critique = function() {
    localStorage.setItem('URI', this.square.URI);
    localStorage.setItem('squareID', this.square._id);
    $location.path('/square');
  }

  $scope.drawOne = function() {
    $location.path('/make');
  }
});