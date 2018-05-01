// Require
//const express = require('express');
//const flexjson = require('jsonflex')();
//const compression = require('compression');

let Person = require('./person.js');
let Product = require('./product.js');
let Category = require('./category.js');
let ShoppingCart = require('./shopping-cart.js');

class App {

	constructor(){
		let productData = require('./json/sortiment.json');
		let categoryData = require('./json/categories.json');

		// Make instaces of product from the productData
		this.products = [];
		for(let p of productData){
		  this.products.push(new Product(p));
		}

		// make instaces of category from categoryData
		this.categories = [];
		for(let catName of categoryData){
			this.categories.push(new Category(catName, this.products));
		}
			//Make a dictinary based on category names
		this.categoryByName = {};
		for(let category of this.categories){
			this.categoryByName[category.name] = category;
		}

		//add a list of active/logged in users
		this.users = [];
	}

	addUser(name,age){
		let user = new Person(name,age);
		this.users.push(user);
		////////////////////////////////////////////////////////
		if (age < 20){/////////////////////////////////////////
			this.products = [];//////////////////////////////////////
			for(let p of productData){////////////////////////////////
				if ((p.alkoholhalt/1) <= 0.5)/////////////////////////
		    		this.products.push(new Product(p));////////////////////
			}
			this.categories = [];//////////////////////////////////////////
			for(let catName of categoryData){////////////////////////////////
				if (catName.includes("Alkoholfritt"))/////////////////////////////
				this.categories.push(new Category(catName, this.products));////////////////////////
			}
		}
		return user;
	}

	

	filterFunction(category, // name or null
    	   country,  // name or null
    	   availability, //true/false, null
    	   priceLevel) { // int level 1 - <=100, level 2 - (100-500], level 3 - (500-1000], level 4 - >1000  or null
		
		let filteredProducts = [];
		let productsForFiltrering = []; // == this.productss
		for(let p = 0; p < this.products.length; p++){
			productsForFiltrering.push(this.products[p]);
		}
	
		if (category !== null){
			let i = this.findNameInCategory(category);			
			for (let j = 0;  j < this.categories[i].products.length; j++){
				
				filteredProducts.push(this.categories[i].products[j]);				
			}
			productsForFiltrering = [];
			for (let p = 0; p < filteredProducts.length; p++){
				productsForFiltrering.push(filteredProducts[p]);
			}
		}

		if (country !== null){
			
			filteredProducts = [];			
			for (let j = 0;  j < productsForFiltrering.length; j++){
				if (productsForFiltrering[j].ursprunglandnamn == country)				
					filteredProducts.push(productsForFiltrering[j]);
			}
			productsForFiltrering = [];
			for (let p = 0; p < filteredProducts.length; p++){
				productsForFiltrering.push(filteredProducts[p]);
			}
		}

		if (availability === true){		
			filteredProducts = [];			
			for (let j = 0;  j < productsForFiltrering.length; j++){
				if (productsForFiltrering[j].iLager > 0)				
					filteredProducts.push(productsForFiltrering[j]);
			}
			productsForFiltrering = [];
			for (let p = 0; p < filteredProducts.length; p++){
				productsForFiltrering.push(filteredProducts[p]);
			}
		}

		if (availability === false){		
			filteredProducts = [];			
			for (let j = 0;  j < productsForFiltrering.length; j++){
				if (productsForFiltrering[j].iLager == 0)				
					filteredProducts.push(productsForFiltrering[j]);
			}
			productsForFiltrering = [];
			for (let p = 0; p < filteredProducts.length; p++){
				productsForFiltrering.push(filteredProducts[p]);
			}
		}

		if (priceLevel === 1){	//level 1 - <=100	
			filteredProducts = [];			
			for (let j = 0;  j < productsForFiltrering.length; j++){
				if (productsForFiltrering[j].prisinklmoms <= 100)				
					filteredProducts.push(productsForFiltrering[j]);
			}
			productsForFiltrering = [];
			for (let p = 0; p < filteredProducts.length; p++){
				productsForFiltrering.push(filteredProducts[p]);
			}
		}

		if (priceLevel === 2){	//level 2 - (100-500]	
			filteredProducts = [];			
			for (let j = 0;  j < productsForFiltrering.length; j++){
				if ((productsForFiltrering[j].prisinklmoms > 100) && (productsForFiltrering[j].prisinklmoms <= 500))				
					filteredProducts.push(productsForFiltrering[j]);
			}
			productsForFiltrering = [];
			for (let p = 0; p < filteredProducts.length; p++){
				productsForFiltrering.push(filteredProducts[p]);
			}
		}

		if (priceLevel === 3){	//level 3 - (500-1000]	
			filteredProducts = [];			
			for (let j = 0;  j < productsForFiltrering.length; j++){
				if ((productsForFiltrering[j].prisinklmoms > 500) && (productsForFiltrering[j].prisinklmoms <= 1000))				
					filteredProducts.push(productsForFiltrering[j]);
			}
			productsForFiltrering = [];
			for (let p = 0; p < filteredProducts.length; p++){
				productsForFiltrering.push(filteredProducts[p]);
			}
		}

		if (priceLevel === 4){	//level 4 - >1000	
			filteredProducts = [];			
			for (let j = 0;  j < productsForFiltrering.length; j++){
				if (productsForFiltrering[j].prisinklmoms > 1000)				
					filteredProducts.push(productsForFiltrering[j]);
			}
			productsForFiltrering = [];
			for (let p = 0; p < filteredProducts.length; p++){
				productsForFiltrering.push(filteredProducts[p]);
			}
		}

		//console.log("filteredProducts " + filteredProducts.length);//4121
		return filteredProducts;
    }

    findProductInCategory(productToFind){
    	for ( let i = 0; i < this.categories.length; i++){
                if(this.categories[i].product.artikelid === productToFind.artikelid){ // det går inte att jämföra två lika objekt om de har två olika adresser
                	return i;
        		}
        }
        return -1;
	}

	findNameInCategory(nameToFind){
		for ( let i = 0; i < this.categories.length; i++){
                if(this.categories[i].name === nameToFind){ 
                	return i;                	
        	}
        }
        return -1;
        //console.log( "index " + i);
    }
}



//Create an app to start the application
let app = new App();
module.exports = app;

//global.app = app;

//console.log(app.categoryByName["Öl från Tyskland"]);

//app.addUser("Anna", 25);
//app.users[0]
//console.log(app.users[0].shoppingCart.thingsToBuy);

// Create express server
//const app = express();

// Express middleware
//app.use(compression());
//app.use(flexjson);
//app.use(express.static('www'));

// Serve the index.html page on every request that
// doesn't have a file extension in its url
// (so that single page apps work on page reload)
//app.get(/^[^\.]*$/, (req, res) => {
 // res.sendFile(__dirname + '/www/index.html');
//});

// Start server
//const port = 3000;
//app.listen(port, () =>
//  console.log('Webserver listening on port', port)
//);


