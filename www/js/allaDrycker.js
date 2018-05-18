
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

	loadProducts(){
	  	let user = app.addUser("Vasja", 28);

	  	let products = app.products.slice(0, 100);
	  	this.displayProducts(products);		
	}

	searchProducts(){
		let search = $('#search').val();
	  	let products = app.filterFunction([search], [search], null, null);
	  	this.displayProducts(products);		
	}
    
	displayProducts(products){

		let $div = $('#productDescription');
	  	$div.empty();

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
				+   	'<button id="addButton' + i + '" class="btn btn-secondary my-2 my-sm-0" type="button">Add</button>'   
				+   '</div>'
				+'</div>' //class="row"
	           
		    );		
		}
	}
}

