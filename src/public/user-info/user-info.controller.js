(function() {
    'use strict';

    angular.module('public')
    .controller('UserInfoController', UserInfoController);

    UserInfoController.$inject = ['userInfo'];
    function UserInfoController(userInfo) {
        var ctrl = this;
        ctrl.userInfo = userInfo;
        ctrl.saved = !angular.equals(userInfo, {});

        console.log('instantiated UserInfoController:', userInfo);

    }
})();
