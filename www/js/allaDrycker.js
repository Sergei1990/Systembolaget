
class AllaDrycker {

	constructor() {
    
	  	let user = app.addUser("Vasja", 17);//temporary
	  	sessionStorage.setItem("userName", "Vasja"); //temporary

	  	this.quantityOfProductOnPage = 0;
	 	this.quantityToShow = 50;
	 	this.totalQuantityInShoppingCart;

		this.hideFilters();

		// show the productlist "later" to prevent lag
		setTimeout(()=>{
			$('#productDescription').empty();
			this.loadProducts();
		}, 0);

		$('#searchbutton').click(()=>{
			this.searchProducts();
		});
	

		$("#showMore").click((e)=>{
			// Prevents a href from re-loading the website
			e.preventDefault();
			//this.showMoreProducts();
			this.loadProducts();
	 	});

		setTimeout(()=>{
			for (let j = 0; j<this.quantityOfProductOnPage; j++){
				$("#addButton" + j).click(()=>{
					let i = $("#prodId"+j).text();
					this.addToCartClick(i/1);
				});
			}
		}, 0);	 		 	

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

	searchProducts(){
		let search = $('#search').val();
	  	let products = app.filterFunction([search], [search], null, null);
	  	this.displayProducts(products);	
	}	

	loadProducts(){
	
		let $div = $('#productDescription');
	  	// $div.empty();
	  	let products = app.products.slice(this.quantityOfProductOnPage); 
	
		let qty;

		if (products.length < this.quantityToShow)
			qty = products.length;
		else
			qty = this.quantityToShow;

		for (let i = 0; i < qty; i++) {
			$div.append(
				 '<div class="row pt-1 vertical-align">'
				+   '<div class="prodPicture col-md-2">'
				+       '<img src="www/img/11.jpg" alt="Picture">'
				+   '</div>'
				+   '<div id="prodName' + this.quantityOfProductOnPage + '" class="col-md-3">'
				+       '<p>' + products[i].namn + '</p>'
				+   '</div>'
				+   '<div id="prodAlcohol' + this.quantityOfProductOnPage + '" class="col-md-2">'
				+       '<p>' + products[i].alkoholhalt + '  %</p>'
				+   '</div>'
				+   '<div id="prodCountry' + this.quantityOfProductOnPage + '" class="col-md-2">'
				+       '<p>' + products[i].ursprunglandnamn + '</p>'
				+   '</div>'
				+   '<div id="prodPrice' + this.quantityOfProductOnPage + '" class="col-md-1">'
				+       '<p>' + products[i].prisinklmoms + '  SEK </p>'
				+   '</div>'
				+   '<div class="col-md-2 text-right">' 
				+   	'<button id = "addButton' + this.quantityOfProductOnPage + '" class="btn btn-secondary my-2 my-sm-0" type="submit">Add</button>'   
				+   '</div>'
				+   '<div id="prodId' + this.quantityOfProductOnPage + '" class="d-none">' 
				+   	'<p>' + products[i].artikelid +'</p>'   
				+   '</div>'
				+'</div>' //class="row"
	           
		    );
		    this.quantityOfProductOnPage++;
		    if (app.products.length == this.quantityOfProductOnPage)
				$("#element3").hide();		
		}		
	}// loadProducts()

	addToCartClick(i){ // i - product's article
		let ind = app.users[0].shoppingCart.findProductInArrayProducts(i);
		app.users[0].shoppingCart.add(app.products[ind], 1);
		
		// let prodQuantityInShoppingCart = 1;

		// let a = sessionStorage.getItem("amountInStorage"+i); //check if the chosen beverage is already in the cart
		// if (a != null)
		// {
		// 	prodQuantityInShoppingCart = a/1 + 1;
		// }
		
		// let name = $("#prodName"+i).text(); // Nils Oscar Alkoholfr
		// let price =$("#prodPrice"+i).text();// 15.9 SEK
		// price = price.replace("  SEK ", ""); // 15.9

		// sessionStorage.setItem(("nameInStorage"+i), name);
		// sessionStorage.setItem(("priceInStorage"+i), price);
		// sessionStorage.setItem(("amountInStorage"+i), prodQuantityInShoppingCart);
		

	}//addToCartClick()

} //class



	