var ICONS = {
    stator: 'rust.svg',
    "stator-asyncio": 'rust.svg',
    "stator-redis": 'rust.svg',
    "stator-aio-redis": 'python.svg',
    uwsgi: 'uwsgi.png',
    "uwsgi-gevent": 'uwsgi.png',
    tornado: 'tornado.jpg',
}

function format_rps(d) {
    return (d[1]/1000).toFixed(1) + 'k'
}

function render(items) {
    var width = 700,
        barHeight = 75;
    var pairs = Object.keys(items).map(function(k) { return [k, items[k]]; })
    var data = Object.keys(items).map(function(k) { return items[k]; })

    var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, width]);

    var chart = d3.select("#chart1")
        .attr("width", width + barHeight + 150)
        .attr("height", barHeight * data.length);

    var g = chart.selectAll("g").data(pairs, function(d) { return d[0]; })
    var bar = g.enter().append("g")
        .attr("transform", function(d, i) {
            return "translate(0," + i * barHeight + ")";
        })
    g.exit().remove();
    g
      .transition()
      .duration(1000)
      .attr("transform", function(d, i) {
            return "translate(0," + i * barHeight + ")";
      })

    bar.append("rect")
        .attr("x", barHeight)
        .attr("width", function(d) { return x(d[1]) })
        .attr("height", barHeight - 10)
        .attr("class", function(d) { return d[0]; })
    g
      .select('rect')
      .transition()
      .duration(1000)
      .attr("width", function(d) { return x(d[1]) })

    bar.append("image")
        .attr("width", barHeight - 10)
        .attr("height", barHeight - 10)
        .attr("xlink:href", function(d) { return ICONS[d[0]] })

    bar.append("text")
        .attr("x", function(d) { return barHeight + x(d[1]); })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(format_rps);
    g
      .select('text')
      .transition()
      .duration(1000)
      .attr("x", function(d) { return barHeight + x(d[1]); })
      .attr("class", function(d) { return d[0]; })
      .text(format_rps)
}
