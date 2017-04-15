(function () {
    "use strict";

    angular.module('public')
    .controller('GCCandlestickChartController', GCCandlestickChartController)
    .directive('gcCandlestick', GCCandlestickDirective);

    function GCCandlestickDirective() {
      var ddo = {
          controller: GCCandlestickChartController,
          controllerAs: 'ctrl',
          template: '<div id="candlestick_div" class="widget-object"></div>'
          };

      return ddo;
    }


    GCCandlestickChartController.$inject = ['$scope', '$sce'];
    function GCCandlestickChartController($scope, $sce) {
        console.log('GCCandlestickChartController instantiated');
        var ctrl = this;

      /* ---------- Google Chart ----------*/
      google.charts.load('current', {'packages':['corechart'], 'callback': drawChart});

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Mon', 20, 28, 38, 45],
          ['Tue', 31, 38, 55, 66],
          ['Wed', 50, 55, 77, 80],
          ['Thu', 77, 77, 66, 50],
          ['Fri', 68, 66, 22, 15]
          // Treat first row as data as well.
        ], true);

        var options = {
          legend:'none'
        };

        var chart = new google.visualization.CandlestickChart(document.getElementById('candlestick_div'));

        chart.draw(data, options);

        function resizeChart () {
            chart.draw(data, options);
        }
        if (document.getElementById('candlestick_div').addEventListener) {
            document.getElementById('candlestick_div').addEventListener('resize', resizeChart);
        }
        else if (document.getElementById('candlestick_div').attachEvent) {
            document.getElementById('candlestick_div').attachEvent('onresize', resizeChart);
        }
        else {
            window.resize = resizeChart;
        }

      }

  }  /* GCCandlestickChartController() */


})();
