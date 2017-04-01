(function () {
    "use strict";

    angular.module('public')
    .controller('D3Controller', D3Controller);

    D3Controller.$inject = [];
    function D3Controller() {
        var ctrl = this;
        ctrl.isNew = true;

        console.log('D3Controller instantiated');


    }
})();
