angular.module('draw.make', [])

.controller('makeController', function($scope, $location, Squares) {
  $scope.message = 'Is this going to work?';

  $scope.submit = function() {
    setTimeout(function() {
      console.log(dataURI);
      Squares.makeSquare({
        artist: 'anon', //the name of the artist
        URI: dataURI, //the dataURI of the canvas
        subject: 'rabbit', //the subject of the image
        guesses: [] //an array containing all guesses directed towards the image
      });
      $location.path('/squares');
    }, 0);
  }

  $scope.back = function() {
    $location.path('/squares');
  }
});