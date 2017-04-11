(function () {
    "use strict";

    angular.module('common')
    .service('PrettyPrinter', PrettyPrinter);

    PrettyPrinter.$inject = ['$http'];
    function PrettyPrinter($http) {
        console.log('PrettyPrinter instantiated');
        var service = this;

        service.getContentByUrl = function(url) {
          var response = $http.get(url);
          return response;
        };



    }
})();
