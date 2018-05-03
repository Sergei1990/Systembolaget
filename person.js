let assert = require('assert');
let ShoppingCart = require('./shopping-cart.js');

module.exports = class Person {

	constructor(name,age){

		assert(typeof name == "string" && name !== "",
			"The name cannot be an empty string!"
			);
		
		assert(age == Number && age != "",
			"Age must be a number"
			);

		this.name = name;
		this.age = age;
		this.shoppingCart = new ShoppingCart();
	}
}