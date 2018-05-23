
class Varukorg {

	constructor() {

		// let user = app.addUser("Vasja", 17);//temporary
	 //  	sessionStorage.setItem("userName", "Vasja"); //temporary
		// setTimeout(()=>{
		// 	this.loadAddedProducts();
		// }, 2000);	 
  
	  	this.loadAddedProducts();

	  	
	} //constructor

	loadAddedProducts(){
		let container = $("#addedProducts");
	
		let totalAmount = 0;
		let totalQuantity = 0;

		for (let i=0; i<sessionStorage.length; i++){
			// Check if the name exists in the session
			let prodArt = sessionStorage.getItem("prodArticleSession"+i);
			let prodQuant = sessionStorage.getItem("prodQuantitySession"+i);
			let ind = app.users[0].shoppingCart.findProductInArrayProducts(prodArt/1);
			

	     	if (prodArt!= null)
		    {
		    	container.append(
		    		'<div class="row vertical-align mb-1 bg-light">'
		    		    + '<div class="d-none d-md-block col-md-3">'
						+    '<img src="www/img/11.jpg" alt="Picture">'
						+ '</div>'
		    			+ '<div class="col-md-3  text-left font-weight-bold">'
		    			+    '<p>' + app.products[ind].namn + '</p>'
		    			+ '</div>'
		    			+ '<div class="col-md-2 text-center">'
		    			+    '<p>' + prodQuant + '</p>'
		    			+ '</div>'
		    			+ '<div class="col-md-2 text-center">'
					    +    '<p>' + app.products[ind].prisinklmoms + '  SEK </p>'
						+ '</div>'
					    + '<div class="col-md-1 text-right">' 
					    +    '<button id = "addButton' + i + '" class="btn btn-secondary my-2 my-sm-0" type="submit"> + </button>'   
					    + '</div>'
					    + '<div class="col-md-1 text-right">' 
					    +    '<button id = "removeButton' + i + '" class="btn btn-secondary my-2 my-sm-0" type="submit"> - </button>'   
					    + '</div>'					
				  + '</div>'

				);

				totalAmount = totalAmount + (app.products[ind].prisinklmoms)*(prodQuant);
		    }
		    // totalQuantity = totalQuantity + prodQuant;

		    
		    
		}

		container.append(
			'<div class="row border-top bg-light pt-4 mb-4">'
				+ '<div class="col-6 col-sm-10 text-right">'
					+ '<h4>Total summa: </h4>'
				+ '</div>'
				+ '<div class="col-6 col-sm-2">'
					+ '<h4>' + totalAmount + ' SEK</h4>'
				+'</div>'

			+ '</div>'
        );  

        if(totalAmount == 0)
        	$("#buyAndEmpty").hide();
	}//loadAddedProducts()

} //class



	