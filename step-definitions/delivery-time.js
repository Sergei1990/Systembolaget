let app = require('../app.js');
let ShoppingCart = require('../shopping-cart.js')

module.exports = function(){

	let shoppingCart;
	let beverages;
	let quantity;
  let user;


this.Given(/^that a user have selected an amout of beverages in to the shopping cart$/, function (callback) {
		
         callback();
       });

this.When(/^the user click on the shopping cart all the selected beverages appears$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

this.When(/^a notice if an article is out of stock shows$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

this.Then(/^the user can see when it will be available again$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });






this.Given(/^that the beverage is not in stock$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(quantity = 0);
       });

this.When(/^a customer wants to add to cart$/, function (callback) {
        user = app.addUser('Märta', 22);
        app.users[0].shoppingCart.add(80, quantity); //adds product nr 80, quantity is set to zero.
         callback();
       });

this.Then(/^a warning should be shown if the beverage is not in stock$/, function (callback) {
         // kolla om varning fungerar
         callback();
       });

this.Then(/^give information of a new date when beverage is in stock$/, function (callback) {
        // setTime() 
        // let d = new Date();
		//d.setTime(1332403882588);
         callback();
       });






this.Given(/^that a user have selected a beverage in to the shopping cart$/, function (callback) {
	
         callback();
       });

this.When(/^the user click on the shopping cart to see delivery time$/, function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback();
        });

this.Then(/^a stock status show that the beverage is in stock$/, function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback();
        });

this.Then(/^when it will be delivered$/, function (callback) {
          // Write code here that turns the phrase above into concrete actions
          callback();
        });







}