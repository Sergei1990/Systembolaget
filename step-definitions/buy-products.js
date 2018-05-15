
let app = require('../app.js');

module.exports = function() {

	let user;
	let beverage1, beverage2;
	let quantity1, quantity2;
	let error;


	this.Given(/^that I am a quick-registrered user$/, function (callback) {
        user = app.addUser("Marek", 29);
        callback();
    });

	this.Given(/^there are (\d+) beverages with index (\d+) in my shopping cart$/, function (arg1, arg2, callback) {
        beverage1 = app.products[arg2/1];
        quantity1 = arg1/1;
        callback();
    });

    this.When(/^I click on the button Buy$/, function (callback) {
        try{
        	user.buyProducts();
		}
		catch(e){
            error = e; 
		}
		callback();        
    });

	
	 this.Then(/^I recieve a message that I need to enter my post adress in the profile to buy the products\.$/, function (callback) {
        assert(
         	error !== undefined, 
        	"The user bought products without complete registration"
        );
        callback(); 
    });

//----------------------------------------------SCENARIO 2 -------------------------------------------------

	this.Given(/^that I am a complete\-registrered user$/, function (callback) {
         user = app.addUser("Tomas", 29);
         user.postAdress = "Stockholm, Avägen 3";
         callback();
    });

    this.Given(/^I have (\d+) beverages with index (\d+) in my shopping cart$/, function (arg1, arg2, callback) {
        quantity2 = arg2/1;
        beverage2 = app.products[arg1/1];
        user.shoppingCart.add(beverage2, quantity2);
        callback();
    });

    this.Then(/^my shopping card is empty$/, function (callback) {
        assert(
        	user.shoppingCart.thingsToBuy.length === 0,
        	"The shoppig cart after buying should be empty!"
        );
        callback();
    });

    this.Then(/^the total amount in the shopping cart is (\d+)$/, function (arg1, callback) {
        assert(
        	user.shoppingCart.sum() === arg1/1,
        	"The total amount in the shopping cart should be 0 after buying!"
        );
        callback();
    });

    
}