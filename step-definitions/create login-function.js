let app = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');
let Category = require('../category.js');
let Person = require('../person.js')

module.exports = function(){
	let user;
	let legalAge = 20; 
	let wine = app.products[0];
	let toBuy;

this.Given(/^that the user has an legal age$/, function (callback) {
         user = app.addUser('Mattias', 32);
         callback();
});

this.Given(/^has a non\-empty shopping cart$/, function (callback) {
		user = app.addUser('Mattias', 32);
         app.users[0].shoppingCart.add(wine, 10);
		callback();
});

this.When(/^user wants to check out$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
});

this.Then(/^user must enter email to validate legal age$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
});


//Scenario 2 


this.Given(/^has a empty shopping cart$/, function (callback) {
 			app.users[0].shoppingCart.add(wine, 0);
         callback();
});


this.Then(/^a warning should be shown$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
});

 // Scenario 3


this.Given(/^that I am in the sytembolagets checkout$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

this.Given(/^click buy button$/, function (callback) {
        //app.users[0].shoppingCart.toBuy(wine, 10); // toBuy not a function
         callback();
       });

this.When(/^I fill in email with <"([^"]*)">$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

 this.Then(/^I should get a runtime error$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });



}
