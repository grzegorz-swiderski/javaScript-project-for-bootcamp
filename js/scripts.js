// scripts.js
$(document).ready(function(){

	var span = $('span');
	var ignored = ['#sp1', '#sp2', '#sp4'];
	var nn = $(ignored);


	    
	span.each(function(index, element) {
		if(index % 2 == 0){
			$(element).css('color', 'red');
		}
		nn.each(function(index, element){
			if(index > -1) {
				$(element).css('color', 'blue');
			}
		});
	});	
	
	    
	/*ignored.forEach(function(element) {
    	console.log(element);
    	$(element).css('color', 'blue')
	});*/

	var paragraphs = $('p');
	paragraphs.each(function(index, element) {
		
		var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
		$(element).append(button)
		
	});
	
	$("button").click(function(){
		alert($(this).attr("data-tmp"));
	});

});
