(function () {
    "use strict";

    angular.module('public')
    .controller('GCPolynomialController', GCPolynomialController)
    .directive('gcPolynomial', GCPolynomialDirective);

    function GCPolynomialDirective() {
      var ddo = {
          controller: GCPolynomialController,
          controllerAs: 'ctrl',
          template: '<div id="polynomial2_div" class="widget-object"></div>'
          };

      return ddo;
    }


    GCPolynomialController.$inject = ['$scope', '$sce'];
    function GCPolynomialController($scope, $sce) {
        console.log('GCPolynomialController instantiated');
        var ctrl = this;

     /* ---------- Google Chart ----------*/
     google.charts.load('current', {'packages':['corechart'], 'callback': drawChart});

     function drawChart() {
       var data = google.visualization.arrayToDataTable([
         ['Age', 'Weight'],
         [ 8,      12],
         [ 4,      5.5],
         [ 11,     14],
         [ 4,      5],
         [ 3,      3.5],
         [ 6.5,    7]
       ]);

       var options = {
         title: 'Age vs. Weight comparison',
         legend: 'none',
         crosshair: { trigger: 'both', orientation: 'both' },
         trendlines: {
           0: {
             type: 'polynomial',
             degree: 3,
             visibleInLegend: true,
           }
         }
       };

       var chart = new google.visualization.ScatterChart(document.getElementById('polynomial2_div'));
       chart.draw(data, options);

       function resizeChart () {
          console.log('resizeChart - polynomial');
           chart.draw(data, options);
       }
       if (document.getElementById('polynomial2_div').addEventListener) {
           document.getElementById('polynomial2_div').addEventListener('resize', resizeChart);
       }
       else if (document.getElementById('polynomial2_div').attachEvent) {
           document.getElementById('polynomial2_div').attachEvent('onresize', resizeChart);
       }
       else {
           window.resize = resizeChart;
       }

     }



  }  /* GCPolynomialController() */


})();
