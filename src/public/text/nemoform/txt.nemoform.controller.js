(function () {
    "use strict";

    angular.module('public')
    .controller('NemoformController', NemoformController);

    NemoformController.$inject = ['NemoService', '$scope', '$http', '$sce', 'MSCognitiveService', 'GoogleApiService'];
    function NemoformController(NemoService, $scope, $http, $sce, MSCognitiveService, GoogleApiService) {
      console.log('NemoformController instantiated');
        var ctrl = this;
        ctrl.userInfo = {};
        ctrl.saved = false;
        ctrl.receivedResultsFromBingProofService = false;
        ctrl.message = '';
        ctrl.response = '';
        ctrl.userInfo.incidentReport = 'Ha vefun triingf owt theBin gspeller by typying a sentance or clcking teh sampels bellow';

        // Form initializations
        var htmlPrefix_ms = '<div class="chart-html-popover"><img src="images/logo-ms-cognitive-services.png" alt="Angry Nun" width="75">';
        var htmlSuffix = '</div>';
        $scope.htmlPopoverIncidentReport = $sce.trustAsHtml(htmlPrefix_ms + "This is a popular style for presenting stock high-low-close data. Did you know that most markets as well as providers like Yahoo provide free API's to securities market data?" + htmlSuffix);


        ctrl.setNemoinfo = function() {
            console.log('NemoformController.setNemoinfo()');
            NemoService.setNemoinfo(ctrl.userInfo);

            var promise = MSCognitiveService.getProofedText(ctrl.userInfo.incidentReport, '');

            promise.then(
              function success(response) {
                ctrl.response = response.data;
                ctrl.receivedResultsFromBingProofService = true;
                console.log('http promise success.', response.data);
              },
              function failure(response) {
                console.log('http promise failure. something terrible happened: ', response);
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
