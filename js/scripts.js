// scripts.js

var numberA = prompt('Number A');
console.log('Number A= ' + numberA);
	
var	numberH = prompt('Number H');
console.log('Number H= ' + numberH);



function getTriangleArea(numberA, numberH) {
	if ((numberA <= 0) || (numberH <= 0)){
	alert('Nieprawdziwe dane');
	return ('Nieprawdziwe dane');}
	
	alert('Równa się= ' + (numberA * numberH / 2));
	return numberA * numberH / 2;
}

console.log( getTriangleArea(numberA,numberH) )

/*var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(30, 2);
var triangle3Area = getTriangleArea(8, 13);*/
	
