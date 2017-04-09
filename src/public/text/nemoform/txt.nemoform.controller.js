(function () {
    "use strict";

    angular.module('public')
    .controller('NemoformController', NemoformController);

    NemoformController.$inject = ['NemoService', '$scope', '$http', 'MSCognitiveService', 'GoogleApiService'];
    function NemoformController(NemoService, $scope, $http, MSCognitiveService, GoogleApiService) {
      console.log('NemoformController instantiated');
        var ctrl = this;
        ctrl.userInfo = {};
        ctrl.saved = false;
        ctrl.message = '';
        ctrl.response = '';

        ctrl.setNemoinfo = function() {
            console.log('NemoformController.setNemoinfo()');
            NemoService.setNemoinfo(ctrl.userInfo);

            console.log('user:', ctrl.userInfo);

            var promise = MSCognitiveService.getProofedText(ctrl.userInfo.incidentReport, '');
            promise.then(
              function success(response) {
                ctrl.response = response.data;
                console.log('Proofed text: ', ctrl.response);
              },
              function failure(response) {
                control.log('something terrible happened: ', response);
              });


            ctrl.saved = true;
            ctrl.message = 'Your information has been saved!';
        };


        /*-----------------------BOOTSTRAP TYPEAHEAD (Location) ------------------------------*/
        $scope.getLocation = function(val) {

          console.log('NemoformController.getLocation()');
          return GoogleApiService.getLocation(val);

        };
          /*-----------------------END BOOTSTRAP TYPEAHEAD (Location) ------------------------------*/



    }
})();
