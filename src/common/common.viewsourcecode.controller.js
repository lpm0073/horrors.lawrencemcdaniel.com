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

        ctrl.tabs = JSON.parse($scope.tabs);

    }

    ViewSourcecode.$inject = [];
    function ViewSourcecode() {

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
