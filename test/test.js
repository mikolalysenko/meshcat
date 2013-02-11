//Import the bunny
var bunny = require("bunny");

//Make a shifted copy
var shifted = new Array(bunny.positions.length);
for(var i=0; i<shifted.length; ++i) {
  shifted[i] = bunny.positions[i].slice(0);
  shifted[i][0] += 50;
}

//Concatenate the meshes
var two_bunnies = require("../index.js")(
    [bunny.faces, bunny.faces],
    [bunny.positions, shifted]);
