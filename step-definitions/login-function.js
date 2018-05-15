let app = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');
let Category = require('../category.js');
let Person = require('../person.js')

module.exports = function(){
	let user, wine;

		this.Given(/^that the user has an legal age$/, function (callback) {
		         user = app.addUser('Mattias', 32);
		         callback();
		});

		this.Given(/^has a non\-empty shopping cart$/, function (callback) {
			wine = app.products[0];
		         user.shoppingCart.add(wine, 3);
		         assert(
		            user.shoppingCart.thingsToBuy.length !== 0,
		            "User has an empty cart" 
		            );

				callback();
		});

		this.When(/^user wants to check out$/, function (callback) {
		         
		         callback();
		});

		this.Then(/^user must enter email to validate legal age$/, function (callback) {
		         
		         callback();
		});


		//Scenario 2 


		this.Given(/^has a empty shopping cart$/, function (callback) {
		 			user.shoppingCart.removeAllItems();
		 			assert(
		            user.shoppingCart.thingsToBuy.length == 0,
		            "There are items in a empty shopping cart"    
		        );
		         callback();
		});


		this.Then(/^a warning should be shown$/, function (callback) {
		         
		         callback();
		});

}
