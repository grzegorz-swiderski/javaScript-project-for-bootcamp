var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
  	if(!countryName.length) countryName = 'Poland';
  	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
	
	countriesList.empty();
	resp.forEach(function(item) {
   	$('<li id="name">').text(item.name).appendTo(countriesList);
   	
   	$('<li class="col-6 left hd">').text('Region: ').appendTo(countriesList);
	$('<li class="col-5 right hd">').text(item.subregion).appendTo(countriesList);
   	$('<li class="col-6 left hd">').text('Capitol: ').appendTo(countriesList);
	$('<li class="col-5 right hd">').text(item.capital).appendTo(countriesList);
	$('<li class="col-6 left hd">').text('Area: ').appendTo(countriesList);
	$('<li class="col-5 right hd">').text(item.area + 'km^2').appendTo(countriesList);
	$('<li class="col-6 left hd">').text('Currencies: ').appendTo(countriesList);
	$('<li class="col-5 right hd">').text(item.currencies).appendTo(countriesList);
	});
	
	$('.hd').hide();
	
	var but = $('#name');
	but.click(function(){
    	$('.hd').slideToggle('slow');
    });
	
}