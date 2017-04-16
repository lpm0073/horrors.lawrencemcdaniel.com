(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.angularjs', {
      url: '/angularjs',
      templateUrl: 'src/public/angularjs/angularjs.html',
      controller: 'AngularJSController',
      controllerAs: 'angularjsCtrl'
    })
    .state('public.cognition', {
      url: '/cognition',
      templateUrl: 'src/public/cognition/cognition.html',
      controller: 'CognitionController',
      controllerAs: 'cognitionCtrl'
    })
    .state('public.charts', {
      url: '/charts',
      templateUrl: 'src/public/charts/charts.html',
      controller: 'ChartsController',
      controllerAs: 'chartsCtrl'
    })
    .state('public.areachart', {
      url: '/areachart',
      templateUrl: 'src/public/charts/gc.areachart.html'
    })
    .state('public.barchart', {
      url: '/barchart',
      templateUrl: 'src/public/charts/gc.barchart.html'
    })
    .state('public.bubbblechart', {
      url: '/bubbblechart',
      templateUrl: 'src/public/charts/gc.bubble.html'
    })
    .state('public.candlestick', {
      url: '/candlestick',
      templateUrl: 'src/public/charts/gc.candlestick.html'
    })
    .state('public.combochart', {
      url: '/combochart',
      templateUrl: 'src/public/charts/gc.combochart.html'
    })
    .state('public.gantt', {
      url: '/gantt',
      templateUrl: 'src/public/charts/gc.gantt.html'
    })
    .state('public.geochart', {
      url: '/geochart',
      templateUrl: 'src/public/charts/gc.geochart.html'
    })
    .state('public.geointensity', {
      url: '/geointensity',
      templateUrl: 'src/public/charts/gc.geointensity.html'
    })
    .state('public.guages', {
      url: '/guages',
      templateUrl: 'src/public/charts/gc.guages.html'
    })
    .state('public.orgchart', {
      url: '/orgchart',
      templateUrl: 'src/public/charts/gc.orgchart.html'
    })
    .state('public.piechart', {
      url: '/piechart',
      templateUrl: 'src/public/charts/gc.piechart.html'
    })
    .state('public.polynomial', {
      url: '/polynomial',
      templateUrl: 'src/public/charts/gc.polynomial.html'
    })
    .state('public.sankey', {
      url: '/sankey',
      templateUrl: 'src/public/charts/gc.sankey.html'
    })
    .state('public.scatter', {
      url: '/scatter',
      templateUrl: 'src/public/charts/gc.scatter.html'
    })
    .state('public.treemap', {
      url: '/treemap',
      templateUrl: 'src/public/charts/gc.treemap.html'
    })
    .state('public.wordtree', {
      url: '/wordtree',
      templateUrl: 'src/public/charts/gc.wordtree.html'
    })
    .state('public.nemoform', {
      url: '/nemoform',
      templateUrl: 'src/public/text/nemoform/txt.nemoform.html'
    })
    .state('public.wordcloud', {
      url: '/wordcloud',
      templateUrl: 'src/public/text/wordcloud/txt.wordcloud.html'
    })
    .state('public.d3', {
      url: '/d3',
      templateUrl: 'src/public/d3/d3.html',
      controller: 'D3Controller',
      controllerAs: 'd3Ctrl'
    });
}
})();
