app = require('../app.js');

module.exports = function() {

	let user;
    let product;
    let quantityInCartBefore;
    let quantityInStorageBefore, quantityInStorageAfter;
    let quantityToChange;
    let error;
    let indexInCart;

    //-------------------SCENARIO 1 -----------------------(Add(product))---------------------------------------

     this.Given(/^that there is a user with a legal age on the site$/, function (callback) {        
        user = app.addUser("Vasja", 30);
        callback();
    });

    this.Given(/^user has (\d+) items with article (\d+) in the shopping cart$/, function (arg1, arg2, callback) {
        for (let p = 0; p < app.products.length; p++){
            if(app.products[p].artikelid == arg2/1)
                product = app.products[p];
                app.products[p].iLager = 92;
        }
       
        
        user.shoppingCart.add(product, arg1/1);
        quantityInCartBefore = arg1/1;
        callback();
    });

    this.Given(/^there are (\d+) bottles of the beverage in the storehouse$/, function (arg1, callback) {
        quantityInStorageBefore = arg1/1;
        product.iLager = quantityInStorageBefore;
        callback();
    });

    this.When(/^user add (\d+) items of the same beverage into the shopping cart$/, function (arg1, callback) {
        try{
            user.shoppingCart.add(product, arg1/1);   
        }
        catch(e){
            error = e;
        }
        quantityInStorageAfter = quantityInStorageBefore - arg1/1;
        callback();
    });

    this.Then(/^there are (\d+) items in the user's shopping cart$/, function (arg1, callback) {
        indexInCart = user.shoppingCart.findProductInCart(product);
        assert(
            user.shoppingCart.thingsToBuy[indexInCart].quantity == arg1/1,
            "The quantity of the item in the shopping cart is wrong after addind it"
        );
        callback();
    });

    this.Then(/^the quantity of the item in the storehouse decreased by (\d+)$/, function (arg1, callback) {
        assert(
            product.iLager == quantityInStorageAfter,
            "The quantity of the item in the storage is not decreased after adding the product into the shopping cart"
        );
        callback();
    });
//----------------------------------SCENARIO 2-------------------------------------------------------------------- 

    this.Then(/^the message displays that there are just (\d+) bottles of beverage in the storehose$/, function (arg1, callback) {
    
        assert(
            error != undefined,
            "User did not get the error that the quantity of the beverage is not enough in the storehose to add into the cart"   
        );
        callback();
    });

    this.Then(/^the quantity of the beverage in the shopping cart did not changed$/, function (callback) {
        indexInCart = user.shoppingCart.findProductInCart(product);
        
        assert(
            user.shoppingCart.thingsToBuy[indexInCart].quantity == quantityInCartBefore ||
            product.iLager == quantityInStorageBefore,
            "More items than there were in the storehose was added into the shopping cart"
        );
        
        callback();
    }); 

   //--------------------------------------------SCENARIO 3 (ChangeQuantity()) ------------------------------
   
    this.When(/^user changes the item's quantity to a new quantity "([^"]*)" in the shopping cart$/, function (arg1, callback) {
        quantityToChange = arg1/1;
        user.shoppingCart.changeQuantity(product, quantityToChange);
        callback();
    });  

    this.Then(/^there are "([^"]*)" items in the user's shopping cart$/, function (arg1, callback) {
        indexInCart = user.shoppingCart.findProductInCart(product);
        assert(
            user.shoppingCart.thingsToBuy[indexInCart].quantity == arg1/1,
            "The quantity in the shopping cart has been changed incorrectly"
        );
        callback();
    });

    this.Then(/^the quantity of the item  in the storage is "([^"]*)"$/, function (arg1, callback) {
        assert(
            product.iLager == arg1/1,
            "The item's quantity in the storage has been changed incorrectly after changing the quantity of the item in the shopping cart"
        );
        callback();
    });


  //---------------------------------SENARIO 4----------------------------------------------
  
    this.When(/^I change the quantity of the beverage in my shopping cart to (\d+)$/, function (arg1, callback) {
        error = undefined;
        quantityToChange = arg1/1;
         try{
            user.shoppingCart.changeQuantity(product, quantityToChange);   
        }
        catch(e){
            error = e;
        }
        callback();
    });  

    this.Then(/^an error message displays that there are just (\d+) bottles of beverage in the storehose$/, function (arg1, callback) {
        assert(
            error != undefined,
            "User did not get the error that the quantity of the beverage is not enough in the storehose to change the quantity in the cart"   
        );
        callback();        
    }); 

//---------------------------------SENARIO 5- (Remove())----------------------------------------------------
 
    this.When(/^i cklick on the Remove button of the item in the shopping cart$/, function (callback) {
        user.shoppingCart.remove(product);
        callback();
        quantityInStorageAfter = product.iLager;

    });

    this.Then(/^the shopping cart is empty$/, function (callback) {
        
        assert(
            user.shoppingCart.thingsToBuy.length === 0,
            "The item after removing from the shopping cart is still there"
        );

        callback();
    });

    this.Then(/^the quantity of the beverage in the storage increased by (\d+)$/, function (arg1, callback) {
        assert(
            quantityInStorageBefore + arg1/1 == quantityInStorageAfter,
            "The quantity of the item in the storage is not iscreased after removing the certain product from the shopping cart"
        );
        callback();
    });

//---------------------------------SENARIO 5-------(RemoveAllItems())----------------------------------------------
    let product1, product2;

    this.Given(/^user has (\d+) items with  article (\d+) in the shopping cart$/, function (arg1, arg2, callback) {
         for (let p = 0; p < app.products.length; p++){
            if(app.products[p].artikelid == arg2/1){
                if (arg2/1 == 1){
                    product1 = app.products[p];
                    app.products[p].iLager = 92;
                    user.shoppingCart.add(product1, arg1/1);
                } 
                if (arg2/1 == 1000005){
                    product2 = app.products[p];
                    app.products[p].iLager = 23;
                    user.shoppingCart.add(product2, arg1/1);
                }  
            } 
        }
       
        callback();
    });

    this.Given(/^there are (\d+) bottles of the beverage with article (\d+) in the storehouse$/, function (arg1, arg2, callback) {
         if (arg2/1 == 1){
            product1.iLager = arg1/1;
         }
         if (arg2/1 == 1000005){
            product2.iLager = arg1/1;
         }
        callback();
    });

    this.When(/^i cklick on the Clear Cart button of the item in the shopping cart$/, function (callback) {
        user.shoppingCart.removeAllItems();
        callback();
    });

    this.Then(/^the quantities of the items in the storage are (\d+) and (\d+) respectivly$/, function (arg1, arg2, callback) {
        assert(
            product1.iLager == arg1/1 && product2.iLager == arg2/1,
            "The quantities of the items in the storage are not iscreased correctly after removing all of the products from the shopping cart"
        );
        callback();
    });

  	
}