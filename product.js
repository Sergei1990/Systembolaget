module.exports = class Product {

    constructor(data){
    // just transfer all properties 
    // from data to "this" 
    	Object.assign(this, data);
    }


}
