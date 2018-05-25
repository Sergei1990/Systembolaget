let app = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');
let Category = require('../category.js');
let Product = require('../product.js');

module.exports = function(){

  let allProducts=[];
  let searchInput;
  let searchResult; 
  let sortByName;
  

  allProducts.sort();

	this.Given(/^that a user want to search a beverages by a specific name$/, function (callback) {
          searchInput = 'Renat';
         callback();
       });

  this.When(/^the user searches for the beverage$/, function (callback) {
    searchResult = app.searchFunction(searchInput);
    assert(searchInput = searchResult, "Search result doesn't match. ");
         callback();
       });

  this.Then(/^the specific beverage turns up as the result$/, function (callback) {
    console.warn(searchResult);
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
    console.warn(Object.keys(app.allCategoryByName));
          let allBeveragesInTheCategoryBeer = app.allCategoryByName['Öl'].products;
          console.warn("allBevInCat", allBeveragesInTheCategoryBeer.length);
          console.warn("searchResult", searchResult.length);
          

          // VAD ÄR DET VI SKA KOLLA HÄR? ASSERTA?
          // SKA KATEGORIN ÖLS PRODUKTER VARA SAMMA SOM ALLA PRODUKTER NÄR MAN SÖKER PÅ ÖL
          // OM INTE VAD SKA VI DÅ JÄMFÖRA SÖKRESULTATET MED FÖR ATT VETA OM DET ÄR KORREKT?
          // SKA VI SKRIVA VÅR EGEN SÖKRUTIN I TESTET SOM SKA GE SAMMA RESULTAT SOM DENNA I PROGRAMMET?????

          // ELLER SKRIVA EN SMALA SÖKNING SOM VI VET DET EXAKTA FÖRVÄNTADE RESULTATET PÅ  "Anchor Steam"
          // OCH KAN JÄMFÖRA OM RÄTTA PRODUKTER HITTADES ???
         callback();
       });

  this.Given(/^that a user have a search result of all beer in the online store$/, function (callback) {
         searchResult = app.allCategoryByName['Öl'].products;
          console.log(searchResult);
         callback();
       });

  let sortedByName;
  this.When(/^the user searches by name$/, function (callback) {
        searchResult = app.searchFunction('Anchor Steam');
        callback();

       });
        

  this.Then(/^the search result list should be correct according to the sortiment$/, function (callback) {


        assert(searchResult.length === 1, "Didn't find exactly ONE Anchor Steam");
        assert(searchResult[0].namn === "Anchor Steam Beer",'Found the wrong product.');  

         callback();
       });

}