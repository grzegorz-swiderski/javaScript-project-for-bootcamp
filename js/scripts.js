// scripts.js


function Phone(brand, price, color, country) {
    this.brand = brand;
    this.price = price;
	this.color = color;
	this.country = country;
}

Phone.prototype.getWarrantyCost = function(){
    	return this.price * 0.1   
};

Phone.prototype.printInfo = function(){
	console.log("The phone brand is " + this.brand + ", color is " + this.color + "and the price is " + this.price + " zł. It is from " + this.country + ".");
};

var samsungGalaxyS6 = new Phone ("Samsung", 2349, "black", "South Korea" );
var iPhone6S = new Phone("Apple", 2250, "silver", "United States of America");
var onePlusOne = new Phone ("OnePlus", 1899, "white", "China");

samsungGalaxyS6.printInfo();

iPhone6S.getWarrantyCost();
