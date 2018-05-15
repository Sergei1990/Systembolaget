let app = require('../app.js')
let ShoppingCart = require('../shopping-cart.js')

module.exports = function(){

let renat = app.products[0];
let user;


this.Given(/^a customer with an empty shopping cart$/, function (callback) {
        // öka antal av vald produkt
        user = app.addUser('Rutger', 97);

         callback();
       });

this.When(/^the custumer adds 10 Renat$/, function (callback) {
         // när knapp klickas på
		user.shoppingCart.add(renat, 10);

         callback();
       });

this.Then(/^the quantity of Renat should increase from zero to 10$/, function (callback) {
         // antal produkter ökar
         let indexOfBeverages = app.users[0].shoppingCart.findProductInCart(renat);
         let amountOfBeverages = app.users[0].shoppingCart.thingsToBuy[indexOfBeverages].quantity;

         assert(amountOfBeverages == 10);

         callback();
       });





this.Given(/^a customer with non-empty shopping cart$/, function (callback) {
         // minska antal av vald produkt
        user = app.addUser('Rutger', 97);
         app.users[0].shoppingCart.add(renat, 10);

       
         callback();
       });

 this.When(/^the customer clicks on reduce button$/, function (callback) {
         // när knapp klickas på
         
         app.users[0].shoppingCart.changeQuantity(renat, 9);

         callback();
       });


this.Then(/^the quantity of beverage should decrease from 10 to 9$/, function (callback) {
         // antal  produkter minskar
         let indexOfBeverages = app.users[0].shoppingCart.findProductInCart(renat);
         let amountOfBeverages = app.users[0].shoppingCart.thingsToBuy[indexOfBeverages].quantity;

         assert(amountOfBeverages == 9);

         callback();
       });



}