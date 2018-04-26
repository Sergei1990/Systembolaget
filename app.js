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
		this.users.push(new Person(name,age));
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


