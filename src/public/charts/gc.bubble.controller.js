(function () {
    "use strict";

    angular.module('public')
    .controller('GCBubbleChartController', GCBubbleChartController)
    .directive('gcBubble', GCBubblechartDirective);

    function GCBubblechartDirective() {
      var ddo = {
          controller: GCBubbleChartController,
          controllerAs: 'ctrl',
          template: '<div id="noAura_div" class="widget-object"></div>'
          };

      return ddo;
    }


    GCBubbleChartController.$inject = ['$scope', '$sce'];
    function GCBubbleChartController($scope, $sce) {
        console.log('GCBubbleChartController instantiated');
        var ctrl = this;

      /* ---------- Google Chart ----------*/
      google.charts.load('current', {'packages':['corechart'], 'callback': drawChart});

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
          ['CAN',    80.66,              1.67,      'North America',  33739900],
          ['DEU',    79.84,              1.36,      'Europe',         81902307],
          ['DNK',    78.6,               1.84,      'Europe',         5523095],
          ['EGY',    72.73,              2.78,      'Middle East',    79716203],
          ['GBR',    80.05,              2,         'Europe',         61801570],
          ['IRN',    72.49,              1.7,       'Middle East',    73137148],
          ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
          ['ISR',    81.55,              2.96,      'Middle East',    7485600],
          ['RUS',    68.6,               1.54,      'Europe',         141850000],
          ['USA',    78.09,              2.05,      'North America',  307007000]
        ]);

        var options = {
          title: 'Correlation between life expectancy, fertility rate ' +
                 'and population of some world countries (2010)',
          hAxis: {title: 'Life Expectancy'},
          vAxis: {title: 'Fertility Rate'},
          bubble: {
            textStyle: {
              auraColor: 'none',
            }
          }
        };

        var chart = new google.visualization.BubbleChart(document.getElementById('noAura_div'));

        chart.draw(data, options);

        function resizeChart () {
            chart.draw(data, options);
        }
        if (document.getElementById('noAura_div').addEventListener) {
            document.getElementById('noAura_div').addEventListener('resize', resizeChart);
        }
        else if (document.getElementById('noAura_div').attachEvent) {
            document.getElementById('noAura_div').attachEvent('onresize', resizeChart);
        }
        else {
            window.resize = resizeChart;
        }

      }

  }  /* GCBubbleChartController() */


})();
