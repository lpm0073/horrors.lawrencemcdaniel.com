(function () {

  angular.module('public')
  .controller('TxtwordcloudController', TxtwordcloudController);

  TxtwordcloudController.$inject = [];
  function TxtwordcloudController() {
    console.log('TxtwordcloudController instantiated');

    /*----------------------------------------------------------------------------------
     * primary animation drawing function
     *----------------------------------------------------------------------------------*/
     function draw() {

     }  /* --------------------------- draw() ----------------------------------------------------------*/

     /* --------------------------- Responsive behavior ------------------------------------*/
     function resizeChart () {
         draw();
     }
     if (document.addEventListener) {
         window.addEventListener('resize', resizeChart);
     }
     else if (document.attachEvent) {
         window.attachEvent('onresize', resizeChart);
     }
     else {
         window.resize = resizeChart;
     }
     /* --------------------------- Responsive behavior ------------------------------------*/

     /* invoke the draw function */
     draw();

  }

})();
