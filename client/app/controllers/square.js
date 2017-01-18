angular.module('draw.square', [])

.controller('squareController', function($scope, $location, $window, Squares) {
  $scope.user = $window.localStorage.playerUserName;
  $scope.data = {};

  $scope.logout = function() {
    $window.localStorage.removeItem('playerUserName');
    $location.path('/squares');
  }  

  $scope.loadSquare = function() {
    $scope.data.URI = $window.localStorage.URI;
    Squares.getGuesses({
      _id: $window.localStorage.squareID
    }).then(function(square) {
      $scope.data.guesses = square.guesses.reverse();
    });
  }

  $scope.takeAGuess = function() {
    var compare = $scope.guess;
    
    Squares.takeGuess({
      _id: $window.localStorage.squareID,
      guess: $window.localStorage.playerUserName + ' : ' + $scope.guess
    });

    Squares.getGuesses({
      _id: $window.localStorage.squareID
    }).then(function(square) {
      $scope.data.guesses = square.guesses.reverse();
      if (compare === square.subject) {
        Squares.solve({_id: $window.localStorage.squareID});
        $location.path('/squares');
      }
    });
    
    $scope.guess = '';
  }

  $scope.noClue = function() {
    $location.path('/squares');
  }
});