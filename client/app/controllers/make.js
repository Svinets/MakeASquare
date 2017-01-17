angular.module('draw.make', [])

.controller('makeController', function($scope, $location, Squares) {
  $scope.message = 'Is this going to work?';
  //$scope.scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // $scope.submit = function() {
  //   Reviews.writeReview({
  //     author: $scope.author,
  //     title: $scope.title,
  //     score: $scope.score,
  //     votes: 0,
  //     text: $scope.text
  //   });
  //   $location.path('/reviews');
  // }

  $scope.submit = function() {
    setTimeout(function() {
      console.log(dataURI);
      Squares.makeSquare({
        artist: 'anon', //the name of the artist
        URI: dataURI, //the dataURI of the canvas
        subject: 'rabbit', //the subject of the image
        guesses: [] //an array containing all guesses directed towards the image
      });
    }, 0);
  }

  $scope.back = function() {
    $location.path('/squares');
  }
});