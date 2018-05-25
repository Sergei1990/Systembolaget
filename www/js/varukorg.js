module.exports = class Varukorg {


	constructor() {

console.log("hej");
		// Don't run in node js
		if(typeof window !== "object"){ return; }

		// let user = app.addUser("Vasja", 17);//temporary
	    // localStorage.setItem("userName", "Vasja"); //temporary 
  
	  	this.loadAddedProducts();


	  	
	} //constructor

	loadAddedProducts(){
		

		let container = $("#addedProducts");
	
		let totalAmount = 0;
		let totalQuantity = 0;

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
						+    '<img src="www/img/11.jpg" alt="Picture">'
						+ '</div>'
		    			+ '<div class="col-lg-3 text-lg-left col-md-12 text-center font-weight-bold">'
		    			+    '<p>' + app.products[ind].namn + '</p>'
		    			+ '</div>'
		    			+ '<div class="col-lg-2 text-lg-center text-center">'
		    			+    '<p>' + prodQuant + '</p>'
		    			+ '</div>'
		    			+ '<div class="col-lg-2 text-lg-center text-center">'
					    +    '<p>' + app.products[ind].prisinklmoms + '  SEK </p>'
						+ '</div>'
					    + '<div class="col-lg-1 text-lg-right col-6 text-center">' 
					    +    '<button id = "addButton' + i + '" class="btn btn-secondary my-2 my-sm-0" type="button"> + </button>'   
					    + '</div>'
					    + '<div class="col-lg-1 text-lg-right col-6 text-center">' 
					    +    '<button id = "removeButton' + i + '" class="btn btn-secondary my-2 my-sm-0" type="button"> - </button>'   
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
