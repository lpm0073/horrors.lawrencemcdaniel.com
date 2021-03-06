/* D3 service
 * See: http://www.ng-newsletter.com/posts/d3-on-angular.html
 */
(function() {
"use strict";

angular.module('d3', [])
  .factory('d3Factory', d3Factory)
  .factory('d3V4Factory', d3V4Factory)
  .factory('d3CloudLayoutFactory', d3CloudLayoutFactory);

  d3V4Factory.$inject = ['$document', '$q', '$rootScope'];
  function d3V4Factory($document, $q, $rootScope) {
    console.log('d3V4Factory instantiated');

    var d = $q.defer();

    function onScriptLoad() {
      // Load client in the browser
      $rootScope.$apply(function() { d.resolve(window.d3); });
    }
    var scriptTag = $document[0].createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = false;
    scriptTag.src = 'https://d3js.org/d3.v4.min.js';
    scriptTag.onreadystatechange = function () {
      if (this.readyState == 'complete') onScriptLoad();
    }
    scriptTag.onload = onScriptLoad;

    var s = $document[0].getElementsByTagName('body')[0];
    s.appendChild(scriptTag);


    return {
      d3: function() { return d.promise; }
    };
  }

  d3Factory.$inject = ['$document', '$q', '$rootScope'];
  function d3Factory($document, $q, $rootScope) {
    console.log('d3Factory instantiated');

    var d = $q.defer();


    function onScriptLoad() {
      // Load client in the browser
      $rootScope.$apply(function() { d.resolve(window.d3); });
    }
    // Create a script tag with d3 as the source
    // and call our onScriptLoad callback when it
    // has been loaded
    var scriptTag = $document[0].createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = false;
    scriptTag.src = 'https://d3js.org/d3.v3.min.js';
    scriptTag.onreadystatechange = function () {
      if (this.readyState == 'complete') onScriptLoad();
    }
    scriptTag.onload = onScriptLoad;

    var s = $document[0].getElementsByTagName('body')[0];
    s.appendChild(scriptTag);


    return {
      d3: function() { return d.promise; }
    };
}


d3CloudLayoutFactory.$inject = ['$document', '$q', '$rootScope'];
function d3CloudLayoutFactory($document, $q, $rootScope) {
  console.log('d3CloudLayoutFactory instantiated');

  var d = $q.defer();


  function onScriptLoad() {
    // Load client in the browser
    $rootScope.$apply(function() { d.resolve(window.d3); });
  }
  // Create a script tag with d3 as the source
  // and call our onScriptLoad callback when it
  // has been loaded
  var scriptTag = $document[0].createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = false;
  scriptTag.src = 'src/public/text/wordcloud/d3.layout.cloud.js';
  scriptTag.onreadystatechange = function () {
    if (this.readyState == 'complete') onScriptLoad();
  }
  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);


  return {
    d3: function() { return d.promise; }
  };
}

})();
