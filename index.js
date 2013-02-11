function meshcat(complexes) {
  //Concatenate vertex attributes
  var attribute_list = Array.prototype.slice.call(arguments, 1);
  var attributes = new Array(attribute_list.length);
  for(var i=0; i<attributes.length; ++i) {
    attributes[i] = Array.prototype.concat.apply([], attribute_list[i]);
  }
  //Join cells
  var cells = [];
  var mesh_count = complexes.length;
  var v_offset = 0;
  for(var i=0; i<mesh_count; ++i) {
    var mesh = complexes[i];
    for(var j=0; j<mesh.length; ++j) {
      var f = mesh[j].slice(0);
      for(var k=0; k<f.length; ++k) {
        f[k] += v_offset;
      }
      cells.push(f);
    }
    v_offset += attributes[0][i].length;
  }
  return { cells: cells, attributes: attributes }
}

module.exports = meshcat;