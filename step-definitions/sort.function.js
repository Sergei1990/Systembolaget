let app = require('../app.js');
let product = require('../product.js');
let Category = require('../category.js');

module.exports = function(){

	let search;
	let searchResult;
	let sortByPrice;
	let products = []
  let categories = []
  let sortByName;


		products.sort();

		this.Given(/^that a customer want to sort products by names alphabetically after a search$/, function (callback) {
         search = app.products;
         callback();
       });

       this.When(/^the customer sorts names alphabetically$/, function (callback) {
        
        let sortByName = app.products;  

         callback();
       });

       this.Then(/^the site shows the beverages sorted by names alphabetically$/, function (callback) {
         
         let sortByName = app.products;

         cmp = function(x, y){
              return x > y ? 1 : x < y ? -1 : 0; 
          };

          
          sortByName.sort(function(a, b){
              
              return cmp( 
                  [cmp(a.namn, b.namn), -cmp(a.varnummer, b.varnummer)], 
                  [cmp(b.namn, a.namn), -cmp(b.varnummer, a.varnummer)]
                    );
                      });

            let match = 'Cognac'

            let result = sortByName.filter( obj => {
              return Object.values( obj ).find( item => item == match );
            });

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
         
          let sortByPrice = app.products;

         cmp = function(x, y){
              return x > y ? 1 : x < y ? -1 : 0; 
          };

          
          sortByPrice.sort(function(a, b){
              
              return cmp( 
                  [cmp(a.prisinklmoms, b.prisinklmoms), -cmp(a.varnummer, b.varnummer)], 
                  [cmp(b.prisinklmoms, a.prisinklmoms), -cmp(b.varnummer, a.varnummer)]
                    );
                      });

            let match = 'Cognac'

            let result = sortByPrice.filter( obj => {
              return Object.values( obj ).find( item => item == match );
            });

            //console.log(result);


         callback();
       });

       this.Given(/^that a user search after categories$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

       this.Then(/^the search result list sorts after names in alphabetically order$/, function (callback) {
         
         let sortCategory = app.categories; 

         let match = 'Rött vin från Spanien'

            let result = sortCategory.filter( obj => {
              return Object.values( obj ).find( item => item == match );
            });

            //console.log(result);



         callback();
       });


}





