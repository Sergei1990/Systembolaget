let app = require('../app.js');
let Product = require('../product.js');
let Person = require('../person.js');

module.exports = function() {
    let user;
    let parameter;
    let value;
    let categoryIndex;
    let productsAfterFiltering = [];
    let chosenCategory1, chosenCategory2;
    let chosenCountry1, chosenCountry2;
    let priceLevel1, priceLevel2;
    let categoryToTry;
    let categoryIsFound;

    this.Given(/^that I am a registrered user with age over (\d+)$/, function (arg1, callback) {
        user = app.addUser('Erik', 27);                 
        callback();  
    });
    
    this.When(/^I choose to filter the products by parameter "([^"]*)" as "([^"]*)"$/, function (par, val, callback) {
        parameter = par;
        value = val;
                
        if (parameter == "category"){
            categoryIndex = app.findNameInCategory(value); //4        
            productsAfterFiltering = app.filterFunction([value], null, null, null); //Alkoholfritt från Spanien
        }
        if (parameter == "country")
            productsAfterFiltering = app.filterFunction(null, [value], null, null); //Frankrike
        if (parameter == "availability1"){
            value = JSON.parse(value); // convert string to boolean
            productsAfterFiltering = app.filterFunction(null, null, [value], null); //true
        }
        if (parameter == "availability0"){
            value = JSON.parse(value);
            productsAfterFiltering = app.filterFunction(null, null, [value], null); //false
        }
        if (parameter == "prices <= 100")
            productsAfterFiltering = app.filterFunction(null, null, null, [value/1]); //prices <=100 
        if (parameter == "prices (100-500]")
            productsAfterFiltering = app.filterFunction(null, null, null, [value/1]); //prices (100-500] 
        if (parameter == "prices (500-1000]")
            productsAfterFiltering = app.filterFunction(null, null, null, [value/1]); //prices (500-1000]
        if (parameter == "prices > 1000")
            productsAfterFiltering = app.filterFunction(null, null, null, [value/1]); //prices >1000
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

//------------------------SCENARIO 2-------------------------------------------------------------

    this.When(/^I choose to filter the products by categories "([^"]*)" and "([^"]*)"$/, function (arg1, arg2, callback) {
        chosenCategory1 = arg1; // Rött vin
        chosenCategory2 = arg2; // Vitt vin
        callback();
    });

    this.When(/^by countries "([^"]*)" and "([^"]*)"$/, function (arg1, arg2, callback) {
        chosenCountry1 = arg1; //Italien
        chosenCountry2 = arg2;  // Frankrike
        callback();
    });

    this.When(/^which are chipper than (\d+) kr$/, function (arg1, callback) {
        priceLevel1 = 1; // <= 100 kr
        priceLevel2 = 2; // (100; 500] kr

        callback();
    });

    this.Then(/^there are just beverages with chosen parameters on the product page$/, function (callback) {
        productsAfterFiltering = [];
        productsAfterFiltering = app.filterFunction([chosenCategory1, chosenCategory2], 
                                                    [chosenCountry1, chosenCountry2],
                                                     null,
                                                    [priceLevel1, priceLevel2])
        filteringSuccess = false;
        
        for (let prod  = 0; prod < productsAfterFiltering.length; prod++){
            // console.log("country " + productsAfterFiltering[prod].ursprunglandnamn);
            // console.log("price " + productsAfterFiltering[prod].prisinklmoms);
            // console.log("varugrupp " + productsAfterFiltering[prod].varugrupp);
            if ((app.checkProductIsInCategory(chosenCategory1, productsAfterFiltering[prod]) == true || 
                 app.checkProductIsInCategory(chosenCategory2, productsAfterFiltering[prod]) == true)  &&
                (productsAfterFiltering[prod].ursprunglandnamn == chosenCountry1 || 
                 productsAfterFiltering[prod].ursprunglandnamn == chosenCountry2) &&
                (productsAfterFiltering[prod].prisinklmoms <= 500)){
                filteringSuccess = true;
            }
            else{
                filteringSuccess = false;
                break;
            }

        }
        assert(
            filteringSuccess = true,
            "Function of filtering does not work with parameters: countries as " + chosenCountry1 + 
            " and " + chosenCountry2 + ", categories as " + chosenCategory1 + 
            " and " + chosenCategory2 + ", and prices <= 500 sek"
        );
        callback();
    });

//-------------------------SCENARIO 3--------------------------------------------------------------

    this.Given(/^that I am a registrered user with age under (\d+)$/, function (arg1, callback) {
        user = app.addUser("Tommy", 19);
        callback();
    });

    this.When(/^I try to find category "([^"]*)" in the options' list for filtering$/, function (arg1, callback) {
        categoryToTry = arg1;
        if (app.findNameInCategory(categoryToTry) === -1){
            categoryIsFound = false;
        }
        else{
            categoryIsFound = true;
        }
        callback();
    });

    this.Then(/^there are just "([^"]*)"\-categories which are available$/, function (arg1, callback) {
        assert(
            categoryIsFound === false,
            "The beverages of the category " + categoryToTry + " are available for the person under 20 years old"
        );

        let c = 0;
        let err;
        for (c; c < app.categories.length; c++){
            if(app.categories[c].name.includes("Alkoholfritt")){
                err = false;
            }
            else{
                err = true;
                c++;
                break;
            }
        }

        assert(
            err === false,
            "The filtering's options of the user under 20 years old includes category " + app.categories[c-1].name + " which is not 'Alkoholfritt'"
        );

        callback();

    });

}