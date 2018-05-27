//var app = require('../../app.js');

module.exports = class AllaDrycker {

	constructor() {

    // 	 this.inBrowser = typeof window === 'object';

    // if(!this.inBrowser){ return; }
   
	  	let name = localStorage.getItem("userName");
        let age = localStorage.getItem("userAge");
        
   		if (!name || !age){
        	return
        }

	  	app.addUser(name, age/1);
	  	
	  	this.productsToDisplay = [];
	  	this.quantityOfProductOnPage = 0;
	 	this.quantityToShow = 50;
	 	this.totalQuantityInShoppingCart;

	 	
		this.hideFilters();

		// show the productlist "later" to prevent lag
		setTimeout(()=>{
			$('#productDescription').empty();
			let interval = setInterval(() => {

				if(!app.allProductsLoaded){ return; }
				clearInterval(interval);
				this.productsToDisplay = app.products;
				this.loadProducts();
			}, 100);
		}, 0);
	

		$("#showMore").click((e)=>{
			// Prevents a href from re-loading the website
			e.preventDefault();
			//this.showMoreProducts();
			this.loadProducts();
	 	});

	 	$("#sortOk").click(()=>{
	 		this.quantityOfProductOnPage = 0;

	 		let sortArray = [];
	 		
	 		if ($('#customRadio1').prop("checked"))
	 			sortArray = app.sortProducts("az", this.productsToDisplay);

	 		if ($('#customRadio2').prop("checked"))
	 			sortArray = app.sortProducts("za", this.productsToDisplay);

	 		if ($('#customRadio3').prop("checked"))
	 			sortArray = app.sortProducts("highPrice", this.productsToDisplay);

	 		if ($('#customRadio4').prop("checked"))
	 			sortArray = app.sortProducts("lowPrice", this.productsToDisplay);

	 		if ($('#customRadio5').prop("checked"))
	 			sortArray = app.sortProducts("land", this.productsToDisplay);

	 		this.productsToDisplay = sortArray;
	 		this.loadProducts();
	 	});
				 	

	} //constructor

	hideFilters(){

		$('#sortOptions').hide();
		$('#filterOptions').hide();

		$('#sortButton').click(function() {
			$('#sortOptions').show(200);	
		});

		$('#filterButton').click(function() {
			$('#filterOptions').show(200);	
		});

		$('#sorteringOK').click(function() {
			$('#sortOptions').hide(200);	
		});

		$('#filtreringOK').click(function() {
			$('#filterOptions').hide(200);	
		});	

	}
		

	loadProducts(){
	
		let $div = $('#productDescription');
	  	$div.empty();
	  	let products = this.productsToDisplay.slice(this.quantityOfProductOnPage); 

	  	// Check if this is a search and then let products be the result of the search instead
		let toSearchFor = decodeURIComponent(location.search.substr(location.search.indexOf('searchinput=') + 'searchinput='.length).split('&')[0]);
		if(toSearchFor){ 
			$('#search').val(toSearchFor);
			products = app.searchFunction(toSearchFor);
			$("#element3").hide();
		}
	
		let qty;

		if (products.length < this.quantityToShow)
			qty = products.length;
		else
			qty = this.quantityToShow;

		for (let i = 0; i < qty; i++) {
			$div.append(
				 '<div class="row pt-1 vertical-align bg-light">'
				+   '<div class="prodPicture col-lg-2 col-2">'
				+       '<img src="www/img/alcoholpic.jpg" alt="Picture">'
				+   '</div>'
				+   '<div id="prodName' + this.quantityOfProductOnPage + '" class="col-lg-3 col-10 text-center font-weight-bold">'
				+       '<p>' + products[i].namn + '</p>'
				+   '</div>'
				+   '<div id="prodAlcohol' + this.quantityOfProductOnPage + '" class="col-lg-2 col-4 text-center">'
				+       '<p>' + products[i].alkoholhalt + '  %</p>'
				+   '</div>'
				+   '<div id="prodCountry' + this.quantityOfProductOnPage + '" class="col-lg-2 col-4 text-center">'
				+       '<p>' + products[i].ursprunglandnamn + '</p>'
				+   '</div>'
				+   '<div id="prodPrice' + this.quantityOfProductOnPage + '" class="col-lg-1 col-4 text-center">'
				+       '<p>' + products[i].prisinklmoms + '  SEK </p>'
				+   '</div>'
				+   '<div class="col-lg-2 col-12 text-lg-right text-center">' 
				+   	'<button id = "addButton' + this.quantityOfProductOnPage + '" class="btn btn-secondary my-2 my-sm-0" type="button">Lägg till</button>'   
				+   '</div>'
				+   '<div id="prodId' + this.quantityOfProductOnPage + '" class="d-none">' 
				+   	'<p>' + products[i].artikelid +'</p>'   
				+   '</div>'
				+'</div>' //class="row"
	           
		    );

			let prodId = this.quantityOfProductOnPage;

			$("#addButton" + this.quantityOfProductOnPage).click(()=>{
				let i = $("#prodId"+prodId).text();
				this.addToCartClick(i/1);
			});
			
		    this.quantityOfProductOnPage++;
		    if (this.productsToDisplay.length == this.quantityOfProductOnPage)
				$("#element3").hide();		
		}		
	}// loadProducts()


	addToCartClick(i){ // i - product's article
		let ind = app.users[0].shoppingCart.findProductInArrayProducts(i);
		app.users[0].shoppingCart.add(app.products[ind], 1);
		
		// let prodQuantityInShoppingCart = 1;

		// let a = localStorage.getItem("amountInStorage"+i); //check if the chosen beverage is already in the cart
		// if (a != null)
		// {
		// 	prodQuantityInShoppingCart = a/1 + 1;
		// }
		
		// let name = $("#prodName"+i).text(); // Nils Oscar Alkoholfr
		// let price =$("#prodPrice"+i).text();// 15.9 SEK
		// price = price.replace("  SEK ", ""); // 15.9

		// localStorage.setItem(("nameInStorage"+i), name);
		// localStorage.setItem(("priceInStorage"+i), price);
		// localStorage.setItem(("amountInStorage"+i), prodQuantityInShoppingCart);
		

	}//addToCartClick()

} //class	