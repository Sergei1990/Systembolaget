let app = require('../app.js');
let ShoppingCart = require('../shopping-cart.js');
let Category = require('../category.js');

module.exports = function(){

  let article ;
  let search = app.products;
  let searchResult ; 
  let sortByName ;


	this.Given(/^that a user want to search a beverages by a specific name$/, function (callback) {

         callback();
       });

  this.When(/^the user writes the name of the beverage$/, function (callback) {
        
        let search = app.products;

        search = ["Fighting Cock"]     

         callback();
       });

  this.Then(/^the specific beverage turns up as the result$/, function (callback) {
         
         let match = "Fighting Cock"

            let result = search.filter( obj => {
              return Object.values( obj ).find( item => item == match );
            });

            //console.log(result);

         callback();
       });

  this.Given(/^that a customer search after all the beer in the online store$/, function (callback) {
        
          callback();
       });

  this.When(/^the customer writes beer in the searchfield$/, function (callback) {
         search = ["Öl"]
         callback();
       });

  this.Then(/^all the beers the onlie store have to offer shows$/, function (callback) {
         
         let search = app.products;

            let match = 'Öl'

            let result = search.filter( obj => {
              return Object.values( obj ).find( item => item == match );
            });

            //console.log(result);

         callback();
       });

  this.Given(/^that a user have a search result of all beer in the online store$/, function (callback) {
         
         let search = app.products;

            let match = 'Öl'

            let result = search.filter( obj => {
              return Object.values( obj ).find( item => item == match );
            });

            //console.log(result);

         callback();
       });

  this.When(/^the user sort by name$/, function (callback) {
                 
        callback();
       });

  this.Then(/^the search result list sorts after names$/, function (callback) {
         
         let search = app.products;


            let match = 'Öl'


            let result = search.filter( obj => {
              return Object.values( obj ).find( item => item == match );

              search.sort();
         
         });

            console.log(result);

         callback();
       });

}