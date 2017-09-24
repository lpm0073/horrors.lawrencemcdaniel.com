/* D3 service
 * See: http://www.ng-newsletter.com/posts/d3-on-angular.html
 */
(function() {
"use strict";

angular.module('d3', [])
  .factory('d3Factory', d3Factory);

  d3Factory.$inject = ['$document', '$q', '$rootScope'];
  function d3Factory($document, $q, $rootScope) {
    console.log('d3Factory instantiated');

    var d = $q.defer();

    // check to see if the D3 might already be loaded
    var d3lib = $document[0].getElementById("d3lib")
    if (!d3lib) {
      console.log('d3Factory - loading D3 lib');

      function onScriptLoad() {
        // Load client in the browser
        $rootScope.$apply(function() { d.resolve(window.d3); });
      }
      // Create a script tag with d3 as the source
      // and call our onScriptLoad callback when it
      // has been loaded
      var scriptTag = $document[0].createElement('script');
      scriptTag.id = "d3lib";
      scriptTag.type = 'text/javascript';
      scriptTag.async = false;
      scriptTag.src = 'https://d3js.org/d3.v3.min.js';
      scriptTag.onreadystatechange = function () {
        if (this.readyState == 'complete') onScriptLoad();
      }
      scriptTag.onload = onScriptLoad;

      var s = $document[0].getElementsByTagName('body')[0];
      s.appendChild(scriptTag);

    }
    else {
      console.log('d3Factory - D3 lib already loaded');
    }

    return {
      d3: function() { return d.promise; }
    };
}

})();
