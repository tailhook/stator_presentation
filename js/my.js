function render(data) {
    var width = 420,
        barHeight = 50;

    var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, width]);

    var chart = d3.select(".chart")
        .attr("width", width)
        .attr("height", barHeight * data.length);

    var g = chart.selectAll("g").data(data)
    var bar = g.enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; })

    bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1);
    g
      .select('rect')
      .transition()
      .duration(1000)
      .attr("width", x)

    bar.append("text")
        .attr("x", function(d) { return x(d) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; });
    g
      .select('text')
      .transition()
      .duration(1000)
      .attr("x", function(d) { return x(d) - 3; })
      .text(function(d) { return d; })
}
