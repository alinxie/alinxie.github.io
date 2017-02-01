
// Your beautiful D3 code will go here
var dataset = [];
for (var i = 0; i < 30; i ++) {
    var newNumber = Math.random() * 30
    dataset.push(newNumber);
}
d3.select('#bargraph').selectAll('div')
    .data(dataset)
    .enter()
    .append('div')
    .attr('class', 'bar')
    .style("background-color", function(d) {
        if (d > 15) {   //Threshold of 15
            return "#12A1B4";
        } else {
            return "#A4A2FF";
        }})
    .transition()
    .style('height', function(d) {
        return d*10 + 'px'});

