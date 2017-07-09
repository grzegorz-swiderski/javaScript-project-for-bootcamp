// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

var textChangeName = text.replace('Velociraptor' , dinosaurUpperCased);

var partOfText = textChangeName.slice(0,72);

console.log(partOfText);



