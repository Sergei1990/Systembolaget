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
	  	document.getElementById("logname").innerHTML = localStorage.getItem("userName");
	  	
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
				this.loadFilters(); //////////////////////////////////////////////////////////////////////
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
	 		$('#productDescription').empty();

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

	 	$("#customCheck2").click(()=>{
            if ($('#customCheck2').prop("checked"))     
        		$("#pricesListFilter").show(200);
        	else
        		$("#pricesListFilter").hide(200);    
        });

        $("#customCheck3").click(()=>{
            if ($('#customCheck3').prop("checked"))     
        		$("#categoriesListFilter").show(200);
        	else
        		$("#categoriesListFilter").hide(200);    
        });

        $("#customCheck4").click(()=>{
            if ($('#customCheck4').prop("checked"))     
        		$("#countriesListFilter").show(200);
        	else
        		$("#countriesListFilter").hide(200);    
        });

        $('#filtreringOK').click(()=>{
        	$('#filterOptions').hide(200);
			$("#countriesListFilter").hide(200);
			$("#categoriesListFilter").hide(200);
			$("#pricesListFilter").hide(200);
        	this.filterWithOptions();	
		});	
				 	

	} //constructor

	hideFilters(){

		$('#sortOptions').hide();
		$('#filterOptions').hide();
		$("#countriesListFilter").hide();
		$("#categoriesListFilter").hide();
		$("#pricesListFilter").hide();

		$('#sortButton').click(function() {
			$('#sortOptions').show(200);
		});

		$('#filterButton').click(function() {
			$('#filterOptions').show(200);
			if ($('#customCheck2').prop("checked"))   
        		$("#pricesListFilter").show(200);
        	if ($('#customCheck3').prop("checked"))    
        		$("#categoriesListFilter").show(200);
        	if ($('#customCheck4').prop("checked"))     
        		$("#countriesListFilter").show(200);	
		});

		$('#sorteringOK').click(function() {
			$('#sortOptions').hide(200);	
		});
	}
		

	loadProducts(){
	
		let $div = $('#productDescription');

	  	let products; 

	  	// Check if this is a search and then let products be the result of the search instead
		let toSearchFor = decodeURIComponent(location.search.substr(location.search.indexOf('searchinput=') + 'searchinput='.length).split('&')[0]);
		if(toSearchFor){ 
			$('#search').val(toSearchFor);
			products = app.searchFunction(toSearchFor);
			$('#productDescription').empty();
			this.quantityOfProductOnPage = 0;
			$("#element3").hide();
		}
		else{
			products = this.productsToDisplay.slice(this.quantityOfProductOnPage); 
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
			else
				$("#element3").show();

		} //for	

		console.log("this.quantityOfProductOnPage", this.quantityOfProductOnPage);
console.log("this.productsToDisplay.length", this.productsToDisplay.length);	
	}// loadProducts()


	addToCartClick(i){ // i - product's article
		let ind = app.users[0].shoppingCart.findProductInArrayProducts(i);
		app.users[0].shoppingCart.add(app.products[ind], 1);
	}//addToCartClick()

	loadFilters(){

		//Categories categoriesListFilter
		let categoriesInFiltering = [];
		categoriesInFiltering.push(app.categories[0].name);
		for (let i = 1; i < app.categories.length; i++){
			let nameExist = false;
			let potentName = app.categories[i].name;
			for (let j = categoriesInFiltering.length-1; j < categoriesInFiltering.length; j++){
				if(potentName.includes(categoriesInFiltering[j])){
					nameExist = true;
					break;
				}

				if (nameExist == false){
					categoriesInFiltering.push(potentName);
					break
				}
			}
		}
		
			$("#categoriesListFilter").append(
			     '<div class="mb-1 col-lg-12">Välj katerorier:</div>' 
			    +'<div class="col-lg-12">' 
				+   '<fieldset>'     
				+      '<div id="catLF" class="form-group col-lg-12">'
				+      '</div>' //class="form-group col-lg-12"
				+   '</fieldset>' 
				+'</div>' // div class="col-lg-12"
			); 

			
			for (let i = 0; i < categoriesInFiltering.length; i++) {
				$("#catLF").append(	
					  '<div class="custom-control custom-checkbox  d-lg-inline-block align-top col-lg-3">'
					+     '<input type="checkbox" class="custom-control-input" id="catCustomCheck' + i + '">'
	                +     '<label id="labCatCustomCheck' + i + '" class="custom-control-label" for="catCustomCheck' + i + '">' + categoriesInFiltering[i] + '</label>'	
					+'</div>'
				);
			}

            //Prices pricesListFilter
			$("#pricesListFilter").append(
			     '<div class="col-lg-12 mb-1">Välj priser:</div>'  
			    +'<div class="col-lg-12">' 
				+   '<fieldset>'     
				+      '<div class="form-group col-lg-12">'				
				+         '<div class="custom-control custom-checkbox col-lg-3 d-lg-inline-block">'
				+           '<input type="checkbox" class="custom-control-input" id="prCustomCheck0">'
                +           '<label class="custom-control-label" for="prCustomCheck0">  <=100 SEK  </label>'	
				+         '</div>'
				+         '<div class="custom-control custom-checkbox col-lg-3 d-lg-inline-block">'
				+           '<input type="checkbox" class="custom-control-input" id="prCustomCheck1">'
                +           '<label class="custom-control-label" for="prCustomCheck1">  100 - 500 SEK  </label>'	
				+         '</div>'
				+         '<div class="custom-control custom-checkbox col-lg-3 d-lg-inline-block">'
				+           '<input type="checkbox" class="custom-control-input" id="prCustomCheck2">'
                +           '<label class="custom-control-label" for="prCustomCheck2">  500 - 1000 SEK  </label>'	
				+         '</div>'
				+         '<div class="custom-control custom-checkbox col-lg-3 d-lg-inline-block">'
				+           '<input type="checkbox" class="custom-control-input" id="prCustomCheck3">'
                +           '<label class="custom-control-label" for="prCustomCheck3">  >1000 SEK  </label>'	
				+         '</div>'
				+      '</div>' //class="form-group col-lg-12"
				+   '</fieldset>' 
				+'</div>' // div class="col-lg-12"
	        ); 
	    
			//Countries countriesListFilter
			let countriesInFiltering = [];
			countriesInFiltering.push(app.products[0].ursprunglandnamn);
			for (let i = 1; i < app.products.length; i++){
				let countryExist = false;
				let potentCountry = app.products[i].ursprunglandnamn;
				for (let j = 0; j < countriesInFiltering.length; j++){
					if (potentCountry == countriesInFiltering[j]){
						countryExist = true;
						break;
					}
				}
					if (countryExist == false){
						countriesInFiltering.push(potentCountry);
					}			
			}

			countriesInFiltering.sort();


			$("#countriesListFilter").append(
			    '<div class="mb-1 col-lg-12">Välj länder:</div>'
			    +'<div class="col-lg-12">' 
				+   '<fieldset>'     
				+      '<div id="clf" class="form-group col-lg-12">'

				+      '</div>' //class="form-group col-lg-12"
				+   '</fieldset>' 
				+ '</div>' // div class="col-lg-12"
			); 

			
			for (let i = 0; i < countriesInFiltering.length; i++) {
				$("#clf").append(	
				  '<div class="custom-control custom-checkbox d-lg-inline-block align-top col-lg-2">'
				+     '<input type="checkbox" class="custom-control-input" id="countryCustomCheck' + i + '">'
                +     '<label id="labCountryCustomCheck' + i + '" class="custom-control-label" for="countryCustomCheck' + i + '">' + countriesInFiltering[i] + '</label>'	
				+'</div>'
				);
			}
	} //loadFilters


	filterWithOptions(){

		this.quantityOfProductOnPage = 0;
		$('#productDescription').empty();

		let categoryOption = [];  // name or null (array of strings or null)
		let countryOption = [];   // name or null (array of strings or null)
		let inStore = [];  //true/false, null (array of booleans or null)
		let priceLevel = []; // level 1 - <=100, level 2 - (100-500], level 3 - (500-1000], level 4 - >1000  or null
							 // array of int or null
		let filteredProducts = [];

        // categories
		if ($("#customCheck3").prop("checked")){
			
			let quantityOfCategories = $("#catLF").children().length;
			for(let i = 0; i<quantityOfCategories; i++){
				if ($("#catCustomCheck"+i).prop("checked")){
					let categoryToPush = $("#labCatCustomCheck"+i).text();
					categoryOption.push(categoryToPush);
				}
			}
		}
		else{
			categoryOption = null;
		}

		// countries
		if ($("#customCheck4").prop("checked")){
		
			let quantityOfCountries = $("#clf").children().length;
			for(let i = 0; i<quantityOfCountries; i++){
				if ($("#countryCustomCheck"+i).prop("checked")){
					let countryToPush = $("#labCountryCustomCheck"+i).text();
					countryOption.push(countryToPush);
				}
			}
		}
		else{
			countryOption = null;
		}

		// inStore
		if ($("#customCheck1").prop("checked")){
			inStore.push(true);
		}
		else{
			inStore = null;
		}

		// priceLevel
		if ($("#customCheck2").prop("checked")){
			for (let i = 0; i < 4; i++){
				if ($("#prCustomCheck"+i).prop("checked")){
					priceLevel.push(i+1);
				}

			}
		}
		else{
			priceLevel = null;
		}
		filteredProducts = app.filterFunction(categoryOption, countryOption, inStore, priceLevel);

		this.productsToDisplay = filteredProducts;
		this.loadProducts();
		

	}//filterWithOptions

} //class			
