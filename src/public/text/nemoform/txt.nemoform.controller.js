(function () {
    "use strict";

    angular.module('public')
    .controller('NemoformController', NemoformController);

    NemoformController.$inject = ['NemoService', '$scope', '$http', 'MSCognitiveService'];
    function NemoformController(NemoService, $scope, $http, MSCognitiveService) {
      console.log('NemoformController instantiated');
        var ctrl = this;
        ctrl.userInfo = {};
        ctrl.saved = false;
        ctrl.message = '';

        ctrl.setNemoinfo = function() {
            console.log('NemoformController.setNemoinfo()');
            NemoService.setNemoinfo(ctrl.userInfo);

            console.log('user:', ctrl.userInfo);

            var proofed = MSCognitiveService.getProofedText(ctrl.userInfo.incidentReport, '');
            console.log('Proofed text: ', proofed);

            ctrl.saved = true;
            ctrl.message = 'Your information has been saved!';
        };


        /*-----------------------BOOTSTRAP TYPEAHEAD (Location) ------------------------------*/

          $scope.getLocation = function(val) {
            console.log('NemoformController.getLocation()');
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

          /*-----------------------END BOOTSTRAP TYPEAHEAD (Location) ------------------------------*/



    }
})();
