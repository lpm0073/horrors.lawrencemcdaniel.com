(function () {
    "use strict";

    angular.module('public')
    .controller('GCBarChartController', GCBarChartController)
    .directive('gcBarchart', GCBarchartDirective);

    function GCBarchartDirective() {
      var ddo = {
          controller: GCBarChartController,
          controllerAs: 'ctrl',
          template: '<div id="barchart_div" class="widget-object"></div>'
          };

      return ddo;
    }


    GCBarChartController.$inject = ['$scope', '$sce'];
    function GCBarChartController($scope, $sce) {
        console.log('GCBarChartController instantiated');
        var ctrl = this;

      /* ---------- Google Chart ----------*/
      google.charts.load('current', {'packages':['corechart'], 'callback': drawChart});

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ["Element", "Density", { role: "style" } ],
          ["Copper", 8.94, "#b87333"],
          ["Silver", 10.49, "silver"],
          ["Gold", 19.30, "gold"],
          ["Platinum", 21.45, "color: #e5e4e2"]
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                         { calc: "stringify",
                           sourceColumn: 1,
                           type: "string",
                           role: "annotation" },
                         2]);

        var options = {
          title: "Density of Precious Metals, in g/cm^3",
          bar: {groupWidth: "95%"},
          legend: { position: "none" },
        };
        var chart = new google.visualization.BarChart(document.getElementById("barchart_div"));
        chart.draw(view, options);

        function resizeChart () {
            chart.draw(data, options);
        }
        if (document.getElementById("barchart_div").addEventListener) {
            document.getElementById("barchart_div").addEventListener('resize', resizeChart);
        }
        else if (document.getElementById("barchart_div").attachEvent) {
            document.getElementById("barchart_div").attachEvent('onresize', resizeChart);
        }
        else {
            window.resize = resizeChart;
        }

    }

  }  /* GCBarChartController() */


})();
