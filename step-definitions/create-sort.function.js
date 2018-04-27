let app = require('../app.js');
let products = require('../products.js');
let Category = require('../category.js');

module.exports = function(){

		this.Given(/^that a customer want to sort by names alphabetically after a search$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.When(/^the customer sorts names alphabetically$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.Then(/^the site shows the beverages sorted by names alphabetically$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.Given(/^that a customer sort products after price \(min to high\)$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.When(/^the customer sorts pproducts after price$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.Then(/^all products sorts afer price from low to high$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
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





