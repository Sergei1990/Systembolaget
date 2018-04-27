let app = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');
let Category = require('../category.js');

module.exports = function(){

  let article ;
  let search ;
  let searchResult ; 
  let sortByName ;

	this.Given(/^that a user want to search a beverages by a specific name$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

  this.When(/^the user writes the name of the beverage$/, function (callback) {
        app.products[342];        
         callback();
       });

  this.Then(/^the specific beverage turns up as the result$/, function (callback) {
         article = app.products[30030]
         callback();
       });

  this.Given(/^that a customer search after all the beer in the online store$/, function (callback) {
        app.categories[500];
          callback();
       });

  this.When(/^the customer writes beer in the searchfield$/, function (callback) {
         search = app.categories[500];
         callback();
       });

  this.Then(/^all the beers the onlie store have to offer shows$/, function (callback) {
         search = searchResult;
         callback();
       });

  this.Given(/^that a user have a search result of all beer in the online store$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

  this.When(/^the user sort by name$/, function (callback) {
                 
        callback();
       });

  this.Then(/^the search result list sorts after names$/, function (callback) {
         app.products = sortByName;
         callback();
       });

}