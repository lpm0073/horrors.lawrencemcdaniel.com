(function () {
    "use strict";

    angular.module('public')
    .controller('GCAreaChartController', GCAreaChartController)
    .directive('gcAreachart', GCAreachartDirective);

    function GCAreachartDirective() {
      var ddo = {
          controller: GCAreaChartController,
          controllerAs: 'ctrl',
          templateUrl: 'src/public/charts/gc.areachart.directive.html'
          };

      return ddo;
    }


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

      /* ---------- Google Chart ----------*/
      google.charts.load('current', {'packages':['corechart'], 'callback': drawChart});

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('areachart_div'));
        chart.draw(data, options);

        function resizeChart () {
            chart.draw(data, options);
        }
        if (document.getElementById('areachart_div').addEventListener) {
            document.getElementById('areachart_div').addEventListener('resize', resizeChart);
        }
        else if (document.getElementById('areachart_div').attachEvent) {
            document.getElementById('areachart_div').attachEvent('onresize', resizeChart);
        }
        else {
            window.resize = resizeChart;
        }

      }



  }  /* GCAreaChartController() */


})();
