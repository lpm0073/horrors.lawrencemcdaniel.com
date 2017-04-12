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

    }

    ViewSourcecode.$inject = [];
    function ViewSourcecode() {

      var ddo = {
          // restrict: "E",
          scope: {
            html: '@',
            css: '@',
            js: '@'
          },
          controller: ViewSourcecodeController,
          controllerAs: 'ctrl',
          // bindToController: true,
          templateUrl: 'src/common/common.viewsourcecode.directive.html'
      };

      return ddo;
    }


})();
