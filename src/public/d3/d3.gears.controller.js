(function () {

  angular.module('public')
  .controller('D3gearsController', D3gearsController)
  .directive('d3Gears', d3Gears);

  function d3Gears() {
    var ddo =  {
        controller: D3gearsController,
        controlleAs: 'ctrl',
        template: '<div id="gears" class="d3-directive"></div>'
        };

    return ddo;
  }



  D3gearsController.$inject = ['d3Factory'];
  function D3gearsController(d3Promise) {
    console.log('D3gearsController instantiated');

    d3Promise.d3().then(function() {
      console.log('D3gearsController d3 promise returned');
      var element = d3.select('#gears').node(),
          x = Math.sin(2 * Math.PI / 3),
          y = Math.cos(2 * Math.PI / 3),
          width = 0,
          height = 0,
          radius = 0,
          offset = 0,
          speed = 2,
          start = Date.now(),
          svg = null,
          frame = null;

     /*----------------------------------------------------------------------------------
      * primary animation drawing function
      *----------------------------------------------------------------------------------*/
      function draw() {
        console.log('D3gearsController.draw()');

        d3.select("#gears").select("svg").remove();

        width = element.getBoundingClientRect().width;
        height = element.getBoundingClientRect().height;
        if (height <= width) radius = height / 10
        else radius = width / 10;

        svg = d3.select("#gears").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(.90)")
            .append("g");

        frame = svg.append("g").datum({radius: Infinity});


        frame.append("g")
            .attr("class", "gears-annulus")
            .datum({teeth: 80, radius: -radius * 5, annulus: true})
          .append("path")
            .attr("d", gear);

        frame.append("g")
            .attr("class", "gears-sun")
            .datum({teeth: 16, radius: radius})
          .append("path")
            .attr("d", gear);

        frame.append("g")
            .attr("class", "gears-planet")
            .attr("transform", "translate(0,-" + radius * 3 + ")")
            .datum({teeth: 32, radius: -radius * 2})
          .append("path")
            .attr("d", gear);

        frame.append("g")
            .attr("class", "gears-planet")
            .attr("transform", "translate(" + -radius * 3 * x + "," + -radius * 3 * y + ")")
            .datum({teeth: 32, radius: -radius * 2})
          .append("path")
            .attr("d", gear);

        frame.append("g")
            .attr("class", "gears-planet")
            .attr("transform", "translate(" + radius * 3 * x + "," + -radius * 3 * y + ")")
            .datum({teeth: 32, radius: -radius * 2})
          .append("path")
            .attr("d", gear);

        d3.selectAll("input[name=reference]")
          .data([radius * 5, Infinity, -radius])
            .on("change", function(radius1) {
              var radius0 = frame.datum().radius, angle = (Date.now() - start) * speed;
              frame.datum({radius: radius1});
              svg.attr("transform", "rotate(" + (offset += angle / radius0 - angle / radius1) + ")");
            });

        d3.selectAll("input[name=speed]")
            .on("change", function() { speed = +this.value; });

      }

      function gear(d) {
        var n = d.teeth,
            r2 = Math.abs(d.radius),
            r0 = r2 - 5,
            r1 = r2 + 5,
            r3 = d.annulus ? (r3 = r0, r0 = r1, r1 = r3, r2 + 20) : 20,
            da = Math.PI / n,
            a0 = -Math.PI / 2 + (d.annulus ? Math.PI / n : 0),
            i = -1,
            path = ["M", r0 * Math.cos(a0), ",", r0 * Math.sin(a0)];
        while (++i < n) path.push(
            "A", r0, ",", r0, " 0 0,1 ", r0 * Math.cos(a0 += da), ",", r0 * Math.sin(a0),
            "L", r2 * Math.cos(a0), ",", r2 * Math.sin(a0),
            "L", r1 * Math.cos(a0 += da / 3), ",", r1 * Math.sin(a0),
            "A", r1, ",", r1, " 0 0,1 ", r1 * Math.cos(a0 += da / 3), ",", r1 * Math.sin(a0),
            "L", r2 * Math.cos(a0 += da / 3), ",", r2 * Math.sin(a0),
            "L", r0 * Math.cos(a0), ",", r0 * Math.sin(a0));
        path.push("M0,", -r3, "A", r3, ",", r3, " 0 0,0 0,", r3, "A", r3, ",", r3, " 0 0,0 0,", -r3, "Z");
        return path.join("");
      }

      d3.timer(function() {
        var angle = (Date.now() - start) * speed,
            transform = function(d) { return "rotate(" + angle / d.radius + ")"; };
        frame.selectAll("path").attr("transform", transform);
        frame.attr("transform", transform); // frame of reference
      });
      /* --------------------------- draw() ----------------------------------------------------------*/

      /* --------------------------- Responsive behavior ------------------------------------*/
      function resizeChart () {
        console.log('D3gearsController.resizeChart()');
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
