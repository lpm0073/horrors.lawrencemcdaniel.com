(function () {
    "use strict";

    angular.module('common')
    .controller('GoogleChartsController', GoogleChartsController)
    .directive('aboutGooglecharts', GoogleChartsDirective);

    function GoogleChartsDirective() {
      console.log('GoogleChartsDirective instantiated');
      var ddo = {
          controller: GoogleChartsController,
          controllerAs: 'ctrl',
          templateUrl: 'src/public/charts/gc.googlecharts.directive.html'
      };

      return ddo;
    }

    GoogleChartsController.$inject = [];
    function GoogleChartsController() {
        console.log('GoogleChartsController instantiated');
        var ctrl = this;


    }



})();
