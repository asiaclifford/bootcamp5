angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://warm-ridge-23207.herokuapp.com/api/listings');
    },
	
	 create: function(listing) {
	   return $http.post('https://warm-ridge-23207.herokuapp.com/api/listings', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
     return $http.delete('https://warm-ridge-23207.herokuapp.com/'+ id);  

    }
  };

  return methods;
});

