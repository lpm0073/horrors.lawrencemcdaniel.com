(function () {
    "use strict";

    angular.module('common')
    .service('GoogleApiService', GoogleApiService);

    GoogleApiService.$inject = ['$http'];
    function GoogleApiService($http) {
        console.log('GoogleApiService instantiated');
        var service = this;

        service.getLocation = function(val) {
          return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
             params: {
                     address: val,
                     sensor: false
             }
          }).then(function(response){
            return response.data.results.map(function(item){
              return item.formatted_address;
            });
          });
        };

    }
})();
