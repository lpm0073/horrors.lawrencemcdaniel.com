(function () {
    "use strict";

    angular.module('common')
    .service('NemoService', NemoService);

    NemoService.$inject = [];
    function NemoService() {
        console.log('NemoService instantiated');
        var service = this;
        service.userInfo = {};

        service.setNemoinfo = function(userInfo) {
            service.userInfo = userInfo;
        };

        service.getNemoinfo = function () {
            return service.userInfo;
        };
    }
})();
