let app = require('../app.js');
let Person = require('../person.js');
let ShoppingCart = require('../shopping-cart.js');
let Product = require('../product.js');
let assert = require('assert');

module.exports = function(){

let aPerson, product;

	this.Given(/^that we have product quantity of five in a cart$/, function (callback) {
		aPerson = app.addUser('Kalle', 30);
		product = app.products[1];
		aPerson.shoppingCart.add(product, 5);
    callback();
  });

	this.When(/^I change products quantity by fifteen$/, function (callback) {
		aPerson.shoppingCart.changeQuantity(product, 15);
    callback();
  });

	this.Then(/^I have product quantity of fifteen in a cart$/, function (callback) { 
		assert(
			aPerson.shoppingCart.thingsToBuy[0].quantity === 15,
			"Quantity of the product is incorrect"
		);
	  callback();
  });
 

 //_________________Scenarion 2_______________

	this.Given(/^that we have a product quantity of fifteen in a cart$/, function (callback) {
		product = app.products[2];
		aPerson.shoppingCart.add(product, 15);
  	callback();
  });

 	this.When(/^I change product quantity to five$/, function (callback) {
 		aPerson.shoppingCart.changeQuantity(product, 5);
    callback();
  });

 	this.Then(/^I have product quantity of five in a cart\.$/, function (callback) {
 		assert(
 			aPerson.shoppingCart.thingsToBuy[1].quantity === 5,
 			"Quantity of the product is incorrect"
 		);
    callback();
  });


}