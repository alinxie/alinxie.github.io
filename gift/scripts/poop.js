var andrew_isa_image_list = img_list;
var image_list_length = andrew_isa_image_list.length - 1;


function randomx() {
    return Math.round(Math.random() * $(document).width());
}

function randomy() {
    return Math.round(Math.random() * $(document).height());
}

function randelay() {
    return Math.random() * 3000
}

function tumblrImages(accnt, tags) {

}
console.log(randomx())
console.log(randomy())

function populate() {
    var random_image_list = [];
    var randNum = 500;
    for (var i = 0; i < randNum; i ++) {
        var randIndex = Math.round(image_list_length * Math.random());
        random_image_list.push(andrew_isa_image_list[randIndex]);
    }

    d3.select('body').selectAll('img')
        .data(random_image_list)
        .enter()
        .append('img')
        .attr('id', 'random-image')
        .attr('src', function(d) {
            return d;
        })
        .style('position', 'absolute')
        .style('top', function(d) {
            return randomy() + 'px';
        })
        .style('left', function(d) {
            return randomx() + 'px';
        })
        .style('opacity', '0.5');
    delays = []
    for (var i = 0; i < randNum; i ++) {

    }
    d3.select('body').selectAll('img')
        .transition()
        .style('opacity', '0.5')
        .duration(2000)
        .delay(randelay());
        


}
$( document ).ready(function() {
  console.log( 'ready!' );
});

$('#andrisa-pic-button').on('click', function() {
    populate();
    })
