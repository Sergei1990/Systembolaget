let app = require('../app.js');
let Product = require('../product.js');
let Person = require('../person.js');

module.exports = function() {
    let user;
    let parameter;
    let value;
    let categoryIndex;
    let productsAfterFiltering = [];

    this.Given(/^that I am a registrered user with age over (\d+)$/, function (arg1, callback) {
        user = app.addUser('Erik', 27);                 
        callback();  
    });
    
    this.When(/^I choose to filter the products by parameter "([^"]*)" as "([^"]*)"$/, function (par, val, callback) {
        parameter = par;
        value = val;
                
        if (parameter == "category"){
            categoryIndex = app.findNameInCategory(value); //4        
            productsAfterFiltering = app.filterFunction(value, null, null, null); //Alkoholfritt från Spanien
        }
        if (parameter == "country")
            productsAfterFiltering = app.filterFunction(null, value, null, null); //Frankrike
        if (parameter == "availability1"){
            value = JSON.parse(value); // convert string to boolean
            productsAfterFiltering = app.filterFunction(null, null, value, null); //true
        }
        if (parameter == "availability0"){
            value = JSON.parse(value);
            productsAfterFiltering = app.filterFunction(null, null, value, null); //false
        }
        if (parameter == "prices <= 100")
            productsAfterFiltering = app.filterFunction(null, null, null, value/1); //prices <=100 
        if (parameter == "prices (100-500]")
            productsAfterFiltering = app.filterFunction(null, null, null, value/1); //prices (100-500] 
        if (parameter == "prices (500-1000]")
            productsAfterFiltering = app.filterFunction(null, null, null, value/1); //prices (500-1000]
        if (parameter == "prices > 1000")
            productsAfterFiltering = app.filterFunction(null, null, null, value/1); //prices >1000
        callback();

    });

    this.Then(/^there are just beverages with this parameter on the product's page$/, function (callback) {
        let filteringSuccess = false;
        if (parameter == "category"){           
            
            // productsAfterFiltering = [];////just for checking if it is working
            // productsAfterFiltering.push(app.categories[categoryIndex].products[0]);////just for checking if it is working
            for (let prod in productsAfterFiltering){
                for  (let productInCat in app.categories[categoryIndex].products){ 
                    if (productInCat.artikelid == prod.artikelid){
                        filteringSuccess = true;
                    }    
                    else{
                        filteringSuccess = false;    
                        break;
                    }
                    if (filteringSuccess == false) // if there is at list one product from another category break
                        break;     
                } 
            }      
            //console.log( "functionChecking" + functionChecking); //open the: ////just for checking if it is working
        }
            
        if (parameter == "country"){
            for (let prod  = 0; prod < productsAfterFiltering.length; prod++){
                if (productsAfterFiltering[prod].ursprunglandnamn == value)

                    filteringSuccess = true;
                else{
                    filteringSuccess = false;    
                    break;
                }
            }
        }
        
        if (parameter == "availability1"){
            for (let prod  = 0; prod < productsAfterFiltering.length; prod++){
                if (productsAfterFiltering[prod].iLager != 0)
                    filteringSuccess = true;
                else{
                    filteringSuccess = false;    
                    break;
                }
            }
        }

        if (parameter == "availability0"){
            for (let prod  = 0; prod < productsAfterFiltering.length; prod++){
                if (productsAfterFiltering[prod].iLager == 0)
                    filteringSuccess = true;
                else{
                    filteringSuccess = false;    
                    break;
                }
            }
        }
        
        if (parameter == "prices <= 100"){
            for (let prod  = 0; prod < productsAfterFiltering.length; prod++){
                if (productsAfterFiltering[prod].prisinklmoms <= 100)
                    filteringSuccess = true;
                else{
                    filteringSuccess = false;    
                    break;
                }
            }
        }

        if (parameter == "prices (100-500]"){
            for (let prod  = 0; prod < productsAfterFiltering.length; prod++){
                if ((productsAfterFiltering[prod].prisinklmoms > 100) && 
                    (productsAfterFiltering[prod].prisinklmoms <= 500))
                    filteringSuccess = true;
                else{
                    filteringSuccess = false;    
                    break;
                }
            }
        }

        if (parameter == "prices (500-1000]"){
            for (let prod  = 0; prod < productsAfterFiltering.length; prod++){
                if ((productsAfterFiltering[prod].prisinklmoms > 500) && 
                    (productsAfterFiltering[prod].prisinklmoms <= 1000))
                    filteringSuccess = true;
                else{
                    filteringSuccess = false;
                    break;
                }
            }
        }

        if (parameter == "prices > 1000"){
            for (let prod  = 0; prod < productsAfterFiltering.length; prod++){
                if ((productsAfterFiltering[prod].prisinklmoms/1) > 1000)
                    filteringSuccess = true;
                else{
                    filteringSuccess = false;    
                    break;
                }
            }
        }

        assert(
            filteringSuccess === true,
            "Function of filtering does not work with parameter " + parameter + " as " + value                   
        );
    
        callback();
    });


   

	


}