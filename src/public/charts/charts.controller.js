(function () {
    "use strict";

    angular.module('public')
    .controller('ChartsController', ChartsController);

    ChartsController.$inject = [];
    function ChartsController() {
        var ctrl = this;
        ctrl.isNew = true;

        console.log('ChartsController instantiated');


    }
})();
