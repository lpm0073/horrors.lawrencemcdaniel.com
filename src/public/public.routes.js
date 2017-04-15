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
    .state('public.candlestick', {
      url: '/candlestick',
      templateUrl: 'src/public/charts/gc.candlestick.html'
    })
    .state('public.text', {
      url: '/text',
      templateUrl: 'src/public/text/text.html',
      controller: 'TextController',
      controllerAs: 'textCtrl'
    })
    .state('public.d3', {
      url: '/d3',
      templateUrl: 'src/public/d3/d3.html',
      controller: 'D3Controller',
      controllerAs: 'd3Ctrl'
    });
}
})();
