'use strict';

var width = 500;
var height = 500;

//Create SVG element
var svg = d3
  .select('#circle-art')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

//Make a bunch of circles!
var horizMax = 12;
var horizSpacing = 35;
var vertMax = 3;
var vertSpacing = 35;

var xSpace = 20; //initial offset
for (var i = 0; i < horizMax; i++) {
  let ySpace = 20; //initial offset
  for (var j = 0; j < vertMax; j++) {
    maybeMakeCircle(12, '#233e8b', xSpace, ySpace);
    maybeMakeCircle(8, '#1eae98', xSpace, ySpace);
    maybeMakeCircle(5, '#a9f1df', xSpace, ySpace);
    ySpace = ySpace + vertSpacing;
  }
  xSpace = xSpace + horizSpacing;
}

function maybeMakeCircle(radius, color, x, y) {
  if (yesOrNo()) {
    svg
      .append('circle')
      .attr('r', radius)
      .attr('fill', color)
      .attr('cx', x)
      .attr('cy', y);
  }
}

function makeLine(x1, y1, x2, y2) {
  // make line from x1,y1 to x2,y2
}

let allDots = [];
//check if dots are close to each other
//  if so, draw a line between them

function yesOrNo() {
  //returns true or false
  //on whether or not to make something there
  if (Math.random() < 0.33) {
    //Math.random is a number >=0 and <1
    return true;
  }
  return false;
}

// Section for moving background
// var width2 = 500;
// var height2 = 500;
//Create SVG element
var svg2 = d3
  .select('#moving-background')
  .append('svg')
  .attr('width', width2)
  .attr('height', height2);
svg2
  .append('circle')
  .attr('r', '20px')
  .attr('fill', '#fff')
  .attr('cx', '20px')
  .attr('cy', '20px');
// svg2.transition().duration(1000).style('background-color', 'red');

svg2
  .append('circle')
  .attr('r', radius)
  .attr('fill', color)
  .attr('cx', x)
  .attr('cy', y);

let dot = d3
  .select('.dot')
  .append('circle')
  .attr('r', radius)
  .attr('fill', color)
  .attr('cx', x)
  .attr('cy', y);

// .select('.dot')
// .data(data)
// .enter()
// .append('g')
// .attr('class', 'dot');

// dots
//   .selectAll('.dot')
//   .append('circle')
//   .attr('r', radius)
//   .attr('fill', color)
//   .attr('cx', x)
//   .attr('cy', y);

// .data(data)
// .enter()
// .append('circle')
// .attr('r', 2.5)
// .attr('cx', function (d) {
//   return x(d.inspected_at);
// })
// .attr('cy', function (d) {
//   return y(d.flow_data);
// })
// .style('fill', 'blue')
// .style('opacity', '.5');
