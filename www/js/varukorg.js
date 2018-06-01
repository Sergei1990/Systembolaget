module.exports = class Varukorg {


	constructor() {


		// Don't run in node js
		if(typeof window !== "object"){ return; }
  
	  	this.loadAddedProducts();
	  	
	  $("#buttonEmpty").click(function() {
	  	for (let i=0; i<localStorage.length; i++){
	  		localStorage.removeItem("prodArticleSession" + i);
	  		localStorage.removeItem("prodQuantitySession" + i);
	    }
	    location.reload();
		});

	  $("#button-close1").click(function() {
	  	for (let i=0; i<localStorage.length; i++){
	  		localStorage.removeItem("prodArticleSession" + i);
	  		localStorage.removeItem("prodQuantitySession" + i);
	    }
	    location.reload();
		});

		} //constructor

	loadAddedProducts(){
		

		let container = $("#addedProducts");
	
		let totalAmount = 0;
		let totalQuantity = 0;

		for (let i=0; i<localStorage.length; i++){
			let prodQuant = localStorage.getItem("prodQuantitySession"+i);
			if (prodQuant/1 == 0){
				localStorage.removeItem("prodQuantitySession"+i);
				localStorage.removeItem("prodArticleSession"+i);
			}

		}

		for (let i=0; i<localStorage.length; i++){
			// Check if the name exists in the session
			let prodArt = localStorage.getItem("prodArticleSession"+i);
			let prodQuant = localStorage.getItem("prodQuantitySession"+i);

			let ind = app.users[0].shoppingCart.findProductInArrayProducts(prodArt/1);
			

	     	if (prodArt!= null)
		    {
		    	container.append(
		    		'<div class="row vertical-align mb-1 bg-light">'
		    		    + '<div class="d-none d-md-block col-lg-3">'
						+    '<img src="www/img/alcoholpic.jpg" alt="Picture">'
						+ '</div>'
		    			+ '<div id="prodNameV' + i + '" class="col-lg-3 text-lg-left col-md-12 text-center font-weight-bold">'
		    			+    '<p>' + app.products[ind].namn + '</p>'
		    			+ '</div>'
		    			+ '<div id="prodQuantityV' + i + '" class="col-lg-2 text-lg-center text-center">'
		    			+    '<p>' + prodQuant + '</p>'
		    			+ '</div>'
		    			+ '<div id="prodPriceV' + i + '" class="col-lg-2 text-lg-center text-center">'
					    +    '<p>' + app.products[ind].prisinklmoms + '  SEK </p>'
						+ '</div>'
					    + '<div class="col-lg-1 text-lg-right col-6 text-center">' 
					    +    '<button id = "addButtonV' + i + '" class="btn btn-secondary my-2 my-sm-0" type="button"> + </button>'   
					    + '</div>'
					    + '<div class="col-lg-1 text-lg-right col-6 text-center">' 
					    +    '<button id = "removeButtonV' + i + '" class="btn btn-secondary my-2 my-sm-0" type="button"> - </button>'   
					    + '</div>'
					    +   '<div id="prodIdV' + i + '" class="d-none">' 
						+   	'<p>' + app.products[ind].artikelid +'</p>'   
						+   '</div>'					
				  + '</div>'

				);

				totalAmount = totalAmount + (app.products[ind].prisinklmoms)*(prodQuant);
				/////////////////////////////////////////////////////////////////////////////////////////////
				$("#addButtonV" + i).click(()=>{
					let j = $("#prodIdV"+i).text();
					this.addClick(j/1, i);
			    });

			    $("#removeButtonV" + i).click(()=>{
					let j = $("#prodIdV"+i).text();
					this.removeClick(j/1, i);
			    });
		    }
		    // totalQuantity = totalQuantity + prodQuant;

		    
		    
		}

		container.append(
			'<div class="row border-top bg-light pt-4 mb-4">'
				+ '<div class="col-6 col-sm-10 text-right">'
					+ '<h4>Total summa: </h4>'
				+ '</div>'
				+ '<div id="totalAmountV" class="col-6 col-sm-2">'
					+ '<h4>' + totalAmount + ' SEK</h4>'
				+'</div>'

			+ '</div>'
        );  

        if(totalAmount == 0)
        	$("#buyAndEmpty").hide();
	}//loadAddedProducts()


	addClick(j, i){ // j - product's article, i -nr of the row in the Shopping cart
		let ind = app.users[0].shoppingCart.findProductInArrayProducts(j);
		app.users[0].shoppingCart.add(app.products[ind], 1);

		let totalAmount = 0;
		let totalQuantity = 0;		
		for (let a=0; a<app.users[0].shoppingCart.thingsToBuy.length; a++){		    
		    totalAmount = totalAmount + app.users[0].shoppingCart.thingsToBuy[a].quantity*app.users[0].shoppingCart.thingsToBuy[a].product.prisinklmoms;
		}		
		let prodQ = $('#prodQuantityV'+i).text();
		$('#totalAmountV').children("h4").text(totalAmount + " SEK");
		$('#prodQuantityV'+i).children("p").text(prodQ/1 + 1);
		prodQ++;
		if (prodQ > 0){
			$('#removeButtonV'+i).prop("disabled", false);
		}

	}//addTClick()

	removeClick(j, i){ // j - product's article, i -nr of the row in the Shopping cart
		let ind = app.users[0].shoppingCart.findProductInArrayProducts(j);
		app.users[0].shoppingCart.remove(app.products[ind], 1);

		let totalAmount = 0;
		let totalQuantity = 0;		
		for (let a=0; a<app.users[0].shoppingCart.thingsToBuy.length; a++){		    
		    totalAmount = totalAmount + app.users[0].shoppingCart.thingsToBuy[a].quantity*app.users[0].shoppingCart.thingsToBuy[a].product.prisinklmoms;
		}		
		let prodQ = $('#prodQuantityV'+i).text();
		$('#totalAmountV').children("h4").text(totalAmount + " SEK");
		$('#prodQuantityV'+i).children("p").text(prodQ/1 - 1);
		prodQ--;

		if (prodQ < 1){
			$('#removeButtonV'+i).prop("disabled", true);
		}

	}//addTClick()

} //class

$(document).ready(function(){
        	$("#exampleModal").modal({show: false});
        	

			});

