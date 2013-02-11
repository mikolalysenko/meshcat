meshcat
=======
Concatenates meshes (ie simplicial complexes with attributes).

Usage/Installation
==================
First install via npm:

    npm install meshcat
    
Then you can just call the library using module.exports.  For example, here is some code to concatenate a pair of bunnies

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

`require("meshcat")(cells[, attribute0, attribute1, ...])`
----------------------------------------------------------
This method combines multiple meshes together, fixing face indices in the process.  To use it, you just pass an array of cells followed by arrays of attributes.

Returns:
* `cells`: The concatenated array of cells
* `attributes`: An array of concatenated attributes

Credits
=======
(c) 2013 Mikola Lysenko. BSD