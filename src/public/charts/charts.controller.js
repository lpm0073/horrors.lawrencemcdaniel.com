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
    .directive('gcGuages', gcGuages)
    .directive('gcCandlestick', gcCandlestick)
    .directive('gcWordtree', gcWordtree)
    .directive('gcPiechart', gcPiechart)
    .directive('gcAreachart', gcAreachart)

    ChartsController.$inject = ['$scope', '$log'];
    function ChartsController($scope, $log) {
        var ctrl = this;
        ctrl.isNew = true;

        console.log('ChartsController instantiated');

        $scope.items = [
          'The first choice!',
          'And another choice for you.',
          'but wait! A third!'
        ];

        $scope.status = {
          isopen: false
        };

        $scope.toggled = function(open) {
          $log.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          $scope.status.isopen = !$scope.status.isopen;
        };

        $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));



    }

    gcAreachart.$inject = [];
    function gcAreachart() {
      return {
          templateUrl: 'src/public/charts/gc.directive.areachart.html'
      };
    }

    gcPiechart.$inject = [];
    function gcPiechart() {
      return {
          templateUrl: 'src/public/charts/gc.directive.piechart.html'
      };
    }

    gcWordtree.$inject = [];
    function gcWordtree() {
      return {
          templateUrl: 'src/public/charts/gc.directive.wordtree.html'
      };
    }

    gcCandlestick.$inject = [];
    function gcCandlestick() {
      return {
          templateUrl: 'src/public/charts/gc.directive.candlestick.html'
      };
    }

    gcGuages.$inject = [];
    function gcGuages() {
      return {
          templateUrl: 'src/public/charts/gc.directive.guages.html'
      };
    }

    gcOrgchart.$inject = [];
    function gcOrgchart() {
      return {
          templateUrl: 'src/public/charts/gc.directive.orgchart.html'
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
