/*
 * Google Maps API key: AIzaSyAHkLhDno7SF63GKneZsS08IpAfnpZzS4k
 *                https://developers.google.com/maps/documentation/javascript/
 *
 */
(function () {
    "use strict";

    angular.module('public')
    .controller('GCAreaChartController', GCAreaChartController)
    .directive('gcAreachart', GCAreachartDirective);

    GCAreaChartController.$inject = ['$scope', '$sce'];
    function GCAreaChartController($scope, $sce) {
        console.log('GCAreaChartController instantiated');
        var ctrl = this;

        /* ---------- popover initializations ----------*/
/*        $scope.htmlPopover = $sce.trustAsHtml('<b style="color: red">I can</b> have <div class="label label-success">HTML</div> content');  */

        var htmlPrefix = '<div class="chart-html-popover"><img src="http://cdn.lawrencemcdaniel.com/angry-nun.jpg" alt="Angry Nun" width="75">';
        var htmlSuffix = '</div>';
        $scope.htmlPopoverArea = $sce.trustAsHtml(htmlPrefix + 'Line charts are a powerful information tool when used effectively. Anything that you can do with Excel or Powerpoint can be done even better when leveraging the power of the Internet and HTML5.' + htmlSuffix);

      /* ---------- popover initializations ----------*/


  }  /* GCAreaChartController() */

    GCAreachartDirective.$inject = [];
    function GCAreachartDirective() {
      return {
          controller: GCAreaChartController,
          controllerAs: 'ctrl',
          templateUrl: 'src/public/charts/gc.areachart.directive.html'
      };
    }



})();
