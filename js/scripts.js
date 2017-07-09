// scripts.js

var femaleNames = ['Ilona','Ola','Asia','Ania','Kasia'];
alert('Imiona żeńskie: ' + femaleNames);
console.log(femaleNames)

var maleNames = ['Grzegorz','Kamil','Łukasz','Tomek','Piotr'];
alert('Imiona męskie: ' + maleNames);
console.log(maleNames)

var allNames = femaleNames.concat(maleNames);
alert('Wszystkie imiona razem: ' + allNames);
console.log(allNames);

var newName =prompt('Nowe imię w tabeli to: ');

if (allNames.indexOf(newName) === -1){
	allNames.push(newName);	
}
	
alert(allNames);
console.log(allNames);






