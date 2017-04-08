(function () {

  angular.module('public')
  .controller('D3particlesController', D3particlesController);

  D3particlesController.$inject = [];
  function D3particlesController() {
    console.log('D3particlesController instantiated');



    /*----------------------------------------------------------------------------------
     * primary animation drawing function
     *----------------------------------------------------------------------------------*/
     function draw() {

       d3.select("#d3-particles").select("svg").remove();

       var element = d3.select('#d3-particles').node(),
           width = element.getBoundingClientRect().width,
           height = element.getBoundingClientRect().height;

           console.log('width: ', width);
           console.log('height: ', height);

       var i = 0;

       var svg = d3.select("#d3-particles").append("svg")
           .attr("width", width)
           .attr("height", height);

       svg.append("rect")
           .attr("width", width)
           .attr("height", height)
           .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

       function particle() {
         var m = d3.mouse(this);

         svg.insert("circle", "rect")
             .attr("cx", m[0])
             .attr("cy", m[1])
             .attr("r", 1e-6)
             .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
             .style("stroke-opacity", 1)
           .transition()
             .duration(2000)
             .ease(Math.sqrt)
             .attr("r", 100)
             .style("stroke-opacity", 1e-6)
             .remove();

         d3.event.preventDefault();
       }

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
