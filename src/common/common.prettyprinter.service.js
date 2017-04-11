(function () {
    "use strict";

    angular.module('common')
    .service('PrettyPrinter', PrettyPrinter);

    PrettyPrinter.$inject = ['$http'];
    function PrettyPrinter($http) {
        console.log('PrettyPrinter instantiated');
        var service = this;

        service.getContentByUrl = function(url) {
          // return $http.get(url).then(function(response){
          //   return response.data
          // });

          var response = $http.get(url);
          return response;

        };

        service.getContentByLocalFile = function(path_and_file) {
          return 'THE SOURCE CODE IN ' + path_and_file
        };


    }
})();
