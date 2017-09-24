(function () {

  angular.module('public')
  .controller('D3vtController', D3vtController)
  .directive('d3VoronoiTessellation', d3VoronoiTessellationDirective);

  function d3VoronoiTessellationDirective() {
    var ddo = {
        controller: D3vtController,
        controllerAs: 'ctrl',
        templateUrl: 'src/public/d3/d3.voronoi-tessellation.directive.html'
        };

    return ddo;
  }



  D3vtController.$inject = ['d3V4Factory'];
  function D3vtController(d3Promise) {
    console.log('D3vtController instantiated');

    d3Promise.d3().then(function() {
      /*----------------------------------------------------------------------------------
       * primary animation drawing function
       *----------------------------------------------------------------------------------*/
       function draw() {
         console.log('D3vtController.draw()');

         d3.select("#voronoi-tessellation").select("svg").remove();

         var element = d3.select('#voronoi-tessellation').node(),
             width = element.getBoundingClientRect().width,
             height = element.getBoundingClientRect().height;

         d3.select("#voronoi-tessellation").append("svg")
           .attr("width", width)
           .attr("height", height);

         var svg = d3.select('#voronoi-tessellation').select("svg").on("touchmove mousemove", moved)


         var sites = d3.range(100)
             .map(function(d) { return [Math.random() * width, Math.random() * height]; });

         var voronoi = d3.voronoi()
             .extent([[-1, -1], [width + 1, height + 1]]);

         var polygon = svg.append("g")
             .attr("class", "polygons")
           .selectAll("path")
           .data(voronoi.polygons(sites))
           .enter().append("path")
             .call(redrawPolygon);

         var link = svg.append("g")
             .attr("class", "links")
           .selectAll("line")
           .data(voronoi.links(sites))
           .enter().append("line")
             .call(redrawLink);

         var site = svg.append("g")
             .attr("class", "sites")
           .selectAll("circle")
           .data(sites)
           .enter().append("circle")
             .attr("r", 2.5)
             .call(redrawSite);

         function moved() {
           sites[0] = d3.mouse(this);
           redraw();
         }

         function redraw() {
           var diagram = voronoi(sites);
           polygon = polygon.data(diagram.polygons()).call(redrawPolygon);
           link = link.data(diagram.links()), link.exit().remove();
           link = link.enter().append("line").merge(link).call(redrawLink);
           site = site.data(sites).call(redrawSite);
         }

         function redrawPolygon(polygon) {
           polygon
               .attr("d", function(d) { return d ? "M" + d.join("L") + "Z" : null; });
         }

         function redrawLink(link) {
           link
               .attr("x1", function(d) { return d.source[0]; })
               .attr("y1", function(d) { return d.source[1]; })
               .attr("x2", function(d) { return d.target[0]; })
               .attr("y2", function(d) { return d.target[1]; });
         }

         function redrawSite(site) {
           site
               .attr("cx", function(d) { return d[0]; })
               .attr("cy", function(d) { return d[1]; });
         }

       }  /* --------------------------- draw() ----------------------------------------------------------*/

       /* --------------------------- Responsive behavior ------------------------------------*/
       function resizeChart () {
         console.log('D3vtController.resize()');
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
