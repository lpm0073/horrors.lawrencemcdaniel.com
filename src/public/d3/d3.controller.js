/*
 *  read http://stackoverflow.com/questions/16156445/multiple-versions-of-a-script-on-the-same-page-d3-js
 *  for background on how to hand NoConflict with the various D3 library versions.
 *
 */
(function () {
    "use strict";

    angular.module('public')
    .controller('D3Controller', D3Controller)
    .directive('d3Gears', d3Gears)

    D3Controller.$inject = [];
    function D3Controller() {
        var ctrl = this;
        ctrl.isNew = true;

        console.log('D3Controller instantiated');


    }

    d3Gears.$inject = [];
    function d3Gears() {
      return {
          templateUrl: 'src/public/d3/d3.directive.gears.html'
      };
    }

})();
