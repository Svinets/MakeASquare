angular.module('draw.squares', [])

.controller('squaresController', function($scope, $location, $sce, $window, Squares) {
  $scope.user = $window.localStorage.playerUserName;
  $scope.data = {};
  $scope.cover;

  //this should provide all the data from api to the scope
  Squares.getAll().then(function(resp) {
    // resp.forEach()
    //if a square in resp is solved then make it unclickable
    //also grey it out 
    $scope.data.squares = resp;
    //console.log($scope.data);
  });

  $scope.login = function() {
    if (!$window.localStorage.hasOwnProperty('playerUserName')) {
      $window.localStorage.playerUserName = prompt('Pick a username!');
      location.reload();      
    }
  }

  $scope.logout = function() {
    $window.localStorage.removeItem('playerUserName');
    location.reload();
  }

  $scope.done = function(square) {
    if (square.solved) {
      $scope.cover = $sce.trustAsHtml('<div class="complete">SOLVED</div>');
    }
  }

  $scope.critique = function() {
    //localStorage.clear();
    localStorage.setItem('URI', this.square.URI);
    localStorage.setItem('squareID', this.square._id);
    $location.path('/square');
  }

  $scope.drawOne = function() {
    $location.path('/make');
  }
});