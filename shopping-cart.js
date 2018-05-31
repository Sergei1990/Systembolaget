var assert = require('assert');
var Product = require('./product.js');

module.exports = class ShoppingCart {
	
	constructor() {
		this.thingsToBuy = [];
				
	}

	add(product, quantity) {
		// check that the product is an instanceOF Product
		assert(
			product instanceof Product,
			"Product is not an instance of Product class."
		);

		// check that quantity is a possitive integer
		assert(
			quantity >= 1,
			"Quantity can't be less than 1"
		);

		// you can't add more products than we have in a store
		assert(
        	quantity <=  product.iLager,
        	'The available quantity of the beverage in the store is ' + product.iLager
        );

		// don't allow the product that is already in the cart, but change quantity
		let productID = product.artikelid;  // taking products id
		let productExists = false;

        for( let j = 0; j < this.thingsToBuy.length; j++) { // loop through thingsToBuy
        	if(productID === this.thingsToBuy[j].product.artikelid) { // comparing products ID that you add with the one that already exists
				this.thingsToBuy[j].quantity = this.thingsToBuy[j].quantity + quantity; // new quantity add with old quantity
				//this.changeQuantity(product, (this.thingsToBuy[i].quantity + quantity));
					
					for (let i = 0; i<localStorage.length; i++){
						if(localStorage.getItem("prodArticleSession"+i) == productID){
							localStorage.setItem(("prodQuantitySession"+i), this.thingsToBuy[j].quantity);
							break;
						}
					}
				
				productExists = true;
			}
	    }

		if(productExists === false) {
			let i;
			for (i = 0; i<localStorage.length; i++){
				if(!localStorage.getItem("prodArticleSession"+i)){
					break;
				}

			}
			localStorage.setItem(("prodArticleSession"+i), product.artikelid);
		
			localStorage.setItem(("prodQuantitySession"+i), quantity);
				this.thingsToBuy.push({
				product: product,
				quantity: quantity
			});	
				
		}

		//remove added quantity from the storehouse:
		product.iLager  = product.iLager - quantity;

		//desplay quantity of the added beverages on the cart's icon in the navbar
		let totalQuanBottlesSession = 0;
		for (let j = 0; j<localStorage.length; j++){
			if(localStorage.getItem("prodQuantitySession"+j)){
				totalQuanBottlesSession = totalQuanBottlesSession+(localStorage.getItem("prodQuantitySession"+j))/1;
			}
	    }
		if(totalQuanBottlesSession!=0){
			$('#basketQuantity').empty()
			$('#basketQuantity').text(totalQuanBottlesSession);
			$('#basketQuantity').show(200);
		}
	}

	findProductInCart(product) {
		for(let i = 0; i < this.thingsToBuy.length; i++) {
			if(this.thingsToBuy[i].product.artikelid === product.artikelid) { // det går inte att jämföra två lika objekt om de har två olika adresser
      //if(this.thingsToBuy[i].product === product){ // fel
				return i;
			}
		}
		return -1;
	}

	findProductInArrayProducts(article){
		for(let i = 0; i < app.products.length; i++) {
			if((app.products[i].artikelid/1) === article) {      
				return i;
			}
		}
		return -1;
	}

	changeQuantity(product, newQuantity) {
		assert(
			product instanceof Product,
			"Product is not an instance of Product class."
		);
		let index = this.findProductInCart(product);
		assert(index >= 0,"Cant change the quantity of a product not in the cart");

		if (this.thingsToBuy[index].quantity < newQuantity){
			assert(
				newQuantity - this.thingsToBuy[index].quantity <= product.iLager,
				"The available quantity of the beverage in the store is " + product.iLager
			);
			product.iLager = product.iLager - (newQuantity - this.thingsToBuy[index].quantity);
		}

		else{
			assert(
				newQuantity >= 1,
				"Quantity of the item in the shopping cart can't be less than 1",
			);

			product.iLager = product.iLager + (this.thingsToBuy[index].quantity - newQuantity);
		}

		this.thingsToBuy[index].quantity = newQuantity;
	}

	remove(product) {
		// console.log("app users " + app.users);
		// console.log("app products " + app.products);	
		let indexInCart = this.findProductInCart(product); //index of the product in the CART
		assert(indexInCart >= 0,"Cant remove a product not in the cart");

		assert(product instanceof Product, "The product is not an instance of Product class"); // one alternative
		//(app.products.includes(product), "Oh no! Not in app.products!"); // another alternative

		// If variabel app är global in app.js:
		//assert(global.app, "Can't find a global app :( Please require app ONCE before any other classes!");		

	    //return the products on the storehouse:
	    product.iLager = product.iLager + 1;
		
		//remove item from the cart if its quantity = 0
		if (this.thingsToBuy[indexInCart].quantity<1){
			this.thingsToBuy.splice(indexInCart, 1);
		}
		else{
			this.thingsToBuy[indexInCart].quantity--;
		}

		let totalQuanBottlesSession = 0;

		for (let i = 0; i<localStorage.length; i++){
			if(localStorage.getItem("prodArticleSession"+i) == product.artikelid){
				localStorage.setItem("prodQuantitySession" + i, this.thingsToBuy[indexInCart].quantity);    
			}
			totalQuanBottlesSession = totalQuanBottlesSession +(localStorage.getItem("prodQuantitySession"+i))/1;
		}
		if(totalQuanBottlesSession!=0){
			$('#basketQuantity').empty()
			$('#basketQuantity').text(totalQuanBottlesSession);
			$('#basketQuantity').show(200);
		}
	} //remove

	removeAllItems() {
		//this.thingsToBuy = [];
		// removing with returning the products in the storehouse
		//for (let thing of this.thingsToBuy){
		for (let i = this.thingsToBuy.length - 1; i >= 0; i--){				
			this.remove(this.thingsToBuy[i].product); 
	    }
	}

	sum() {
  // how much does everything cost
  // would we like a line sum as well?

	    let totalAmmount = 0;
	    for(let thing of this.thingsToBuy) {      
	      let ammountThing = thing.product.prisinklmoms * thing.quantity;
	      totalAmmount = totalAmmount + ammountThing;
	    }
	    return totalAmmount;
	}

	

}