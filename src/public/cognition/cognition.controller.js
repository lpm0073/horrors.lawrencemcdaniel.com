(function () {
    "use strict";

    angular.module('public')
    .controller('CognitionController', CognitionController)
    .directive('cgVision', cgVision)

    CognitionController.$inject = ['$scope'];
    function CognitionController($scope) {
      console.log('CognitionController instantiated');
        var ctrl = this;

        $scope.isCollapsed = true;    /* Bootstrap collapsable "view sourcode" button */

    }

    cgVision.$inject = [];
    function cgVision() {
      return {
          templateUrl: 'src/public/cognition/cg.vision.directive.html'
      };
    }


})();
