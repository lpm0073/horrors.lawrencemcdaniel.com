(function () {
    "use strict";

    angular.module('public')
    .controller('GCComboChartController', GCComboChartController)
    .directive('gcCombochart', GCCombochartDirective);

    function GCCombochartDirective() {
      var ddo = {
          controller: GCComboChartController,
          controllerAs: 'ctrl',
          template: '<div id="combochart_div" class="widget-object"></div>'
          };

      return ddo;
    }


    GCComboChartController.$inject = ['$scope', '$sce'];
    function GCComboChartController($scope, $sce) {
        console.log('GCComboChartController instantiated');
        var ctrl = this;

      /* ---------- Google Chart ----------*/
      google.charts.load('current', {'packages':['corechart'], 'callback': drawChart});

      function drawChart() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
         ['2004/05',  165,      938,         522,             998,           450,      614.6],
         ['2005/06',  135,      1120,        599,             1268,          288,      682],
         ['2006/07',  157,      1167,        587,             807,           397,      623],
         ['2007/08',  139,      1110,        615,             968,           215,      609.4],
         ['2008/09',  136,      691,         629,             1026,          366,      569.6]
      ]);

    var options = {
      title : 'Monthly Coffee Production by Country',
      vAxis: {title: 'Cups'},
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('combochart_div'));
    chart.draw(data, options);

    function resizeChart () {
        chart.draw(data, options);
    }
    if (document.getElementById('combochart_div').addEventListener) {
        document.getElementById('combochart_div').addEventListener('resize', resizeChart);
    }
    else if (document.getElementById('combochart_div').attachEvent) {
        document.getElementById('combochart_div').attachEvent('onresize', resizeChart);
    }
    else {
        window.resize = resizeChart;
    }

  }


  }  /* GCComboChartController() */


})();
