(function () {
    "use strict";

    angular.module('public')
    .controller('GCGeoIntensityController', GCGeoIntensityController)
    .directive('gcGeointensity', GCGeoIntensityDirective);

    function GCGeoIntensityDirective() {
      var ddo = {
          controller: GCGeoIntensityController,
          controllerAs: 'ctrl',
          template: '<div id="geointensity_div" class="widget-object"></div>'
          };

      return ddo;
    }


    GCGeoIntensityController.$inject = ['$scope', '$sce'];
    function GCGeoIntensityController($scope, $sce) {
        console.log('GCGeoIntensityController instantiated');
        var ctrl = this;

      /* ---------- Google Chart ----------*/
      google.charts.load('current', {'packages':['intensitymap'], 'callback': drawChart});

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Population (mil)', 'Area (km2)'],
          ['CN',            1324,           9640821],
          ['IN',            1133,           3287263],
          ['US',            304,            9629091],
          ['ID',            232,            1904569],
          ['BR',            187,            8514877]
        ]);

        var options = {
          title: "Geointensity Chart Sample"
        };

        var chart = new google.visualization.IntensityMap(document.getElementById('geointensity_div'));

        chart.draw(data, options);

        function resizeChart () {
            console.log('resizeChart - geointensity');
            chart.draw(data, options);
        }
        if (document.getElementById('geointensity_div').addEventListener) {
            document.getElementById('geointensity_div').addEventListener('resize', resizeChart);
        }
        else if (document.getElementById('geointensity_div').attachEvent) {
            document.getElementById('geointensity_div').attachEvent('onresize', resizeChart);
        }
        else {
            window.resize = resizeChart;
        }

      }

  }  /* GCGeoIntensityController() */


})();
