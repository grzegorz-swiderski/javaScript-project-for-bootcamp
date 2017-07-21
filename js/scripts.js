// scripts.js
$(document).ready(function(){

	var span = $('span');
	var ignored = ['#sp1', '#sp2', '#sp4'];
	console.log(ignored);


	    
	span.each(function(index, element) {
		if(index % 2 == 0){
			$(element).css('color', 'red')
		}
	});	
	
	    
	ignored.forEach(function(element) {
    	console.log(element);
    	$(element).css('color', 'black')
	});

	var paragraphs = $('p');
	paragraphs.each(function(index, element) {
		
		var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
		$(element).append(button)
		
	});
	
	$("button").click(function(){
		alert($(this).attr("data-tmp"));
	});

});