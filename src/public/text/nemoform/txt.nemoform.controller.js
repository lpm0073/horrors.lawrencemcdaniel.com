(function () {
    "use strict";

    angular.module('public')
    .controller('NemoformController', NemoformController)
    .directive('txtNemoform', txtNemoform);

    function txtNemoform() {
      var ddo = {
          templateUrl: 'src/public/text/nemoform/txt.nemoform.directive.html'
        };

      return ddo;
    }


    NemoformController.$inject = ['NemoService', '$scope', '$http', '$sce', 'MSCognitiveService', 'GoogleApiService'];
    function NemoformController(NemoService, $scope, $http, $sce, MSCognitiveService, GoogleApiService) {
      console.log('NemoformController instantiated');
        var ctrl = this;
        ctrl.userInfo = {};
        ctrl.saved = false;
        ctrl.receivedResultsFromBingProofService = false;
        ctrl.message = '';
        ctrl.response = '';
        ctrl.userInfo.incidentReport = '';

        // Form initializations
        var htmlPrefix_ms = '<div class="chart-html-popover"><img src="http://cdn-horrors.lawrencemcdaniel.com/logo-microsoft.png" alt="MS Cognitive Services Logo" width="75"><p>';
        var htmlPrefix_google = '<div class="chart-html-popover"><img src="http://cdn-horrors.lawrencemcdaniel.com/logo-google-maps-api.png" alt="Google Maps API Logo" width="75"><p>';
        var htmlSuffix = '</p></div>';
        $scope.htmlPopoverIncidentReport = $sce.trustAsHtml(htmlPrefix_ms + "This input box is integrated to Microsoft Cognitive Services. The text you type will be proofed by artificial intelligence and machine learning algorithms, not only for spelling but also for grammar, word choice and phraseology." + htmlSuffix);
        $scope.htmlPopoverLastLocation = $sce.trustAsHtml(htmlPrefix_google + 'This input box is integrated to the Google Maps API using Ajax. Like in Google Maps, fully-formated text of locations matching your criteria are listed just below the input box. Try typing "fish market in tokyo".' + htmlSuffix);


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
