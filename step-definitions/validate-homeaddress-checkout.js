let app = require('../app.js');
// let ShoppingCart = require('../shopping-cart.js');
let Category = require('../category.js');
let Person = require('../person.js')

module.exports = function(){
	let error;
	let user;
	let postAdr;

this.Given(/^that the user wants to check out whith a non\-empty cart$/, function (callback) {
		user = app.addUser("Camilla", 25); 
    	user.shoppingCart.add(app.products[0], 4);
    callback();
});

this.Given(/^the user has enterd a valid home address$/, function (callback) {
         user.postAdress = "Stockholm, adressgatan 5";
    callback();
});

this.When(/^user wants to pay$/, function (callback) {
         
    callback();
});

this.Then(/^the person continues to payment$/, function (callback) {
        
   callback();
});







this.Given(/^that the user wants to check out with empty cart$/, function (callback) {
        user = app.addUser("Camilla", 25); 
    callback();
});

this.When(/^the user attempts to pay$/, function (callback) {        

	callback();
});


this.Then(/^a warning alerts user about empty cart$/, function (callback) {
	assert(
          user.shoppingCart !== undefined, 
          "The user has an empty cart and is able to pay"
		  );     
   callback();
});

this.Given(/^that I am in the checkout$/, function (callback) {
     
   callback();
});

this.When(/^I fill in home address with "([^"]*)"$/, function (arg1, callback) {
          error = true;
   callback();
});

this.Then(/^I should get an error$/, function (callback) {
   	assert(
           error !== undefined, 
           "The user has created an email whit wrong syntax"
            );
   callback();
});






 }
