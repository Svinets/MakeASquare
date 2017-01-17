angular.module('anirevs.write', [])

.controller('writeController', function($scope, $location, Reviews) {
  $scope.message = 'Is this going to work?';
  $scope.scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  $scope.submit = function() {
    Reviews.writeReview({
      author: $scope.author,
      title: $scope.title,
      score: $scope.score,
      votes: 0,
      text: $scope.text
    });
    $location.path('/reviews');
  }

  $scope.submitImage = function() {
    setTimeout(function() {
      console.log(dataURI);
      Reviews.writeReview({
        URI : dataURI
      });
    }, 0);
  }

  $scope.back = function() {
    $location.path('/reviews');
  }
});