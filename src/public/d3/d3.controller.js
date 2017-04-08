/*
 *  read http://stackoverflow.com/questions/16156445/multiple-versions-of-a-script-on-the-same-page-d3-js
 *  for background on how to hand NoConflict with the various D3 library versions.
 *
 */
(function () {
    "use strict";

    angular.module('public')
    .controller('D3Controller', D3Controller)
    .directive('d3Gears', d3Gears)
    .directive('d3CollisionDetection', d3CollisionDetection)
    .directive('d3RotatingVoronoi', d3RotatingVoronoi)
    .directive('d3Particles', d3Particles)

    D3Controller.$inject = [];
    function D3Controller() {
        var ctrl = this;
        ctrl.isNew = true;

        console.log('D3Controller instantiated');


    }

    d3Gears.$inject = [];
    function d3Gears() {
      return {
          templateUrl: 'src/public/d3/d3.gears.directive.html'
      };
    }

    d3CollisionDetection.$inject = [];
    function d3CollisionDetection() {
      return {
          templateUrl: 'src/public/d3/d3.collisiondetection.directive.html'
      };
    }

    d3RotatingVoronoi.$inject = [];
    function d3RotatingVoronoi() {
      return {
          templateUrl: 'src/public/d3/d3.rotatingvoronoi.directive.html'
      };
    }

    d3Particles.$inject = [];
    function d3Particles() {
      return {
          templateUrl: 'src/public/d3/d3.particles.directive.html'
      };
    }

})();
