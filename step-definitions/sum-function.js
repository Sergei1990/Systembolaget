let app = require('../app.js');
// let Product = require('../product.js');
// let Person = require('../person.js');

module.exports = function() {
	let user;
	let b1, b2, b3;
	let totalSum;

 	this.Given(/^that I am a registrered user with a legal  age$/, function (callback) {

 		user = app.addUser("Micke", 23);        
        callback();
        
    });

    this.Given(/^my shopping cart is empty$/, function (callback) {

        user.shoppingCart.thingsToBuy = [];
        callback();

    });

    this.When(/^I add three different beverages in my shopping cart, (\d+), (\d+), (\d+) in number accordingly$/, function (arg1, arg2, arg3, callback) {
        
        b1 = app.products[0];
        b2 = app.products[1];
        b3 = app.products[2];

        user.shoppingCart.add(b1, arg1/1);
        user.shoppingCart.add(b2, arg2/1);
        user.shoppingCart.add(b3, arg3/1);

        totalSum = b1.prisinklmoms * (arg1/1) + b2.prisinklmoms * (arg2/1) + b3.prisinklmoms * (arg3/1);
        callback();
    });

    this.Then(/^I can see the the calculated total amount for the goods in my shopping cart$/, function (callback) {

        assert(
            totalSum === user.shoppingCart.sum(),
            "Total amount was calculated incorrectly"
        );

        callback();
    });


}