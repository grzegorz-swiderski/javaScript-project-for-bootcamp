// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var first = text.split(' ', 1);

var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

var textChangeName = text.replace(first, dinosaurUpperCased);

var partOfText = textChangeName.slice(0,text.length / 2);

console.log(partOfText);



