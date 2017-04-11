(function () {
    "use strict";

    angular.module('public')
    .controller('CognitionController', CognitionController)
    .directive('cgVision', cgVision);

    CognitionController.$inject = ['PrettyPrinter'];
    function CognitionController(PrettyPrinter) {
      console.log('CognitionController instantiated');
        var ctrl = this;
        var source_code = '';

        ctrl.getSourceCode = function(url) {
          console.log('CognitionController.ContentsOf() called');

          var promise = PrettyPrinter.getContentByUrl(url);

          promise.then(
            function success(response) {
              ctrl.source_code = response.data;
              console.log('http promise success.', response.data);
            },
            function failure(response) {
              console.log('http promise failure. something terrible happened: ', response);
            });

        };

        ctrl.getSourceCode('css/d3.css');

    }

    cgVision.$inject = [];
    function cgVision() {
      return {
          templateUrl: 'src/public/cognition/cg.vision.directive.html'
      };
    }


})();
