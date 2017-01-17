angular.module('draw.services', [])

.factory('Squares', function($http) {
  return {
    getAll: function() {
      return $http({
        method: 'GET',
        url: '/api/squares'
      }).then(function(resp) {
        console.log('services.js - I GOT THIS', resp.data)
        return resp.data;
      });
    },

    makeSquare: function(square) {
      return $http({
        method: 'POST',
        url: '/api/make',
        data: square
      }).then(function(resp) {
        console.log('services.js - I POSTED THIS', resp)
        return resp;
      });
    },

    takeGuess: function(square) {
      console.log(square);
      return $http({
        method: 'PUT',
        url: '/api/square',
        data: square
      }).then(function(resp) {
        console.log('services.js - I PUT THIS', resp)
        return resp;
      });
    }
  }
});