(function () {
    "use strict";

    angular.module('common')
    .service('MSCognitiveService', MSCognitiveService);

    MSCognitiveService.$inject = ['$http'];
    function MSCognitiveService($http) {
        console.log('MSCognitiveService instantiated');
        var service = this;

        /*
        Microsoft Bing AI spell check service

          https://dev.cognitive.microsoft.com/docs/services/56e73033cf5ff80c2008c679/operations/57855119bca1df1c647bc358

          request header:
          Ocp-Apim-Subscription-Key -
              Key 1:dadb54f29d5e42b0b58387c52105e1ef
              Key 2:489c2b3374924ad5afc5c98eb878c6b1
              * provide either key (but not both)
          documentation on setting up authorization URL: https://www.microsoft.com/cognitive-services/en-us/Computer-Vision-API/documentation/vision-api-how-to-topics/HowToCallVisionAPI

          Spellcheck endpoint: https://api.cognitive.microsoft.com/bing/v5.0/spellcheck
          params: {
            text: val,
            mode: 'proof',
            preContextText: 'last name: '
          }
        --------------------------------------------------------------------------------------------*/
        service.getProofedText = function (val, context) {

          console.log('MSCognitiveService.getProofedText()');
          console.log('val: ', val);
          console.log('conntext: ', context);

          var response = $http({
              method: 'GET',
              url: 'https://api.cognitive.microsoft.com/bing/v5.0/spellcheck',
              headers: {
                'Ocp-Apim-Subscription-Key': 'dadb54f29d5e42b0b58387c52105e1ef'
              },
             params: {
               'text': val,
               'mode': 'proof',
               'preContextText': ''
             }
          });

          return response;
        };


    }
})();
