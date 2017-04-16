(function () {
    "use strict";

    angular.module('public')
    .controller('GCGuagesController', GCGuagesController)
    .directive('gcGuages', GCGuagesDirective);

    function GCGuagesDirective() {
      var ddo = {
          controller: GCGuagesController,
          controllerAs: 'ctrl',
          templateUrl: 'src/public/charts/gc.guages.directive.html'
          };

      return ddo;
    }


    GCGuagesController.$inject = ['$scope', '$sce'];
    function GCGuagesController($scope, $sce) {
        console.log('GCGuagesController instantiated');
        var ctrl = this;

      /* ---------- Google Chart ----------*/
      google.charts.load('current', {'packages':['gauge'], 'callback': drawChart});

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Motivation', 80],
          ['Ambition', 55],
          ['Thrill', 68]
        ]);

        var options = {
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('guages_div'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 13000);
        setInterval(function() {
          data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 5000);
        setInterval(function() {
          data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(data, options);
        }, 26000);

        function resizeChart () {
            console.log('resizeChart - guages');
            chart.draw(data, options);
        }
        if (document.getElementById('guages_div').addEventListener) {
            document.getElementById('guages_div').addEventListener('resize', resizeChart);
        }
        else if (document.getElementById('guages_div').attachEvent) {
            document.getElementById('guages_div').attachEvent('onresize', resizeChart);
        }
        else {
            window.resize = resizeChart;
        }

      }

  }  /* GCGuagesController() */


})();
