angular.module('draw.make', [])

.controller('makeController', function($scope, $location, $timeout, $window, Squares) {
  $scope.user = $window.localStorage.playerUserName;
  $scope.timer = 30;

  $scope.logout = function() {
    $window.localStorage.removeItem('playerUserName');
    $location.path('/squares');
  }  

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
        artist: $window.localStorage.playerUserName, //the name of the artist
        URI: dataURI, //the dataURI of the canvas
        subject: word || 'none', //the subject of the image
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