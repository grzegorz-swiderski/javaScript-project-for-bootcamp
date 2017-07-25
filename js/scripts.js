// scripts.js
$(document).ready(function(){

	var span = $('span');
	var ignored = ['sp1', 'sp2', 'sp4'];
	    
	span.each(function(index, element) {
		
		var elementId = $(element).attr('id');
		var ignoredIndexOf = ignored.indexOf(elementId);
		
		if((index % 2 == 0) && (ignoredIndexOf === -1)) {
			$(element).css('color', 'red');
			
		}
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
