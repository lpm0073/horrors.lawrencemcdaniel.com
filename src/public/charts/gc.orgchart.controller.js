(function () {
    "use strict";

    angular.module('public')
    .controller('GCOrgchartController', GCOrgchartController)
    .directive('gcOrgchart', GCOrgchartDirective);

    function GCOrgchartDirective() {
      var ddo = {
          controller: GCOrgchartController,
          controllerAs: 'ctrl',
          template: '<div id="orgchart_div" class="widget-object"></div>'
          };

      return ddo;
    }


    GCOrgchartController.$inject = ['$scope', '$sce'];
    function GCOrgchartController($scope, $sce) {
        console.log('GCOrgchartController instantiated');
        var ctrl = this;

      /* ---------- Google Chart ----------*/
      google.charts.load('current', {'packages':['orgchart'], 'callback': drawChart});

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
          [{v:'Mike', f:'Mike<div style="color:red; font-style:italic">President</div>'},
           '', 'The President'],
          [{v:'Jim', f:'Jim<div style="color:red; font-style:italic">Vice President</div>'},
           'Mike', 'VP'],
          ['Alice', 'Mike', ''],
          ['Bob', 'Jim', 'Bob Sponge'],
          ['Carol', 'Bob', '']
        ]);

        var options = {
          title: "Lawrence's Empire",
          allowHtml:true
        };
        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('orgchart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, options);

        function resizeChart () {
            console.log('resizeChart - org');
            chart.draw(data, options);
        }
        if (document.getElementById('orgchart_div').addEventListener) {
            document.getElementById('orgchart_div').addEventListener('resize', resizeChart);
        }
        else if (document.getElementById('orgchart_div').attachEvent) {
            document.getElementById('orgchart_div').attachEvent('onresize', resizeChart);
        }
        else {
            window.resize = resizeChart;
        }

      }


  }  /* GCOrgchartController() */


})();
