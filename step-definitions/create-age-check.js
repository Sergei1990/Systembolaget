module.exports = function(){

let app = require('../app.js')
let Person = require('../person.js');

let age;
let legalAge=20;


this.Given(/^that a person is of legal age to buy alcohol$/, function (callback) {
        user = app.addUser('Maria', 21);

        //console.log(user)
         callback();
       });

this.When(/^the person enter the onlinestore$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

this.Then(/^an alert age\-check appears to click yes or no button if you are of legal age$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

this.Then(/^the person click yes to enter the site$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });


//Scenari 2 (age 15) and scenario 3 (age 25)

this.Given(/^that I am a registrered user with a known age of "([^"]*)"$/, function (arg1, callback) {
         user = app.addUser('Maria', age);
         callback();
       });

 this.When(/^I try to see products on the web site$/, function (callback) {
         products = app.products;
         callback();
       });

 this.Then(/^a warning should "([^"]*)" be displayed$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });






}