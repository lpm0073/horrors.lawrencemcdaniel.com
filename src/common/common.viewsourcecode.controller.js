(function () {
    "use strict";

    angular.module('common')
    .controller('ViewSourcecodeController', ViewSourcecodeController)
    .directive('viewSourcecode', ViewSourcecode);

    ViewSourcecodeController.$inject = ['$scope'];
    function ViewSourcecodeController($scope) {
        console.log('ViewSourcecodeController instantiated');
        var ctrl = this;

        $scope.isCollapsed = true;    /* Bootstrap collapsable "view sourcode" button */

        /*
          the name and http URI of each tab window is passed in
          a text json string which then needs to be parsed into an object
          here so that we can iterate and interpolate the hash
          in the directive using ng-repeat.
        */
        ctrl.tabs = JSON.parse($scope.tabs);

    }

    ViewSourcecode.$inject = [];
    function ViewSourcecode() {

      /*
        NOTE: after considerable head-scratching i learned that
        it is not possible to restrict this directive in any way.
        i tried every combination and permutation.

        further, referencing bindToController (regardless of value)
        will break the directive.

        weird.
      */
      var ddo = {
          // restrict: "E",
          scope: {
            tabs: '@'
          },
          controller: ViewSourcecodeController,
          controllerAs: 'ctrl',
          // bindToController: true,
          templateUrl: 'src/common/common.viewsourcecode.directive.html'
      };

      return ddo;
    }


})();
