/*
 * Google Maps API key: AIzaSyAHkLhDno7SF63GKneZsS08IpAfnpZzS4k
 *                https://developers.google.com/maps/documentation/javascript/
 *
 */
(function () {
    "use strict";

    angular.module('public')
    .controller('ChartsController', ChartsController)
    .directive('gcGeochart', gcGeochart)
    .directive('gcTreemap', gcTreemap)

    ChartsController.$inject = [];
    function ChartsController() {
        var ctrl = this;
        ctrl.isNew = true;

        console.log('ChartsController instantiated');

        google.charts.load('current', {
/*        callback: drawCharts,           */
        packages: ['geochart', 'treemap']
        });


    }

    gcTreemap.$inject = [];
    function gcTreemap() {
      return {
          templateUrl: 'src/public/charts/gc.directive.treemap.html'
      };
    }

    gcGeochart.$inject = [];
    function gcGeochart() {
      return {
          templateUrl: 'src/public/charts/gc.directive.geochart.html'
      };
    }


})();
