(function () {
    "use strict";

    angular.module('public')
    .controller('NemoformController', NemoformController);

    NemoformController.$inject = ['NemoService', '$scope', '$http'];
    function NemoformController(NemoService, $scope, $http) {
      console.log('NemoformController instantiated');
        var ctrl = this;
        ctrl.userInfo = {};
        ctrl.saved = false;
        ctrl.message = '';
        ctrl.validShortCode = false;
        ctrl.itemSearched = false;


        ctrl.setNemoinfo = function() {
            console.log('NemoformController.setNemoinfo()');
            NemoService.setNemoinfo(ctrl.userInfo);

            ctrl.saved = true;
            ctrl.message = 'Your information has been saved!';
        };


        /*-----------------------BOOTSTRAP TYPEAHEAD ------------------------------*/

          $scope.getLocation = function(val) {
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

          /*-----------------------BOOTSTRAP TYPEAHEAD ------------------------------*/
    }
})();
