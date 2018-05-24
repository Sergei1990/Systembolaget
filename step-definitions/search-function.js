let app = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');
let Category = require('../category.js');

module.exports = function(){

  let searchInput;
  let searchResult; 


	this.Given(/^that a user want to search a beverages by a specific name$/, function (callback) {
          searchInput = 'Renat';
         callback();
       });

  this.When(/^the user searches for the beverage$/, function (callback) {
    searchResult = app.searchFunction(searchInput);
         callback();
       });

  this.Then(/^the specific beverage turns up as the result$/, function (callback) {
    console.warn(searchResult);
        
         callback();
       });

  this.Given(/^that a customer search after all the beve in the online store$/, function (callback) {
         searchResult = app.products() 
          callback();
       });

  this.When(/^the customer writes beer in the searchfield$/, function (callback) {
         
         callback();
       });

  this.Then(/^all the beers the online store have to offer shows$/, function (callback) {


         callback();
       });

  this.Given(/^that a user have a search result of all beer in the online store$/, function (callback) {

         callback();
       });

  this.When(/^the user sort by name$/, function (callback) {
                 
        callback();
       });

  this.Then(/^the search result list sorts after names$/, function (callback) {
       

         callback();
       });

}