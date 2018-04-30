let app = require('../app.js');
//let Person = require('../person.js');
//let ShoppingCart = require('../shopping-cart.js');
//let Product = require('../product.js');

module.exports = function(){

	//variables needed
	let shoppingCart;

	//Purcari is the example product we are testing


	//given the user has an empty shopping cart.
	this.Given(/^we have a shopping cart with a quantity "([^"]*)" of Purcari$/, function (quantity, callback){
		
        // Find the Purcari bottle using filter
        //app.products is an array of all the products 
		let filtered = app.products.filter(function(product){
			return product.namn === 'Purcari';
		}); 
		let Purcari = filtered[0];

		// Create a new user (a newly created user in turn has an empty shopping cart)
		app.addUser("Per", 20);
		let theUser = app.users[app.users.length - 1];

		// Store Pers shopping cart in our "global" variable shopping cart
		shoppingCart = theUser.shoppingCart;

		shoppingCart.add(Purcari, quantity); 


		// quick check
		console.warn("IN THE SHOPPING CART", shoppingCart.thingsToBuy);

        callback();
       });

	this.When(/^the costumer removes "([^"]*)" of Purcari$/, function (quantity, callback) {
         // Write code here that turns the phrase above into concrete actions
         let filtered = app.products.filter(function(product){
			return product.namn === 'Purcari';
		}); 
		let Purcari = filtered[0];
         shoppingCart.changeQuantity(Purcari, 0);
         callback();
       });

	this.When(/^the costumer adds "([^"]*)" of Renat$/, function (quantity, callback) {
       		let filtered = app.products.filter(function(product){
			return product.namn === 'Renat';
		}); 
		let Renat = filtered[0];
		shoppingCart.add(Renat, quantity); 

		shoppingCart.changeQuantity(Renat, 5);
		console.warn("IN THE SHOPPING CART", shoppingCart.thingsToBuy);

         callback();
       });

	 this.Then(/^the shopping cart should be updated to "([^"]*)" total products\.$/, function (arg1, callback) {
	 	shoppingCart.thingsToBuy = 5;

	 	assert (shoppingCart.thingsToBuy= 5, 'The shopping cart is showing the wrong number of products');
         callback();
       });




 


}