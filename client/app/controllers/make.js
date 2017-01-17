angular.module('draw.make', [])

.controller('makeController', function($scope, $location, $timeout, $window, Squares) {
  $scope.message = 'Is this going to work?';
  $scope.timer = 30;

  $scope.back = function() {
    $location.path('/squares');
  }

  $scope.getWord = function() {
    $scope.randomWord = Squares.randomWord();
  }

  $scope.startTimer = function() {
    $scope.timer--;
    timeOut = $timeout($scope.startTimer, 1000);
  }

  var timeOut = $scope.startTimer;

  $scope.submit = function() {
    var word = $scope.randomWord;
    setTimeout(function() {
      Squares.makeSquare({
        artist: 'anon', //the name of the artist
        URI: dataURI, //the dataURI of the canvas
        subject: word, //the subject of the image
        solved: false, //whether the square is won
        guesses: [] //an array containing all guesses directed towards the image
      });
      $location.path('/squares');
    }, 0);
  }

  function logTime() {//the dataURI is being pushed to window in sketch.js
    if ($scope.timer === 0) {
      $window.dataURI = document.querySelector('#sketch').toDataURL().toString();
      $scope.submit();
      $timeout.cancel(timeOut);
    }
  }

  $scope.$watch('timer', logTime);

});