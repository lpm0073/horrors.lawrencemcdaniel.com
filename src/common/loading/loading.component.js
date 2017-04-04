/*
Spinner documentation : https://github.com/SamHerbert/SVG-Loaders

<img src="svg-loaders/puff.svg" />
An icon's color can be manipulated by changing the fill attribute in the SVG file.

<svg fill="#fff" width="140" height="64" viewBox="0 0 140 64" xmlns="http://www.w3.org/2000/svg">

Note: Not all browsers support SVG, or more specifically, animated SVGs. Check (http://caniuse.com/#feat=svg-smil) to make sure you're good to go. If not, you may want to implement a fallback.

*/

(function() {
"use strict";

angular.module('common')
.component('loading', {
  template: '<img src="images/rings.svg" ng-if="$ctrl.show">',
  controller: LoadingController
});


LoadingController.$inject = ['$rootScope'];
function LoadingController ($rootScope) {
  var $ctrl = this;
  var listener;

  $ctrl.$onInit = function() {
    $ctrl.show = false;
    listener = $rootScope.$on('spinner:activate', onSpinnerActivate);
  };

  $ctrl.$onDestroy = function() {
    listener();
  };

  function onSpinnerActivate(event, data) {
    $ctrl.show = data.on;
  }
}

})();
