let app = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');
let Category = require('../category.js');
let Product = require('../product.js');

module.exports = function(){

  let searchInput;
  let searchResult; 
  let sortByName();

	this.Given(/^that a user want to search a beverages by a specific name$/, function (callback) {
          searchInput = 'Renat';
          console.log(searchInput);
         callback();
       });

  this.When(/^the user searches for the beverage$/, function (callback) {
    searchResult = app.searchFunction(searchInput);
    console.log(searchResult);
    assert(searchInput = searchResult, "Search result doesn't match. ");
         callback();
       });

  this.Then(/^the specific beverage turns up as the result$/, function (callback) {
    console.warn(searchResult);
    console.log(searchResult);
         assert(searchInput = searchResult, "Search result doesn't match. ");
         callback();
       });

  this.Given(/^that a customer search after all the alcoholfree products in the online store$/, function (callback) {
         searchResult = app.products;
          callback();
       });

  this.When(/^the customer writes beer in the searchfield$/, function (callback) {
         searchInput = 'Öl';
         
         callback();
       });

  this.Then(/^all the beers the online store have to offer shows$/, function (callback) {
          searchResult = app.allCategories['Öl'];
          console.log(app.searchFunction("Öl"));

         callback();
       });

  this.Given(/^that a user have a search result of all beer in the online store$/, function (callback) {
         searchResult = app.allCategories['Öl'];
          console.log(searchResult);
         callback();
       });

  this.When(/^the user sort by name$/, function (callback) {
          let sortByName = searchResult;  
        callback();
       });

  this.Then(/^the search result list sorts after names$/, function (callback) {
             assert(sortByName = searchResult, "Search result doesn't match. ");

         callback();
       });

}