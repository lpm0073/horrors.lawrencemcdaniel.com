(function () {
    "use strict";

    angular.module('public')
    .controller('GCWordtreeController', GCWordtreeController)
    .directive('gcWordtree', GCWordtreeDirective);

    function GCWordtreeDirective() {
      var ddo = {
          controller: GCWordtreeController,
          controllerAs: 'ctrl',
          template: '<div id="wordtree_div" class="widget-object"></div>'
          };

      return ddo;
    }


    GCWordtreeController.$inject = ['$scope', '$sce'];
    function GCWordtreeController($scope, $sce) {
        console.log('GCWordtreeController instantiated');
        var ctrl = this;

     /* ---------- Google Chart ----------*/
     google.charts.load('current', {'packages':['wordtree'], 'callback': drawChart});

     function drawChart() {
       var data = google.visualization.arrayToDataTable(
         [ ['Phrases'],
           ['cats are better than dogs'],
           ['cats eat kibble'],
           ['cats are better than hamsters'],
           ['cats are awesome'],
           ['cats are people too'],
           ['cats eat mice'],
           ['cats meowing'],
           ['cats in the cradle'],
           ['cats eat mice'],
           ['cats in the cradle lyrics'],
           ['cats eat kibble'],
           ['cats for adoption'],
           ['cats are family'],
           ['cats eat mice'],
           ['cats are better than kittens'],
           ['cats are evil'],
           ['cats are weird'],
           ['cats eat mice'],
         ]
       );

       var options = {
         wordtree: {
           format: 'implicit',
           word: 'cats'
         }
       };

       var chart = new google.visualization.WordTree(document.getElementById('wordtree_div'));
       chart.draw(data, options);

       function resizeChart () {
           console.log('resizeChart - wordtree');
           chart.draw(data, options);
       }
       if (document.getElementById('wordtree_div').addEventListener) {
           document.getElementById('wordtree_div').addEventListener('resize', resizeChart);
       }
       else if (document.getElementById('wordtree_div').attachEvent) {
           document.getElementById('wordtree_div').attachEvent('onresize', resizeChart);
       }
       else {
           window.resize = resizeChart;
       }

     }



 }

})();
