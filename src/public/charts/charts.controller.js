/*
 * Google Maps API key: AIzaSyAHkLhDno7SF63GKneZsS08IpAfnpZzS4k
 *                https://developers.google.com/maps/documentation/javascript/
 *
 */
(function () {
    "use strict";

    angular.module('public')
    .controller('ChartsController', ChartsController)
    .directive('gcTreemap', gcTreemap)
    .directive('gcPolynomial', gcPolynomial)
    .directive('gcScatter', gcScatter)
    .directive('gcSankey', gcSankey)
    .directive('gcWordtree', gcWordtree)
    .directive('gcPiechart', gcPiechart);

    ChartsController.$inject = ['$scope', '$log', '$sce'];
    function ChartsController($scope, $log, $sce) {
        console.log('ChartsController instantiated');
        var ctrl = this;

        /* ---------- initialization of closeable alert ----------*/
        $scope.alerts = [
          { type: 'danger', msg: 'Did you know? All of these charts are made with HTML5, and, they are highly interactive. Hover your cursor over the graph to see popout annotations and graph animations.' }
        ];

        $scope.addAlert = function() {
          $scope.alerts.push({msg: 'Another alert!'});
        };

        $scope.closeAlert = function(index) {
          $scope.alerts.splice(index, 1);
        };
        /* ---------- end initializatoin of closeable alert ----------*/

        /* ---------- tooltip initializations ----------*/

        $scope.dynamicTooltip = 'Hello, World!';
        $scope.dynamicTooltipText = 'dynamic';
        $scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
        $scope.placement = {
          options: [
            'top',
            'top-left',
            'top-right',
            'bottom',
            'bottom-left',
            'bottom-right',
            'left',
            'left-top',
            'left-bottom',
            'right',
            'right-top',
            'right-bottom'
          ],
          selected: 'top'
        };
        /* ---------- tooltip initializations ----------*/

        /* ---------- popover initializations ----------*/
/*        $scope.htmlPopover = $sce.trustAsHtml('<b style="color: red">I can</b> have <div class="label label-success">HTML</div> content');  */

        var htmlPrefix = '<div class="chart-html-popover"><img src="http://cdn.lawrencemcdaniel.com/angry-nun.jpg" alt="Angry Nun" width="75">';
        var htmlSuffix = '</div>';
        $scope.htmlPopoverGeo = $sce.trustAsHtml(htmlPrefix + 'There are near infinite ways to colorize and illuminate your geographical data. This example uses scaled shading.' + htmlSuffix);
        $scope.htmlPopoverArea = $sce.trustAsHtml(htmlPrefix + 'Line charts are a powerful information tool when used effectively. Anything that you can do with Excel or Powerpoint can be done even better when leveraging the power of the Internet and HTML5.' + htmlSuffix);
        $scope.htmlPopoverCandlestick = $sce.trustAsHtml(htmlPrefix + "This is a popular style for presenting stock high-low-close data. Did you know that most markets as well as providers like Yahoo provide free API's to securities market data?" + htmlSuffix);

      /* ---------- popover initializations ----------*/


  }  /* ChartsController() */

    gcPiechart.$inject = [];
    function gcPiechart() {
      return {
          templateUrl: 'src/public/charts/gc.piechart.directive.html'
      };
    }

    gcWordtree.$inject = [];
    function gcWordtree() {
      return {
          templateUrl: 'src/public/charts/gc.wordtree.directive.html'
      };
    }

    gcSankey.$inject = [];
    function gcSankey() {
      return {
          templateUrl: 'src/public/charts/gc.sankey.directive.html'
      };
    }

    gcScatter.$inject = [];
    function gcScatter() {
      return {
          templateUrl: 'src/public/charts/gc.scatter.directive.html'
      };
    }

    gcPolynomial.$inject = [];
    function gcPolynomial() {
      return {
          templateUrl: 'src/public/charts/gc.polynomial.directive.html'
      };
    }

    gcTreemap.$inject = [];
    function gcTreemap() {
      return {
          templateUrl: 'src/public/charts/gc.treemap.directive.html'
      };
    }

})();
