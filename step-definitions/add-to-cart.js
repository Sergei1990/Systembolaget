let myApp = require('../app.js');
let Person = require('../person.js');
let ShoppingCart = require('../shopping-cart.js');
let Category = require('../category.js');
//let Systembolaget = require('../systembolaget.js');

module.exports = function(){

//let store = new Systembolaget(20);
let aPerson = new Person('Arnold', 25);
let quantity = 1;

 this.Given(/^that I'm in Systembolaget$/, function (callback) {
 	 
 	 if(store.people.includes(aPerson) == false) {
 		store.enter(aPerson);
 	 }
           
         // Write code here that turns the phrase above into concrete actions
         callback();
    
       });
 
 this.When(/^I have decided what I want to buy$/, function (callback) {
 	  product = myApp.products[62];
 	
         // Write code here that turns the phrase above into concrete actions
         callback();
    
       });

	 this.When(/^I have decided how much of a certain beverage I want$/, function (callback) {
	 	quantity = 1;
    	
    	
         // Write code here that turns the phrase above into concrete actions
         callback();
    
       });
 this.Then(/^I add a bevarege in a cart$/, function (callback) {

 	   assert.doesNotThrow(function() {
      aPerson.shoppingCart.add(product, quantity);
    },
 	 "I can't add a beverage to the cart." ); 
         // Write code here that turns the phrase above into concrete actions
         callback();
    
       });


}