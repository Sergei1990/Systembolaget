module.exports = function(){

let app = require('../app.js')
let Person = require('../person.js');


let legalAge, underAge, person;



this.Given(/^that a person want to buy alcohol$/, function (callback) {
  legalAge = 20;
  callback();
});

this.When(/^he enters name and legal age$/, function (callback) {
  person = app.addUser("Klas", legalAge);
  callback();
});

this.Then(/^he can see all the beverages$/, function (callback) {
  assert(
  app.products.length === 18695,
  "User cant see all beverages"
  );
  callback();
});




this.Given(/^that a person want to buy non\-alcohol$/, function (callback) {
  underAge = 18;
  callback();
});

this.When(/^he enters name and age under (\d+)$/, function (arg1, callback) {
  person = app.addUser("Klas", underAge);       
  callback();
});

this.Then(/^he can only see the non\-alcoholic beverages$/, function (callback) {
 assert(
  app.products.length === 106,
  "Under age users can see all the products"
  );      
  callback();
});



}