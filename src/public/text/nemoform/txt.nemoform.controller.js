(function () {
    "use strict";

    angular.module('public')
    .controller('NemoformController', NemoformController);

    NemoformController.$inject = ['NemoService', '$scope', '$http'];
    function NemoformController(NemoService, $scope, $http) {
      console.log('NemoformController instantiated');
        var ctrl = this;
        ctrl.userInfo = {};
        ctrl.saved = false;
        ctrl.message = '';
        ctrl.validShortCode = false;
        ctrl.itemSearched = false;


        ctrl.setNemoinfo = function() {
            console.log('NemoformController.setNemoinfo()');
            NemoService.setNemoinfo(ctrl.userInfo);

            ctrl.saved = true;
            ctrl.message = 'Your information has been saved!';
        };


        /*-----------------------BOOTSTRAP TYPEAHEAD (Location) ------------------------------*/

          $scope.getLocation = function(val) {
            return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
              params: {
                address: val,
                sensor: false
              }
            }).then(function(response){
              return response.data.results.map(function(item){
                return item.formatted_address;
              });
            });
          };

          /*-----------------------END BOOTSTRAP TYPEAHEAD (Location) ------------------------------*/

          /*-----------------------BOOTSTRAP TYPEAHEAD (Last Name) ------------------------------*/
          /*
          Microsoft Bing AI spell check service

            https://dev.cognitive.microsoft.com/docs/services/56e73033cf5ff80c2008c679/operations/57855119bca1df1c647bc358

            request header:
            Ocp-Apim-Subscription-Key -
                Key 1:1e15390f589d42c1ba463633acecf226
                Key 2:97ff210ab2984c7891145d8645f28fea
                * provide either key (but not both)
            documentation on setting up authorization URL: https://www.microsoft.com/cognitive-services/en-us/Computer-Vision-API/documentation/vision-api-how-to-topics/HowToCallVisionAPI

          --------------------------------------------------------------------------------------------*/
          /*
          $scope.getCognitivename = function(val) {
            return $http.get('https://api.cognitive.microsoft.com/bing/v5.0/spellcheck', {
              params: {
                text: val,
                mode: 'proof',
                preContextText: 'last name: '
              }
            }).then(function(response){
              console.log('response:', response );
              });
            });
          };
          */

            /*-----------------------BOOTSTRAP TYPEAHEAD (Last Name) ------------------------------*/

    }
})();
