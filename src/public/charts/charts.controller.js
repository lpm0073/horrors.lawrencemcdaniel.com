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
    .directive('gcBubble', gcBubble)
    .directive('gcSankey', gcSankey)
    .directive('gcCombochart', gcCombochart)
    .directive('gcBarchart', gcBarchart)
    .directive('gcOrgchart', gcOrgchart)

    ChartsController.$inject = [];
    function ChartsController() {
        var ctrl = this;
        ctrl.isNew = true;

        console.log('ChartsController instantiated');

        google.charts.load('current', {
/*        callback: drawCharts,           */
        packages: ['geochart', 'treemap', 'corechart', 'gantt',
                   'intensitymap', 'scatter', 'sankey', 'orgchart']
        });


    }

    gcOrgchart.$inject = [];
    function gcOrgchart() {
      return {
          templateUrl: 'src/public/charts/fc.directive.orgchart.html'
      };
    }

    gcBarchart.$inject = [];
    function gcBarchart() {
      return {
          templateUrl: 'src/public/charts/gc.directive.barchart.html'
      };
    }

    gcCombochart.$inject = [];
    function gcCombochart() {
      return {
          templateUrl: 'src/public/charts/gc.directive.combochart.html'
      };
    }

    gcSankey.$inject = [];
    function gcSankey() {
      return {
          templateUrl: 'src/public/charts/gc.directive.sankey.html'
      };
    }

    gcBubble.$inject = [];
    function gcBubble() {
      return {
          templateUrl: 'src/public/charts/gc.directive.bubble.html'
      };
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
