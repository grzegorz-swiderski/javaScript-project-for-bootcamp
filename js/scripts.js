// scripts.js


function Phone(brand, price, color, country) {
    this.brand = brand;
	this.price = price;
	this.color = color;
	this.country = country;
}

Phone.prototype.printInfo = function(){
	console.log("The phone brand is " + this.brand + ", color is " + this.color + "and the price is " + this.price + " zł. It is from " + this.country + ".");
}

var samsungGalaxyS6 = new Phone ("Samsung", 2349, "black", "South Korea" );
var iPhone6S = new Phone("Apple", 2250, "silver", "United States of America");
var onePlusOne = new Phone ("OnePlus", 1899, "white", "China");

samsungGalaxyS6.printInfo();

function getWarranyCost(brand, price, color, country, warranyCost) {
	Phone.call(this, brand, price, color, country);
	this.warranyCost = this.price * 0.1;
}

getWarranyCost.prototype = Object.create(Phone.prototype)
getWarranyCost.prototype.constructor = getWarranyCost;

getWarranyCost.prototype.printInfo = function(){
console.log("The phone brand is " + this.brand + ", color is " + this.color + "and the price is " + this.price + " zł. It is from " + this.country + ". WarranyCost for this phone is " + this. warranyCost + ".");
}

var samsungGalaxyS6 = new getWarranyCost ("Samsung", 2599.9, "black", "South Korea");
var iPhone6S = new getWarranyCost("Apple", 2250, "silver", "United States of America");
var onePlusOne = new getWarranyCost ("OnePlus", 1899, "white", "China");

iPhone6S.printInfo();

