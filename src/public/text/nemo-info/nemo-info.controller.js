(function() {
    'use strict';

    angular.module('public')
    .controller('NemoInfoController', NemoInfoController);

    NemoInfoController.$inject = ['nemoInfo'];
    function NemoInfoController(nemoInfo) {
        var ctrl = this;
        ctrl.nemoInfo = nemoInfo;
        ctrl.saved = !angular.equals(nemoInfo, {});

        console.log('instantiated NemoInfoController:', nemoInfo);

    }
})();
