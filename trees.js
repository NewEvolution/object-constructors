var treeHolder = document.getElementById("tree-holder");
var treeHolderContent = "";

var Tree = function(name, leaf_shape, type, average_height) {
  this.name = name,
  this["leaf shape"] = leaf_shape,
  this.type = type,
  this["average height"] = average_height
}

var birch = new Tree("Birch", "Serrate", "Deciduous", 50);
var larch = new Tree("Larch", "Needle", "Deciduous", 140);
var ponderosa = new Tree("Ponderosa Pine", "Needle", "Evergreen", 60);
var oak = new Tree("Oak", "Lobed", "Deciduous", 200);

treeArray = [birch, larch, ponderosa, oak];

for(var i=0; i < treeArray.length; i++) {
  treeHolderContent += "<p>" + JSON.stringify(treeArray[i]) + "</p>";
}

treeHolder.innerHTML = treeHolderContent;