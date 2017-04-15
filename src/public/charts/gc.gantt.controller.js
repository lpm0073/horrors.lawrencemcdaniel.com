(function () {
    "use strict";

    angular.module('public')
    .controller('GCGanttChartController', GCGanttChartController)
    .directive('gcGantt', GCGanttchartDirective);

    function GCGanttchartDirective() {
      var ddo = {
          controller: GCGanttChartController,
          controllerAs: 'ctrl',
          template: '<div id="gantt_div" class="widget-object"></div>'
          };

      return ddo;
    }


    GCGanttChartController.$inject = ['$scope', '$sce'];
    function GCGanttChartController($scope, $sce) {
        console.log('GCGanttChartController instantiated');
        var ctrl = this;

      /* ---------- Google Chart ----------*/
      google.charts.load('current', {'packages':['gantt'], 'callback': drawChart});

        function daysToMilliseconds(days) {
          return days * 24 * 60 * 60 * 1000;
        }

        function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Task ID');
        data.addColumn('string', 'Task Name');
        data.addColumn('string', 'Resource');
        data.addColumn('date', 'Start Date');
        data.addColumn('date', 'End Date');
        data.addColumn('number', 'Duration');
        data.addColumn('number', 'Percent Complete');
        data.addColumn('string', 'Dependencies');

        data.addRows([
          ['Research', 'Find sources', null,
           new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
          ['Write', 'Write paper', 'write',
           null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
          ['Cite', 'Create bibliography', 'write',
           null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
          ['Complete', 'Hand in paper', 'complete',
           null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
          ['Outline', 'Outline paper', 'write',
           null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research']
        ]);

          var options = {
            gantt: {
              criticalPathEnabled: true,
              criticalPathStyle: {
                stroke: '#e64a19',
                strokeWidth: 5
              }
            }
          };

          var chart = new google.visualization.Gantt(document.getElementById('gantt_div'));

          chart.draw(data, options);

          function resizeChart () {
              console.log('resizeChart - gantt');
              chart.draw(data, options);
          }
          if (document.getElementById('gantt_div').addEventListener) {
              document.getElementById('gantt_div').addEventListener('resize', resizeChart);
          }
          else if (document.getElementById('gantt_div').attachEvent) {
              document.getElementById('gantt_div').attachEvent('onresize', resizeChart);
          }
          else {
              window.resize = resizeChart;
          }

        }



  }  /* GCGanttChartController() */


})();
