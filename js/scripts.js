// scripts.js


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
   	$('<li class="col-6 left">').text('Region: ').appendTo(countriesList);
	$('<li class="col-5 right">').text(item.subregion).appendTo(countriesList);
   	$('<li class="col-6 left">').text('Capitol: ').appendTo(countriesList);
	$('<li class="col-5 right">').text(item.capital).appendTo(countriesList);
	$('<li class="col-6 left">').text('Area: ').appendTo(countriesList);
	$('<li class="col-5 right">').text(item.area + 'km^2').appendTo(countriesList);
	$('<li class="col-6 left">').text('Currencies: ').appendTo(countriesList);
	$('<li class="col-5 right">').text(item.currencies).appendTo(countriesList);
	});
}