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

    getGuesses: function(id) {
      return $http({
        method: 'GET',
        url: '/api/square',
        params: id
      }).then(function(resp) {
        //console.log('services.js - I GOT THIS ONE', resp.data);
        return resp.data;
      });
    },

    takeGuess: function(square) {
      //console.log(square);
      return $http({
        method: 'PUT',
        url: '/api/square',
        data: square
      }).then(function(resp) {
        console.log('services.js - I PUT THIS', resp)
        return resp;
      });
    },

    solve: function(square) {
      console.log(square);
      return $http({
        method: 'PUT',
        url: '/api/done',
        data: square
      }).then(function(resp) {
        console.log('services.js - I PUT THIS', resp)
        return resp;
      });
    },

    randomWord: function() {
      var words = ['alarm','animal','apple','arm','aunt','bait','balloon','banana','bath','bead','beam','bean','bedroom','bike','bird','book','boot','bread','brick','brother','camp','chicken','children','chin','clam','clover','club','corn','crayon','crib','crook','crow','crowd','crown','deer','desk','dime','dirt','dock','doctor','downtown','dress','drum','dust','eye','family','fang','father','field','fight','flag','flesh','flower','fog','food','frog','game','goose','grade','grandfather','grandmother','grape','grass','heat','hill','home','hook','horn','horse','hose','jail','jam','joke','juice','kiss','kite','kitten','lake','light','loaf','lock','lunch','lunchroom','maid','mask','meal','meat','mice','milk','mint','moon','morning','mother','mother','name','nest','nose','notebook','owl','pail','parent','park','pear','pen','pencil','plant','plot','rabbit','rain','rake','river','road','robin','rock','room','rose','sack','sail','scale','sea','seed','shape','shoe','shop','show','sink','sister','snail','snake','snow','soap','soda','sofa','song','space','spark','spoon','spot','spy','star','step','stew','stove','straw','string','summer','swing','table','tank','team','tent','test','tiger','toad','toes','town','trail','tramp','tray','tree','trick','trip','uncle','vase','vest','water','water','week','wheel','wing','winter','winter','wish','woman','women','wool','yard','zebra'];
      return words[Math.floor(Math.random() * words.length)];
    }
  }
});