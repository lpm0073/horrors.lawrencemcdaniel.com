(function () {
    "use strict";

    angular.module('public')
    .controller('CognitionController', CognitionController);

    CognitionController.$inject = [];
    function CognitionController() {
        var ctrl = this;
        ctrl.isNew = true;

        console.log('CognitionController instantiated');


    }
})();
