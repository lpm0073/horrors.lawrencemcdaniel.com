(function () {

  angular.module('public')
  .controller('D3rotatingvoronoiController', D3rotatingvoronoiController)
  .directive('d3RotatingVoronoi', d3RotatingVoronoiDirective);

  function d3RotatingVoronoiDirective() {
    var ddo = {
        controller: D3rotatingvoronoiController,
        controllerAs: 'ctrl',
        template: '<div id="rotating-voronoi" class="d3-directive"></div>'
        };

    return ddo;
  }



  D3rotatingvoronoiController.$inject = ['d3Factory'];
  function D3rotatingvoronoiController(d3Promise) {
    console.log('D3rotatingvoronoiController instantiated');

    d3Promise.d3().then(function() {
      /*----------------------------------------------------------------------------------
       * primary animation drawing function
       *----------------------------------------------------------------------------------*/
       function draw() {
         console.log('D3rotatingvoronoiController.draw()');

         d3.select("#rotating-voronoi").select("svg").remove();

         var element = d3.select('#rotating-voronoi').node(),
             width = element.getBoundingClientRect().width,
             height = element.getBoundingClientRect().height;

         var start = Date.now(),
             points = [];

         var bounds = d3.geom.polygon([
           [-width / 2, -height / 2],
           [-width / 2, +height / 2],
           [+width / 2, +height / 2],
           [+width / 2, -height / 2]
         ]);

         circle(0, 0, 120, 96, -.001);
         circle(0, 0, 30, 10, .03);
         circle(0, 0, 60, 3, -.05);
         circle(0, 0, 15, 4, -.02);
         circle(0, 0, 0, 1, -.02);

         circle(240, -120, 80, 4, -.02);
         circle(240, -120, 0, 1, -.02);

         circle(280, +120, 40, 8, .02);
         circle(280, +120, 20, 8, -.02);
         circle(280, +120, 0, 1, .02);

         var line = d3.svg.line()
             .interpolate("basis-closed");

         var svg = d3.select("#rotating-voronoi").append("svg")
             .attr("width", width)
             .attr("height", height)
           .append("g")
             .attr("transform", "translate(" + (width / 2) + "," + (height / 2) + ")");

         var path = svg.selectAll("path")
             .data(points)
           .enter().append("path");

         d3.timer(function() {
           var voronoi = d3.geom.voronoi(points).map(function(cell) { return bounds.clip(cell); });
           path.attr("d", function(point, i) { return line(resample(voronoi[i])); });
         });

         function circle(cx, cy, r, n, δθ) {
           d3.range(1e-6, 2 * Math.PI, 2 * Math.PI / n).map(function(θ, i) {
             var point = [cx + Math.cos(θ) * r, cy + Math.sin(θ) * r];
             d3.timer(function(elapsed) {
               var angle = θ + δθ * elapsed / 45;
               point[0] = cx + Math.cos(angle) * r;
               point[1] = cy + Math.sin(angle) * r;
             }, 0, start);
             points.push(point);
             return point;
           });
         }

         function resample(points) {
           var i = -1,
               n = points.length,
               p0 = points[n - 1], x0 = p0[0], y0 = p0[1], p1, x1, y1,
               points2 = [];
           while (++i < n) {
             p1 = points[i], x1 = p1[0], y1 = p1[1];
             points2.push(
               [(x0 * 2 + x1) / 3, (y0 * 2 + y1) / 3],
               [(x0 + x1 * 2) / 3, (y0 + y1 * 2) / 3],
               p1
             );
             p0 = p1, x0 = x1, y0 = y1;
           }
           return points2;
         }


       }  /* --------------------------- draw() ----------------------------------------------------------*/

       /* --------------------------- Responsive behavior ------------------------------------*/
       function resizeChart () {
         console.log('D3rotatingvoronoiController.resize()');
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

    });


  }

})();
