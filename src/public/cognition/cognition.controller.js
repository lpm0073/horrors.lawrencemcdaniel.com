(function () {
    "use strict";

    angular.module('public')
    .controller('CognitionController', CognitionController)
    .directive('cgVision', cgVision);

    CognitionController.$inject = [];
    function CognitionController() {
      console.log('CognitionController instantiated');
        var ctrl = this;

    }

    cgVision.$inject = [];
    function cgVision() {
      return {
          templateUrl: 'src/public/cognition/cg.vision.directive.html'
      };
    }

})();
