let app = require('../app.js');
let product = require('../product.js');
let Category = require('../category.js');

module.exports = function(){

	let search;
	let searchResult;
	let sortByPrice;
	let products = []


		products.sort();

		this.Given(/^that a customer want to sort products by names alphabetically after a search$/, function (callback) {
         search = app.products[1000178, 1000296, 1000369, 1000372]
         callback();
       });

       this.When(/^the customer sorts names alphabetically$/, function (callback) {
        
         callback();
       });

       this.Then(/^the site shows the beverages sorted by names alphabetically$/, function (callback) {
         app.products.sort();
         callback();
       });

       this.Given(/^that a customer sort products after price \(min to high\)$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.When(/^the customer sorts products after price$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.Then(/^all products sorts afer price from low to high$/, function (callback) {
         sortByPrice = [40, 100, 1, 5, 25, 10];
			sortByPrice.sort(function(a, b){return a - b});

			sortByPrice = [40, 100, 1, 5, 25, 10];
			sortByPrice.sort(function(a, b){return b - a});
         callback();
       });

       this.Given(/^that a user search after categories$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.Then(/^the search result list sorts after names in alphabetically order$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });


}





