var assert = require('assert');
var Product = require('./product.js');

module.exports = class search {

  constructor(){
    this.searchFunction = app.allproducts;
  }

  search(word){
    // A simple for search throug all string properties of a product
    // and number properties converted to strings

    word = word.toLowerCase();

    return this.allproducts.filter(function(product){
      for(let key in product){
        let val = product[key];
        if(typeof val === 'number'){
          // convert number to string
          val += '';
        }
        // if still not a string do not search this property
        if(typeof val !== 'string'){ continue; }
        // check if the val includes the search word
        if(val.toLowerCase().includes(word)){
          return true;
        }
      }
      return false;
    });
  }

}

let search = new search();
console.log(app.search("Renat"));
console.log(app.search("2015"));
console.log(app.search("339"));
console.log(app.search("Italien"));