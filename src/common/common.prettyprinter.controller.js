(function () {
    "use strict";

    angular.module('common')
    .controller('PrettyPrinterController', PrettyPrinterController)
    .directive('prettyPrinter', PrettyPrinter);

    PrettyPrinterController.$inject = ['$scope', '$http', '$sce'];
    function PrettyPrinterController($scope, $http, $sce) {
        console.log('PrettyPrinterController instantiated', $scope.sourceCode);
        var ctrl = this;

        ctrl.sourceCode = $scope.sourceCode;

        var promise = $http.get($scope.sourceCode);

        promise.then(
          function success(response) {
            ctrl.source_code = $sce.trustAsHtml(response.data);
            ctrl.succeeded = true;
            console.log('http promise success.');
          },
          function failure(response) {
            console.log('http promise failure. something terrible happened: ', response);
          });

    }

    PrettyPrinter.$inject = [];
    function PrettyPrinter() {

      var ddo = {
          // restrict: "E",
          scope: {
            sourceCode: '@'
          },
          controller: PrettyPrinterController,
          controllerAs: 'ctrl',
          // bindToController: true,
          templateUrl: 'src/common/common.prettyprinter.directive.html'
      };

      return ddo;
    }


})();
