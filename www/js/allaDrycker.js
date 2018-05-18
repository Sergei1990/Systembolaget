
class AllaDrycker {

	constructor() {

		this.hideFilters();

		// show the productlist "later" to prevent lag
		setTimeout(()=>{
			this.loadProducts();
		}, 0);

		$('#searchbutton').click(()=>{
			this.searchProducts();
		});
	

		$("#showMore").click((e)=>{
			// Prevents a href from re-loading the website
			e.preventDefault();
			this.showMoreProducts();
	 	});

	 	this.quantityOfProductOnPage;
	 	this.quantityToShow = 2;	 	

	}	

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

	searchProducts(){
		let search = $('#search').val();
	  	let products = app.filterFunction([search], [search], null, null);
	  	this.displayProducts(products);		
	}	

	loadProducts(){
	
		let $div = $('#productDescription');
	  	$div.empty();

	  	let user = app.addUser("Vasja", 17);

	  	let products = app.products.slice(0, this.quantityToShow); 
	
		for (let i = 0; i < products.length; i++) {
			$div.append(
				 '<div class="row pt-1 vertical-align">'
				+   '<div class="prodPicture col-md-2">'
				+       '<img src="www/img/11.jpg" alt="Picture">'
				+   '</div>'
				+   '<div id="prodName' + i + '" class="col-md-3">'
				+       '<p>' + products[i].namn + '</p>'
				+   '</div>'
				+   '<div id="prodAlcohol' + i + '" class="col-md-2">'
				+       '<p>' + products[i].alkoholhalt + '  %</p>'
				+   '</div>'
				+   '<div id="prodCountry' + i + '" class="col-md-2">'
				+       '<p>' + products[i].ursprunglandnamn + '</p>'
				+   '</div>'
				+   '<div id="prodPrice' + i + '" class="col-md-1">'
				+       '<p>' + products[i].prisinklmoms + '  SEK </p>'
				+   '</div>'
				+   '<div class="col-md-2 text-right">' 
				+   	'<button id = "addButton' + i + '" class="btn btn-secondary my-2 my-sm-0" type="submit">Add</button>'   
				+   '</div>'
				+'</div>' //class="row"
	           
		    );
		    this.quantityOfProductOnPage = i+1;		
		}		
	}// loadProducts()

	showMoreProducts(){
		let $div = $('#productDescription');
		let products = app.products.slice(this.quantityOfProductOnPage);
		
		if (products.length < this.quantityToShow)
			this.quantityToShow = products.length;

		for (let i = 0; i < this.quantityToShow; i++) {
			$div.append(
				 '<div class="row pt-1 vertical-align">'
				+   '<div class="prodPicture col-md-2">'
				+       '<img src="www/img/11.jpg" alt="Picture">'
				+   '</div>'
				+   '<div id="prodName' + (this.quantityOfProductOnPage) + '" class="col-md-3">'
				+       '<p>' + products[i].namn + '</p>'
				+   '</div>'
				+   '<div id="prodAlcohol' + (this.quantityOfProductOnPage) + '" class="col-md-2">'
				+       '<p>' + products[i].alkoholhalt + '  %</p>'
				+   '</div>'
				+   '<div id="prodCountry' + (this.quantityOfProductOnPage) + '" class="col-md-2">'
				+       '<p>' + products[i].ursprunglandnamn + '</p>'
				+   '</div>'
				+   '<div id="prodPrice' + (this.quantityOfProductOnPage) + '" class="col-md-1">'
				+       '<p>' + products[i].prisinklmoms + '  SEK </p>'
				+   '</div>'
				+   '<div class="col-md-2 text-right">' 
				+   	'<button id="addButton' + (this.quantityOfProductOnPage) + '" class="btn btn-secondary my-2 my-sm-0" type="submit">Add</button>'   
				+   '</div>'
				+'</div>' //class="row"
	           
		    );
		    this.quantityOfProductOnPage = 1+this.quantityOfProductOnPage;		
		} //for

		if (app.products.length == this.quantityOfProductOnPage)
			$("#element3").hide();

	} //showMoreProducts()

} //class



	