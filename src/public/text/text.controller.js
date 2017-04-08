(function () {
    "use strict";

    angular.module('public')
    .controller('TextController', TextController)
    .directive('txtNemoform', txtNemoform)
    .directive('txtWordcloud', txtWordcloud)

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

    txtWordcloud.$inject = [];
    function txtWordcloud() {
      return {
          templateUrl: 'src/public/text/wordcloud/txt.wordcloud.directive.html'
      };
    }
})();
