(function () {
    "use strict";

    angular.module('common')
    .service('UserInfoService', UserInfoService);

    UserInfoService.$inject = [];
    function UserInfoService() {
        var service = this;
        service.userInfo = {};

        service.setUserinfo = function(userInfo) {
            service.userInfo = userInfo;
            console.log('UserInfoService.registerUser() - userInfo:', service.userInfo);
        };

        service.getUserinfo = function () {
            return service.userInfo;
        };
    }
})();
