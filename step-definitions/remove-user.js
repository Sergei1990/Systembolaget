app = require('../app.js');

module.exports = function() {

	let user;
	let quantityInStorageBefore1, quantityInStorageBefore2;
    let product1, product2;

    this.Given(/^that I am  a  registrered user$/, function (callback) {
        user = app.addUser("Marek", 29);
        user.postAdress = "Stockholm, Avägen 3";
        callback();
    });

    this.Given(/^there are (\d+) beverages with  index (\d+) in my shopping cart$/, function (arg1, arg2, callback) {
        
        if (arg2/1 == 0){
            product1 = app.products[arg2/1];
        	quantityInStorageBefore1 = product1.iLager;
        }
        if (arg2/1 == 1){
            product2 = app.products[arg2/1];
        	quantityInStorageBefore2 = product2.iLager;
        }
        user.shoppingCart.add(app.products[arg2/1], arg1/1);

        callback();
    });

    this.When(/^I click on the link Log out$/, function (callback) {
        app.removeUser(user);
        callback();
    });

    this.Then(/^the items in the shopping cart are returned into the storage$/, function (callback) {
        
        assert(
        	quantityInStorageBefore1 === product1.iLager &&
        	quantityInStorageBefore2 === product2.iLager,
        	"The items in the shoppig cart should be returned to the storage when user loggs out"
        );
        callback();
    });

    this.Then(/^the user is not registrered on the web\-site$/, function (callback) {

        assert(
            app.users.length == 0,
        	"The user is still existing after logging out"
        );
        assert(
            app.products.length == 0,
            "The products available for user are still existing after user's logging out"
        );
        assert(
            app.categories.length == 0,
            "The categories available for user are still existing after user's logging out"
        );
        callback();
    });



	
}