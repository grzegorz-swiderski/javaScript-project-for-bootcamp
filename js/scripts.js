// scripts.js
var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function(e) {
	var newElem = document.createElement('li');
	var myNumber = document. getElementsByTagName('li').length;
	
	newElem.innerHTML = 'item ' + myNumber;
	
	list.appendChild(newElem);
});


