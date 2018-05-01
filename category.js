module.exports = class Category {
	
	constructor(name, allProducts){
		
		this.name = name;

		let splitted = name.split(" från ");
		let varugrupp = splitted[0];
		let ursprunglandnamn = splitted[1];

		this.products = allProducts.filter(function(product){
			if(ursprunglandnamn === undefined){
				return product.varugrupp === varugrupp;
			}
			return product.varugrupp === varugrupp && product.ursprunglandnamn === ursprunglandnamn;
	    });	
	}
}