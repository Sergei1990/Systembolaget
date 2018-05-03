let app = require('../app.js');
let Product = require('../product.js');
let Person = require('../person.js');
let ShoppingCart = require('../shopping-cart.js');

module.exports = function() {
	let user;	
	let beverageAmount1, beverageAmount2, beverageAmount3;
	let quantityInStorehouseBefore1, quantityInStorehouseBefore2, quantityInStorehouseBefore3;
	let totalAmountBeforeRemoving;
	let productIDRemove1, productIDRemove2;


	this.Given(/^that I am a registrered user with a legal age$/, function (callback) {
	    user = app.addUser('Dasha', 27);                
        callback();	    
	});

	this.Given(/^there are (\d+) bottles of beverage with id (\d+) in my shopping cart$/, function (arg1, arg2, callback) {
        
        if (arg2/1 == 0){	    	
	    	beverageAmount1 = app.products[arg2/1].prisinklmoms * (arg1/1);
	    	quantityInStorehouseBefore1 = app.products[arg2/1].iLager;
	        user.shoppingCart.add(app.products[arg2/1], arg1/1);
        }

        if (arg2/1 == 1){	    	
	    	beverageAmount2 = app.products[arg2/1].prisinklmoms * (arg1/1);
	    	quantityInStorehouseBefore2 = app.products[arg2/1].iLager;
	        user.shoppingCart.add(app.products[arg2/1], arg1/1);
        }

         if (arg2/1 == 2){	    	
	    	beverageAmount3 = app.products[arg2/1].prisinklmoms * (arg1/1);
	    	quantityInStorehouseBefore3 = app.products[arg2/1].iLager;

            //console.log(" ILager before adding " + app.products[arg2/1].iLager);

	        user.shoppingCart.add(app.products[arg2/1], arg1/1);
	        totalAmountBeforeRemoving = user.shoppingCart.sum();

            //console.log("ILager after adding " + app.products[arg2/1].iLager);
        }

        //console.log(user.shoppingCart.thingsToBuy);       
        
        callback();
    });

    this.When(/^I click on the button Remove for beverages with id (\d+) and (\d+) in my cart$/, function (arg1, arg2, callback) {
        productIDRemove1 = arg1/1;
        productIDRemove2 = arg2/1;
        //console.log("ILager before removing " + app.products[2].iLager); ///////////////////////////////////
        user.shoppingCart.remove(app.products[productIDRemove1]);
        user.shoppingCart.remove(app.products[productIDRemove2]);
        //console.log("ILager after removing " + app.products[2].iLager);///////////////////////////////////////
        //console.log(user.shoppingCart.thingsToBuy);
        callback();
    });

    this.Then(/^these beverages are removed$/, function (callback) {
    	assert(
    		user.shoppingCart.findProductInCart(app.products[productIDRemove1]) == -1,
    		"The product with index " + productIDRemove1 + " is still in the cart after removing"
    	);

    	assert(
    		user.shoppingCart.findProductInCart(app.products[productIDRemove2]) == -1,
    		"The product with index " + productIDRemove2 + " is still in the cart after removing"
    	);
        callback();
    });

    this.Then(/^total ammount in the shopping cart is changed accordingly$/, function (callback) {
        assert(
        	user.shoppingCart.sum() == totalAmountBeforeRemoving - beverageAmount2 - beverageAmount3,
        	"The total ammount after removing from the shopping cart is wrong"
        ); 
        callback();
    });
// Function Add to cart doesn't remove quantity from the storehouse??????????????????????????????????????????????
    this.Then(/^these beverges are returned into the storehouse$/, function (callback) {
         assert(
        	app.products[productIDRemove1].iLager == quantityInStorehouseBefore2 &&
        	app.products[productIDRemove2].iLager == quantityInStorehouseBefore3,
        	"The quantity of the products after removing were not returned into the storehouse (iLager)"
        ); 
        callback();
    });

    // ___________________________________ SCENARIO 2 ___________________________________________________

    this.When(/^I click on the button Clear Cart$/, function (callback) {
  
        user.shoppingCart.removeAllItems();
        callback();
    });

    this.Then(/^all the beverages are removed$/, function (callback) {

        assert(
            user.shoppingCart.thingsToBuy.length === 0,
            "The cart is NOT empty after removing all of the items"
        );
        callback();
    }); 

    this.Then(/^total ammount in the shopping cart is (\d+)$/, function (arg1, callback) {
        assert(
            user.shoppingCart.sum() == 0,
            "Total amount in the shopping cart after removing all of the items is not 0"    
        );
        callback();
    });


}