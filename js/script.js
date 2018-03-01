function Phone(brand, price, color, display, weight) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.display = display;
	this.weight = weight;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + "The display is " + this.display + " and weight is " + this.weight + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "750 x 1334 px", "143 grams");
var SamsungGalaxyS6 = new Phone("Samsung", 1800, "black", "1440 x 2560 px", "138 grams");
var OnePlusOne = new Phone("OnePlus", 1200, "white", "1080 x 1920 px", "162 grams");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();