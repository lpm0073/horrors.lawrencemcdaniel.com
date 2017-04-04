(function () {
    "use strict";

    angular.module('public')
    .controller('NemoformController', NemoformController);

    NemoformController.$inject = ['NemoService'];
    function NemoformController(NemoService) {
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

        /*
        ctrl.validateFavdish = function() {
            ctrl.validShortCode = false;
            ctrl.itemSearched = false;
            console.log('in NemoformController.validateFavdish():', ctrl.userInfo);

            if(typeof ctrl.userInfo.favoriteDish === 'undefined') return;
            if(ctrl.userInfo.favoriteDish.trim().length <= 0) return;

            MenuService.getMenuItem(ctrl.userInfo.favoriteDish).then(
                function(response) {
                    console.log('NemoformController.validateFavdish() - Success:', response.data);
                    ctrl.userInfo.dishInfo = response.data;
                    ctrl.validShortCode = true;
                    ctrl.itemSearched = true;
                },
                function(response) {
                    console.log('NemoformController.validateFavdish() - Failed:', response.data);
                    ctrl.itemSearched = true;
                }
            );
        };
        */


    }
})();
