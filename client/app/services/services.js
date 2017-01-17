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
      console.log(square);
      return $http({
        method: 'POST',
        url: '/api/squares',
        data: square
      }).then(function(resp) {
        console.log('services.js - I POSTED THIS', resp)
        return resp;
      });
    }

    //guess: function() 
  }
});