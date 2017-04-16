(function () {
    "use strict";

    angular.module('public')
    .controller('GCSankeyController', GCSankeyController)
    .directive('gcSankey', GCSankeyDirective);

    function GCSankeyDirective() {
      var ddo = {
          controller: GCSankeyController,
          controllerAs: 'ctrl',
          template: '<div id="sankey_multiple" class="widget-object"></div>'
          };

      return ddo;
    }


    GCSankeyController.$inject = ['$scope', '$sce'];
    function GCSankeyController($scope, $sce) {
        console.log('GCSankeyController instantiated');
        var ctrl = this;

     /* ---------- Google Chart ----------*/
     google.charts.load('current', {'packages':['sankey'], 'callback': drawChart});

    function drawChart() {
     var data = new google.visualization.DataTable();
     data.addColumn('string', 'From');
     data.addColumn('string', 'To');
     data.addColumn('number', 'Weight');
     data.addRows([
        [ 'Brazil', 'Portugal', 5 ],
        [ 'Brazil', 'France', 1 ],
        [ 'Brazil', 'Spain', 1 ],
        [ 'Brazil', 'England', 1 ],
        [ 'Canada', 'Portugal', 1 ],
        [ 'Canada', 'France', 5 ],
        [ 'Canada', 'England', 1 ],
        [ 'Mexico', 'Portugal', 1 ],
        [ 'Mexico', 'France', 1 ],
        [ 'Mexico', 'Spain', 5 ],
        [ 'Mexico', 'England', 1 ],
        [ 'USA', 'Portugal', 1 ],
        [ 'USA', 'France', 1 ],
        [ 'USA', 'Spain', 1 ],
        [ 'USA', 'England', 5 ],
        [ 'Portugal', 'Angola', 2 ],
        [ 'Portugal', 'Senegal', 1 ],
        [ 'Portugal', 'Morocco', 1 ],
        [ 'Portugal', 'South Africa', 3 ],
        [ 'France', 'Angola', 1 ],
        [ 'France', 'Senegal', 3 ],
        [ 'France', 'Mali', 3 ],
        [ 'France', 'Morocco', 3 ],
        [ 'France', 'South Africa', 1 ],
        [ 'Spain', 'Senegal', 1 ],
        [ 'Spain', 'Morocco', 3 ],
        [ 'Spain', 'South Africa', 1 ],
        [ 'England', 'Angola', 1 ],
        [ 'England', 'Senegal', 1 ],
        [ 'England', 'Morocco', 2 ],
        [ 'England', 'South Africa', 7 ],
        [ 'South Africa', 'China', 5 ],
        [ 'South Africa', 'India', 1 ],
        [ 'South Africa', 'Japan', 3 ],
        [ 'Angola', 'China', 5 ],
        [ 'Angola', 'India', 1 ],
        [ 'Angola', 'Japan', 3 ],
        [ 'Senegal', 'China', 5 ],
        [ 'Senegal', 'India', 1 ],
        [ 'Senegal', 'Japan', 3 ],
        [ 'Mali', 'China', 5 ],
        [ 'Mali', 'India', 1 ],
        [ 'Mali', 'Japan', 3 ],
        [ 'Morocco', 'China', 5 ],
        [ 'Morocco', 'India', 1 ],
        [ 'Morocco', 'Japan', 3 ]
     ]);

     // Set chart options
     var options = {
     };

     // Instantiate and draw our chart, passing in some options.
     var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
     chart.draw(data, options);

     function resizeChart () {
         console.log('resizeChart - sankey');
         chart.draw(data, options);
     }
     if (document.getElementById('sankey_multiple').addEventListener) {
         document.getElementById('sankey_multiple').addEventListener('resize', resizeChart);
     }
     else if (document.getElementById('sankey_multiple').attachEvent) {
         document.getElementById('sankey_multiple').attachEvent('onresize', resizeChart);
     }
     else {
         window.resize = resizeChart;
     }

    }

  }  /* GCSankeyController() */


})();