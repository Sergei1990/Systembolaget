// Require
//const express = require('express');
//const flexjson = require('jsonflex')();
//const compression = require('compression');

var Person = require('./person.js');
var Product = require('./product.js');
var Category = require('./category.js');
var ShoppingCart = require('./shopping-cart.js');
var AllaDrycker = require('./www/js/allaDrycker.js');
var StartPage = require('./www/js/startPage.js');
var Varukorg = require('./www/js/varukorg1.js')

class App {

	constructor() {

		// emulate som frontend only objects in Node.js
		// so that our tests doesn't break
		if(typeof window === "undefined"){
			// we are running in Node.js
			global.localStorage = {
				getItem : function(){},
				setItem : function(){},
				clear: function(){}
			};
		}

		let productData;
		let categoryData;

		if (typeof window !== 'undefined') {
			(async ()=>{
				productData = await require('./json/sortiment.json');
				categoryData = await require('./json/categories.json');
				this.constructorContinued(productData, categoryData);
			})();
		} else {
			productData = require('./json/sortiment.json');
			categoryData = require('./json/categories.json');
			this.constructorContinued(productData, categoryData);
		}
	}

	constructorContinued(productData, categoryData){

		this.products = []; // user's available products
		this.categories = []; //user's available categories
		this.categoryByName = {};//user's dictionary

		// Make instaces of product from the productData
		this.allProducts = []; //18695 - length 
		for(let p of productData){
			this.allProducts.push(new Product(p));
		}

		// make instaces of category from categoryData
		this.allCategories = [];  // 587 - length
		for(let catName of categoryData){
			this.allCategories.push(new Category(catName, this.allProducts));
		}

		this.allCategoryByName = {};
		//Make a dictinary based on category names
		for(let category of this.allCategories){
			this.allCategoryByName[category.name] = category;
		}

		this.users = [];
		
		new AllaDrycker();
		new StartPage();
		new Varukorg();

		this.fillCartFromSession();

		
		// Don't run in node js
		if(typeof window !== "object"){ return; }
  this.inBrowser = typeof window === 'object';
    $("#logUtLink").click(()=>{
			this.removeUser(app.users[0]);
    if(!this.inBrowser){ return; }
		
		});

		$(document).ready(function(){
        $("#myModal").modal({show: true, backdrop: 'static', keyboard: false});

		});
	} //constructorContinued

	addUser(name,age){
		let user = new Person(name,age);
		this.users.push(user);

		// create list of products and categories for user

		this.products = []; // user's available products
		this.categories = []; //user's available categories
		this.categoryByName = {};//user's dictionary

		if (age < 20){ //create user's restricted list of products
			for(let p of this.allProducts){
				if ((p.alkoholhalt/1) <= 0.5)
						this.products.push(p);//106 - length
			}
			
			for(let cat of this.allCategories){
				if (cat.name.includes("Alkoholfritt"))
					this.categories.push(cat);// 16 - length
			}
		}
		else{ // create full list of products and categories for user with legal age:            
			for(let p of this.allProducts){
					this.products.push(p); //18695 - length
			}
			// make instaces of category from categoryData
			for(let cat of this.allCategories){ 
				this.categories.push(cat);// 587 length
			}
		}

		//Make a dictinary based on category names
		this.categoryByName = {};
		for(let category of this.categories){
			this.categoryByName[category.name] = category;
		}
		return user;

		
		
	}   

	removeUser(user){ //log out

		user.shoppingCart.removeAllItems();
		localStorage.clear();
		this.products = [];
		this.categories = [];
		this.users = [];
		this.categoryByName = {};
	}

	searchFunction(word){
    // A simple for search throug all string properties of a product
    // and number properties converted to strings

    word = word.toLowerCase();

    return this.allProducts.filter(function(product){
      for(let key in product){
        let val = product[key];
        if(typeof val === 'number'){
          // convert number to string
          val += '';
        }
        // if still not a string do not search this property
        if(typeof val !== 'string'){ continue; }
        // check if the val includes the search word
        if(val.toLowerCase().includes(word)){
          return true;
        }
      }
      return false;

 return this.allCategories.filter(function(product){
      for(let key in product){
        let val = product[key];
        if(typeof val === 'number'){
          // convert number to string
          val += '';
        }
        // if still not a string do not search this property
        if(typeof val !== 'string'){ continue; }
        // check if the val includes the search word
        if(val.toLowerCase().includes(word)){
          return true;
        }
      }
      return false;

    });
  })

}






	filterFunction(category, // name or null (array of strings or null)
						 country,  // name or null (array of strings or null)
						 isInStore, //true/false, null (array of booleans or null)
						 priceLevel) { // level 1 - <=100, level 2 - (100-500], level 3 - (500-1000], level 4 - >1000  or null
								 // array of int or null        

		let filteredProducts = [];
		let productsForFiltrering = []; // == this.productss
		for(let p = 0; p < this.products.length; p++){
			productsForFiltrering.push(this.products[p]);
		}

		assert(
			category === null ||category.constructor === Array,
			"Variable category in the filtering function should be an array of strings or null"
		);


		if (category !== null){
			for (let c = 0; c < category.length; c++){
				let i = this.findNameInCategory(category[c]);           
				for (let j = 0;  j < this.categories[i].products.length; j++){
					
					filteredProducts.push(this.categories[i].products[j]);              
				}               
			}
			productsForFiltrering = [];
				for (let p = 0; p < filteredProducts.length; p++){
					productsForFiltrering.push(filteredProducts[p]);
			}
		}

		assert(
			country === null || country.constructor === Array,
			"Variable country in the filtering function should be an array of strings or null"
		);
		if (country !== null){
			
			filteredProducts = [];
			for (let c = 0; c < country.length; c++){           
				for (let j = 0;  j < productsForFiltrering.length; j++){
					if (productsForFiltrering[j].ursprunglandnamn == country[c])                
						filteredProducts.push(productsForFiltrering[j]);
				}
			}
			productsForFiltrering = [];
			for (let p = 0; p < filteredProducts.length; p++){
				productsForFiltrering.push(filteredProducts[p]);
			}
		}

		assert(
			isInStore === null || isInStore.constructor === Array,
			"Variable isInStore in the filtering function should be an array of booleans or null"
		);
		if (isInStore !== null){
			filteredProducts = [];
			for (let i = 0; i < isInStore.length; i++){
					if (isInStore[i] === true){                         
					for (let j = 0;  j < productsForFiltrering.length; j++){
						if (productsForFiltrering[j].iLager > 0)                
							filteredProducts.push(productsForFiltrering[j]);
					}
				}
				if (isInStore[i] === false){                    
					for (let j = 0;  j < productsForFiltrering.length; j++){
						if (productsForFiltrering[j].iLager == 0)               
							filteredProducts.push(productsForFiltrering[j]);
					}
				}
				productsForFiltrering = [];
				for (let p = 0; p < filteredProducts.length; p++){
					productsForFiltrering.push(filteredProducts[p]);
				}
			}
		}

		assert(
			priceLevel === null || priceLevel.constructor === Array,
			"Variable priceLevel in the filtering function should be an array of integers or null"
		);
		
		if (priceLevel !== null){
			filteredProducts = [];
			for (let pl = 0; pl < priceLevel.length; pl++){

				if (priceLevel[pl] === 1){  //level 1 - <=100                           
					for (let j = 0;  j < productsForFiltrering.length; j++){
						if (productsForFiltrering[j].prisinklmoms <= 100)               
							filteredProducts.push(productsForFiltrering[j]);
					}
				}
				
				if (priceLevel[pl] === 2){  //level 2 - (100-500]                       
					for (let j = 0;  j < productsForFiltrering.length; j++){
						if ((productsForFiltrering[j].prisinklmoms > 100) && (productsForFiltrering[j].prisinklmoms <= 500))                
							filteredProducts.push(productsForFiltrering[j]);
					}           
				}

				if (priceLevel[pl] === 3){  //level 3 - (500-1000]                          
					for (let j = 0;  j < productsForFiltrering.length; j++){
						if ((productsForFiltrering[j].prisinklmoms > 500) && (productsForFiltrering[j].prisinklmoms <= 1000))               
							filteredProducts.push(productsForFiltrering[j]);
					}           
				}

				if (priceLevel[pl] === 4){  //level 4 - >1000               
					for (let j = 0;  j < productsForFiltrering.length; j++){
						if (productsForFiltrering[j].prisinklmoms > 1000)               
							filteredProducts.push(productsForFiltrering[j]);
					}
				// 
				}
			}
			productsForFiltrering = [];
			for (let p = 0; p < filteredProducts.length; p++){
				productsForFiltrering.push(filteredProducts[p]);
			}
		}   
		//console.log("filteredProducts " + filteredProducts.length);
		return filteredProducts;
		}


 //function is WRONG: this.categories[i].productS - is also array!
 //    findProductInCategory(productToFind){  // function doesn't work (return just first category but not all)
 //     for ( let i = 0; i < this.categories.length; i++){
 //                if(this.categories[i].product.artikelid === productToFind.artikelid){ // det går inte att jämföra två lika objekt om de har två olika adresser
 //                 return i;
 //             }
 //        }
 //        return -1;
	// }


	checkProductIsInCategory(categoryName, productToFind){
			let ind = this.findNameInCategory(categoryName);    
		for (let i = 0; i < this.categories[ind].products.length; i++){ 
			if(this.categories[ind].products[i].artikelid === productToFind.artikelid){ 
							return true;
				}
			}           
				return false;
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

	fillCartFromSession(){

		// Don't run in node js
		if(typeof window !== "object"){ return; }

		// Fill thingsToBuy array with the products from the lockalStorage:
		let totalQuanArticlesSession = 0;
		let totalQuanBottlesSession = 0;
		do{
			if (localStorage.getItem("prodArticleSession"+totalQuanArticlesSession)){
			// 	break;
			// }
				let prodArt = localStorage.getItem("prodArticleSession"+totalQuanArticlesSession);
				let ind = this.users[0].shoppingCart.findProductInArrayProducts(prodArt/1);
				let quan = localStorage.getItem("prodQuantitySession"+totalQuanArticlesSession)/1;
				this.users[0].shoppingCart.thingsToBuy.push({product: app.products[ind],
															 quantity: quan
														    });	
				app.products[ind].iLager = app.products[ind].iLager - quan; 								    						
				totalQuanBottlesSession = totalQuanBottlesSession + quan;	
			}
			totalQuanArticlesSession++;
		}while(totalQuanArticlesSession<localStorage.length+1)

		//fill the icon of the Shopping Cart in the navbar:
		if (totalQuanBottlesSession == 0){
			$('#basketQuantity').hide();
		}
		else{
			$('#basketQuantity').text(totalQuanBottlesSession);
			$('#basketQuantity').show(200);
		} 
	}
}


//1. Create an app to start the application
let app = new App();
module.exports = app;
// 2. Ask the user about the quick registration to see the products list (new Person(name, age))



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


