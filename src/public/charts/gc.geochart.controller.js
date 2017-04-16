(function () {
    "use strict";

    angular.module('public')
    .controller('GCGeoChartController', GCGeoChartController)
    .directive('gcGeochart', GCGeochartDirective);

    function GCGeochartDirective() {
      var ddo = {
          controller: GCGeoChartController,
          controllerAs: 'ctrl',
          template: '<div id="regions_div" class="widget-object"></div>'
          };

      return ddo;
    }


    GCGeoChartController.$inject = ['$scope', '$sce'];
    function GCGeoChartController($scope, $sce) {
        console.log('GCGeoChartController instantiated');
        var ctrl = this;

      /* ---------- Google Chart ----------*/
      google.charts.load('current', {'packages':['geochart'], 'callback': drawChart});

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Mexico', 1000],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
        ]);

        var options = {
           title: "Popularity by Country"
        };
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);

        function resizeChart () {
            console.log('resizeChart - geo');
            chart.draw(data, options);
        }
        if (document.getElementById('regions_div').addEventListener) {
            document.getElementById('regions_div').addEventListener('resize', resizeChart);
        }
        else if (document.getElementById('regions_div').attachEvent) {
            document.getElementById('regions_div').attachEvent('onresize', resizeChart);
        }
        else {
            window.resize = resizeChart;
        }

      }

  }  /* GCGeoChartController() */


})();
