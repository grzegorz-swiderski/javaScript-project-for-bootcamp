// scripts.js
var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function(e) {
	var newElem = document.createElement('li');
	newElem.innerHTML = 'item';
	
	newElem.getElementsByTagName('li').length;
	
	list.appendChild(newElem);
});


