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
    .directive('gcPolynomial', gcPolynomial)
    .directive('gcGantt', gcGantt)
    .directive('gcGeointensity', gcGeointensity)
    .directive('gcScatter', gcScatter)

    ChartsController.$inject = [];
    function ChartsController() {
        var ctrl = this;
        ctrl.isNew = true;

        console.log('ChartsController instantiated');

        google.charts.load('current', {
/*        callback: drawCharts,           */
        packages: ['geochart', 'treemap', 'corechart', 'gantt', 'intensitymap', 'scatter']
        });


    }

    gcScatter.$inject = [];
    function gcScatter() {
      return {
          templateUrl: 'src/public/charts/gc.directive.scatter.html'
      };
    }

    gcGantt.$inject = [];
    function gcGantt() {
      return {
          templateUrl: 'src/public/charts/gc.directive.gantt.html'
      };
    }

    gcGeointensity.$inject = [];
    function gcGeointensity() {
      return {
          templateUrl: 'src/public/charts/gc.directive.geointensity.html'
      };
    }

    gcPolynomial.$inject = [];
    function gcPolynomial() {
      return {
          templateUrl: 'src/public/charts/gc.directive.polynomial.html'
      };
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
