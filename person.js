let assert = require('assert');
let ShoppingCart = require('./shopping-cart.js');

module.exports = class Person {

	constructor(name,age){

		assert(typeof name == "string" && name !== "",
			"The name cannot be an empty string!"
			);
		
		assert(typeof age === "number",
			"Age must be a number"
			);

		this.name = name;
		this.age = age;
		this.shoppingCart = new ShoppingCart();
		this.postAdress;
	}

	buyProducts(){

		assert(
			this.postAdress != undefined,
			"Enter all obligatory information in the profile to buy the products"
		);

    	this.shoppingCart.thingsToBuy = [];
    	
    	// + Message that the goods and invoice will be delivered within 12 hours. Show the id-card when getting
    	// alcoholic beverages

	}
}