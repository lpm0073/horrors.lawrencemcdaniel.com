(function () {
    "use strict";

    angular.module('public')
    .controller('TextController', TextController)
    .directive('txtNemoform', txtNemoform)

    TextController.$inject = [];
    function TextController() {
        console.log('TextController instantiated');
        var ctrl = this;

  }  /* TextController() */

  /* ---------- directives ----------*/
    txtNemoform.$inject = [];
    function txtNemoform() {
      return {
          templateUrl: 'src/public/text/nemoform/txt.nemoform.directive.html'
      };
    }

})();
