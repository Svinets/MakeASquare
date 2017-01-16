angular.module('anirevs.services', [])

.factory('Reviews', function($http) {
  return {
    getAll: function() {
      return $http({
        method: 'GET',
        url: '/api/reviews'
      }).then(function(resp) {
        console.log('services.js - I GOT THIS', resp.data)
        return resp.data;
      });
    },

    writeReview: function(review) {
      console.log(review);
      return $http({
        method: 'POST',
        url: '/api/reviews',
        data: review
      }).then(function(resp) {
        console.log('services.js - I POSTED THIS', resp)
        return resp;
      });
    }
  }
});