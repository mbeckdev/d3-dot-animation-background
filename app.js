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

function yesOrNo() {
  //returns true or false
  //on whether or not to make something there
  if (Math.random() < 0.33) {
    //Math.random is a number >=0 and <1
    return true;
  }
  return false;
}
