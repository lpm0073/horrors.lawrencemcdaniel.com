(function () {
    "use strict";

    angular.module('public')
    .controller('GCPiechartController', GCPiechartController)
    .directive('gcPiechart', GCPiechartDirective);

    function GCPiechartDirective() {
      var ddo = {
          controller: GCPiechartController,
          controllerAs: 'ctrl',
          template: '<div id="piechart" class="widget-object"></div>'
          };

      return ddo;
    }


    GCPiechartController.$inject = ['$scope', '$sce'];
    function GCPiechartController($scope, $sce) {
        console.log('GCPiechartController instantiated');
        var ctrl = this;

      /* ---------- Google Chart ----------*/
      google.charts.load('current', {'packages':['corechart'], 'callback': drawChart});

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);

        function resizeChart () {
            console.log('resizeChart - pie');
            chart.draw(data, options);
        }
        if (document.getElementById('piechart').addEventListener) {
            document.getElementById('piechart').addEventListener('resize', resizeChart);
        }
        else if (document.getElementById('piechart').attachEvent) {
            document.getElementById('piechart').attachEvent('onresize', resizeChart);
        }
        else {
            window.resize = resizeChart;
        }

      }


  }  /* GCPiechartController() */


})();
