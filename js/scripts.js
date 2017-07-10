// scripts.js


var button = document.getElementsByClassName('button');

for (var b = 0; b < button.length; b++){
	var text = button[b].innerText;
	alert(text);
}