let app = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');
let Category = require('../category.js');
let assert = require('assert');
let Person = require('../person.js');
let Product = require('../product.js');


module.exports = function(){

  let aPerson, product;
  let quantity = 1;
  let productID;

  this.Given(/^that I'm in Systembolaget$/, function (callback) {
 	 
 	  if(app.users.includes("Arnold") == false) {
 		  aPerson = app.addUser('Arnold', 25);
 	  }
    callback();
  });
 
  this.When(/^I have decided what I want to buy$/, function (callback) {
 	  product = app.products[62];
    callback();
  });

	this.When(/^I have decided how much of a certain beverage I want$/, function (callback) {
	 	quantity = 1;
    callback();
  });

  this.When(/^I add a beverage in a cart$/, function (callback) {
 	  assert.doesNotThrow(function() {
      aPerson.shoppingCart.add(product, quantity);
      },
 	    "I can't add a beverage to the cart." 
    ); 

    callback();
  });

  this.Then(/^you have received your product in your cart$/, function (callback) {
    productID = product.artikelid;
    for( let i = 0; i < aPerson.shoppingCart.thingsToBuy.length; i++){
      if(productID === aPerson.shoppingCart.thingsToBuy[i].product.artikelid){
        console.log(product.namn);

      }
    }
    callback();
  });


}
