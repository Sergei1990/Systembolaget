

module.exports = function() {

	let {$, sleep} = require('./funcs');

	let optionID;

	// this.setDefaultTimeout(20000);   
 
    this.Given(/^that the user is "([^"]*)" who is (\d+) years old$/, async function (arg1, arg2) {
        await helpers.loadPage("http://localhost:3000/index.html");
        await sleep(2000);
        let fieldName = await $("#name");
        assert(fieldName, "The #name-input-field doesn't exist");
        if(fieldName){
	        await fieldName.sendKeys(arg1);
	    }
        let fieldAge = await $("#age");
        assert(fieldAge, "The #age-input-field doesn't exist");
        if(fieldAge){
        	await fieldAge.sendKeys(arg2);
            await fieldName.click();
        }

        let button = await $("#welcomeBtn");
    	assert(button, "The #welcomeBtn doesn't exist");
    	if (button) {
	       await button.click();
    	}
    	
    	let productsPageLink = await $("#allaDrycker");
    	
    	assert(productsPageLink, "The #allaDrycker doesn't exist");
    	if (productsPageLink) {
	       await productsPageLink.click();
	       await sleep(2000);
    	}
    });

 	this.Given(/^the user is on the "([^"]*)"$/, async function (expectedURL) {
        
        let URL = await driver.getCurrentUrl();
        assert (URL == expectedURL, "The user is not on the page AllaDrycker")
    });

    this.When(/^I click on "([^"]*)"$/, async function (arg1) {
    	let sortBtn = await $(arg1);
        assert(sortBtn, "The " + arg1 + " doesn't exist");
        if (sortBtn) {
	       await sortBtn.click();
    	}
        await sleep(2000);
    });

    this.When(/^choose to sort the products by parameter with radio\-button "([^"]*)"$/, async function (arg1) {
        optionID = arg1;
        let sortOption = await $(optionID);
  		await sortOption.click();
        // await sleep (2000);
        	       
    });

    this.When(/^click on the OK\-button "([^"]*)"$/, async function (arg1) {
        let sortOKbtn = await $(arg1);
        assert(sortOKbtn, "The button OK " + arg1 + " doesn't exist");
        if (sortOKbtn) {
        	await sortOKbtn.click();
        }
        await sleep (2000);	       
    });

    this.Then(/^the list of the products is sorted according to the chosen parameter$/, async function () {
    	
    	if (optionID === "#customLabel1"){
            let namesArray =[];
            for (let i = 10; i<50; i++){
                let div = await $("#prodName" + i);
                assert(div, "No products on the page after sortering");
                if(div){
                    nameInDiv = await div.getText();
                    namesArray.push(nameInDiv.toLowerCase());
                }
            }
            let index = 0;
            for (let i = 1; i<40; i++ ){
                assert (namesArray[index] < namesArray[i] || namesArray[index] == namesArray[i],
                    "The product " + namesArray[index] + " should be displayed after the product " + namesArray[i]);
                index++;
            }
    	}

    	if (optionID === "#customLabel2"){
    		let namesArray =[];
            for (let i = 10; i<50; i++){
                let div = await $("#prodName" + i);
                assert(div, "No products on the page after sortering");
                if(div){
                    nameInDiv = await div.getText();
                    namesArray.push(nameInDiv.toLowerCase());
                }
            }
            let index = 0;
            for (let i = 1; i<40; i++ ){
                assert (namesArray[index] > namesArray[i] || namesArray[index] == namesArray[i],
                    "The product " + namesArray[index] + " should be displayed before the product " + namesArray[i]);
                index++;
            }
    	}

    	if (optionID === "#customLabel3"){
    		let priceArray =[];
            for (let i = 0; i<50; i++){
                let div = await $("#prodPrice" + i);
                assert(div, "No products on the page after sortering");
                if(div){
                    priceInDiv = await div.getText();
                    priceArray.push((priceInDiv.replace(" SEK", ""))/1);
                }
            }
            // console.log(priceArray);
            let index = 0;
            for (let i = 1; i<50; i++ ){
                assert (priceArray[index] > priceArray[i] || priceArray[index] == priceArray[i],
                    "The product with price " + priceArray[index] + " should be displayed after the product with price " + priceArray[i]);
                index++;
            }
    	}

    	if (optionID === "#customLabel4"){
    		let priceArray =[];
            for (let i = 0; i<50; i++){
                let div = await $("#prodPrice" + i);
                assert(div, "No products on the page after sortering");
                if(div){
                    priceInDiv = await div.getText();
                    priceArray.push((priceInDiv.replace(" SEK", ""))/1);
                }
            }
            // console.log(priceArray);
            let index = 0;
            for (let i = 1; i<50; i++ ){
                assert (priceArray[index] < priceArray[i] || priceArray[index] == priceArray[i],
                    "The product with price " + priceArray[index] + " should be displayed after the product with price " + priceArray[i]);
                index++;
            }
    	}

    	if (optionID === "#customLabel5"){
    		let countryArray =[];
            for (let i = 0; i<50; i++){
                let div = await $("#prodCountry" + i);
                assert(div, "No products on the page after sortering");
                if(div){
                    countryInDiv = await div.getText();
                    countryArray.push(countryInDiv.toLowerCase());
                }
            }
            let index = 0;
            for (let i = 1; i<50; i++ ){
                assert (countryArray[index] < countryArray[i] || countryArray[index] == countryArray[i],
                    "The product " + countryArray[index] + " should be displayed after the product " + countryArray[i]);
                index++;
            }
   		}      
    
    });

}