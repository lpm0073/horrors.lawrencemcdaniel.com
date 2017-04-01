(function () {
    "use strict";

    angular.module('public')
    .controller('AngularJSController', AngularJSController);

    AngularJSController.$inject = [];
    function AngularJSController() {
        var ctrl = this;
        ctrl.isNew = true;

        console.log('AngularJSController instantiated');


    }
})();
