// scripts.js

var numberA = prompt('Number A');
console.log('Number A= ' + numberA);

var numberB = prompt('Number B');
console.log('Number B= ' + numberB);
	
var value = (numberA * numberA) + (2 * numberA * numberB) - (numberB * numberB);
alert('Wynik działania= ' + value);
console.log('Wynik działania= ' + value);
	
/*if (value > 0) {
	console.log('Wynik dodatni');
	alert('Wynik dodatni');
}
 
else if (value < 0) {
	console.log('Wynik ujemny');
	alert('Wynik ujemny');
}

else {
	console.log('Ani dodatni, ani ujemny:)');
	alert('Ani dodatni, ani ujemny:)');
}*/



if (value == 0) {
	console.log('Ani dodatni, ani ujemny:)');
	alert('Ani dodatni, ani ujemny:)');
}

else {
	var valueName = "Wynik" + ((value > 0) ?  " dodatni." : " ujemny.");
	alert(' ' + valueName);
	console.log(' ' + valueName); 
}


