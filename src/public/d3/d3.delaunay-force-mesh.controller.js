(function () {

  angular.module('public')
  .controller('D3delaunayforcemeshController', D3delaunayforcemeshController)
  .directive('d3DelaunayForceMesh', d3DelaunayForceMeshDirective);

  function d3DelaunayForceMeshDirective() {
    var ddo = {
        controller: D3delaunayforcemeshController,
        controllerAs: 'ctrl',
        template: '<div id="delaunay-force-mesh"></div>'
        };

    return ddo;
  }



  D3delaunayforcemeshController.$inject = ['d3Factory'];
  function D3delaunayforcemeshController(d3Promise) {
    console.log('D3delaunayforcemeshController instantiated');

    d3Promise.d3().then(function() {
      /*----------------------------------------------------------------------------------
       * primary animation drawing function
       *----------------------------------------------------------------------------------*/
       function draw() {
         console.log('D3delaunayforcemeshController.draw()');

         d3.select("#delaunay-force-mesh").select("canvas").remove();

         var width = 960,
             height = 400,
             τ = 2 * Math.PI,
             maxLength = 100,
             maxLength2 = maxLength * maxLength;

         var nodes = d3.range(250).map(function() {
           return {
             x: Math.random() * width,
             y: Math.random() * height
           };
         });

         var force = d3.layout.force()
             .size([width, height])
             .nodes(nodes.slice())
             .charge(function(d, i) { return i ? -30 : -1500; })
             .on("tick", ticked)
             .start();

         var voronoi = d3.geom.voronoi()
             .x(function(d) { return d.x; })
             .y(function(d) { return d.y; });

         var root = nodes.shift();

         root.fixed = true;

         var canvas = d3.select("#delaunay-force-mesh").append("canvas")
             .attr("width", width)
             .attr("height", height)
             .on("ontouchstart" in document ? "touchmove" : "mousemove", moved);

         var context = canvas.node().getContext("2d");

         function moved() {
           var p1 = d3.mouse(this);
           root.px = p1[0];
           root.py = p1[1];
           force.resume();
         }

         function ticked() {
           var links = voronoi.links(nodes);

           context.clearRect(0, 0, width, height);

           context.beginPath();
           for (var i = 0, n = links.length; i < n; ++i) {
             var link = links[i],
                 dx = link.source.x - link.target.x,
                 dy = link.source.y - link.target.y;
             if (dx * dx + dy * dy < maxLength2) {
               context.moveTo(link.source.x, link.source.y);
               context.lineTo(link.target.x, link.target.y);
             }
           }
           context.lineWidth = 0.5;
           context.strokeStyle = "orange";
           context.stroke();

           context.beginPath();
           for (var i = 0, n = nodes.length; i < n; ++i) {
             var node = nodes[i];
             context.moveTo(node.x, node.y);
             context.arc(node.x, node.y, 2, 0, τ);
           }
           context.lineWidth = 1;
           context.strokeStyle = "#563d7c";
           context.stroke();
           context.fillStyle = "#563d7c";
           context.fill();
         }


       }  /* --------------------------- draw() ----------------------------------------------------------*/

       /* --------------------------- Responsive behavior ------------------------------------*/
       function resizeChart () {
         console.log('D3delaunayforcemeshController.resize()');
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
