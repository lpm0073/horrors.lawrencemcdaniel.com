(function () {
    "use strict";

    angular.module('common')
    .controller('JasonDaviesController', JasonDaviesController)
    .directive('whoisJasondavies', JasonDaviesDirective);

    function JasonDaviesDirective() {
      console.log('JasonDaviesDirective instantiated');
      var ddo = {
          controller: JasonDaviesController,
          controllerAs: 'ctrl',
          templateUrl: 'src/public/text/wordcloud/txt.jasondavies.directive.html'
      };

      return ddo;
    }

    JasonDaviesController.$inject = [];
    function JasonDaviesController() {
        console.log('JasonDaviesController instantiated');
        var ctrl = this;


    }



})();
