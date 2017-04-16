(function () {
    "use strict";

    angular.module('common')
    .controller('MikeBostockController', MikeBostockController)
    .directive('whoisMikebostock', MikeBostockDirective);

    function MikeBostockDirective() {
      console.log('MikeBostockDirective instantiated');
      var ddo = {
          controller: MikeBostockController,
          controllerAs: 'ctrl',
          templateUrl: 'src/common/common.mikebostock.directive.html'
      };

      return ddo;
    }

    MikeBostockController.$inject = [];
    function MikeBostockController() {
        console.log('MikeBostockController instantiated');
        var ctrl = this;


    }



})();
