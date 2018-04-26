let app = require('../app.js');
let Product = require('../product.js');
let Person = require('../person.js');
let ShoppingCart = require('../shopping-cart.js');

module.exports = function() {
	let name;
	let age;
	let sum1, sum2, sum3;
	let totalAmount;
	let foundThings = [];

	this.Given(/^that my name is "([^"]*)"$/, function (arg1, callback) {
        name = arg1; // Anna
        callback();
    });

    this.Given(/^I am (\d+) yers old$/, function (arg1, callback) {
        age  = arg1/1; //27
        callback();
    });

    this.When(/^I register  myself on the site$/, function (callback) {
        user = new Person(name, 27);
        app.users.push(user);                 
        callback();
    });

    this.Then(/^I recieve an empty shopping cart$/, function (callback) {
        assert (
        	user.shoppingCart !== undefined,
        	"User does not have a shopping cart after registration" 
        	);
        assert (
        	user.shoppingCart.thingsToBuy.length === 0,
        	"User's shopping cart is not empty after registration" 
        	);
        callback();
    });

//_______________________________Scenario 2 ______________________________________________

	this.Given(/^that I'm a registrered user with a legal age$/, function (callback) {
        user = new Person(name, 27);
        app.users.push(user); 
    	callback();
    });

    this.Given(/^I add (\d+) bottles of beverage with id (\d+) in my shopping cart$/, function (arg1, arg2, callback) {
        user.shoppingCart.add(app.products[arg2/1], arg1/1); // quantity: 5, 2, 9   index: 0, 1, 2
        if (arg2/1 == 0)
        	sum1 = app.products[arg2/1].prisinklmoms * (arg1/1);
        if (arg2/1 == 1)
        	sum2 = app.products[arg2/1].prisinklmoms * (arg1/1);
        if (arg2/1 == 2)
        	sum3 = app.products[arg2/1].prisinklmoms * (arg1/1);
        callback();
    });

    this.When(/^I oppen my shopping cart to see the total amount$/, function (callback) {
        totalAmount = user.shoppingCart.sum();
        callback();
    });

    this.Then(/^I can see the total amount for added items$/, function (callback) {
        assert(
        	totalAmount === sum1 + sum2 + sum3,
        	"The total amount in the shopping cart is wrong"
        );
        callback();
    });

//_______________________________Scenario 3 ______________________________________________

    this.When(/^I try to find the beverage with id (\d+) in my shopping cart$/, function (arg1, callback) {
    	foundThings = []; // ta bort den vara som vi letade efter i scenarion innan
    	//console.log("-------" + foundThings.length);
        //console.log("-------" + foundThings[0]);
        //console.log("-------" + foundThings[1]);
        // arg1 - index av beverage from array app.products
        foundThings.push(user.shoppingCart.findProductInCart(app.products[arg1/1]));
        callback();
    });

    this.Then(/^I can see just this item in the shopping cart's list$/, function (callback) {
        assert(
        	foundThings.length === 1,
        	"The system has found more products then it should"
        );

        assert(
        	foundThings[0] === 2,  // 2 är index av beverage i shopping.cart.thingsToBuy
        	"The system has found a wrong product"
        );
        callback();
    });

//_______________________________Scenario 4 ______________________________________________


	this.Then(/^the searching result is an empty list av found products in my shopping cart$/, function (callback) {
        // console.log("-------" + foundThings.length);
        // console.log("-------" + foundThings[0]);
        // console.log("-------" + foundThings[1]);
        assert(     
        	foundThings.length === 1,
        	"The system has found products which is not in the shopping cart"
        );

        assert(
        	foundThings[0] === -1,  // 2 är index av beverage i shopping.cart.thingsToBuy
        	"The index of the product which is not in the shopping cart is not -1"
        );
        callback();
    });

		
}