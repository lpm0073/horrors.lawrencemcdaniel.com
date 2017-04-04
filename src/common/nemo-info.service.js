(function () {
    "use strict";

    angular.module('common')
    .service('NemoInfoService', NemoInfoService);

    NemoInfoService.$inject = [];
    function NemoInfoService() {
        var service = this;
        service.userInfo = {};

        service.setNemoinfo = function(userInfo) {
            service.userInfo = userInfo;
            console.log('NemoInfoService.registerUser() - userInfo:', service.userInfo);
        };

        service.getNemoinfo = function () {
            return service.userInfo;
        };
    }
})();
