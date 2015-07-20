var treeHolder = document.getElementById("tree-holder");

var Tree = function(name, leaf_shape, type, average_height) {
  this.name = name,
  this["leaf shape"] = leaf_shape,
  this.type = type,
  this["average height"] = average_height
}

var birch = new Tree("Birch", "Serrate", "Deciduous", 50);
var larch = new Tree("Larch", "Needle", "Deciduous", 140);
var ponderosa = new Tree("Ponderosa Pine", "Needle", "Coniferous", 60);
var oak = new Tree("Oak", "Lobed", "Deciduous", 200);

treeArray = [birch, larch, ponderosa, oak];

for(var i=0; i < treeArray.length; i++) {
  treeHolder.innerHTML += "<div><h2>" + treeArray[i].name + "</h2>" +
    "<ul><li><strong>Leaf Shape:</strong> " + treeArray[i]["leaf shape"] + "</li>" +
    "<li><strong>Type:</strong> " + treeArray[i].type + "</li>" +
    "<li><strong>Average Height (ft):</strong> " + treeArray[i]["average height"] + "</li></ul></div>";
}
