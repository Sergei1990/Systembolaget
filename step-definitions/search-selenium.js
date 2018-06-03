module.exports = function() {

	let {$, sleep} = require('./funcs');



this.Given(/^that a user want to search a product$/, async function () {
         
         await helpers.loadPage("http://localhost:3000/index.html");
	        await sleep(2000);
	        let fieldName = await $("#name");
	        assert(fieldName, "The #name-input-field doesn't exist");
	        await fieldName.sendKeys("Joline");

	        let fieldAge = await $("#age");
	        assert(fieldAge, "The #age-input-field doesn't exist");
        	await fieldAge.sendKeys(54);
            await fieldName.click();

	        let button = await $("#welcomeBtn");
	    	assert(button, "The #welcomeBtn doesn't exist");
		    await button.click();
         
       });

this.When(/^the user searches for the product$/, async function () {
     		
     		let searchField = await driver.findElement(by.css('#searchField'));
    			await searchField.click();
    		let userInput = await driver.findElement(by.css('input#searchField'));
    			await userInput.sendKeys('Carlsberg');
    		let searchButton = await driver.findElement(by.css('#searchButton'));
   				 await searchButton.click();

       });

this.Then(/^the specific product turns up as the result$/, async function () {
        
        	let body = await driver.findElement(by.css('#productDescription'));
    		let searchedItem, bodyText;

		    for (let i = 0; i < 10; i++){
		      bodyText = await body.getText();
		      if (bodyText.includes('Carlsberg')) {
		        searchedItem = true;
		        break;
		      }
		      await sleep(1000);
		    }
       });


this.Given(/^that a customer search after all beers in the online store$/, async function () {

	 		await helpers.loadPage("http://localhost:3000/index.html");
	        await sleep(2000);
			let fieldName = await $("#name");
	        assert(fieldName, "The #name-input-field doesn't exist");
	        await fieldName.sendKeys("Mr William Kienast");

	        let fieldAge = await $("#age");
	        assert(fieldAge, "The #age-input-field doesn't exist");
        	await fieldAge.sendKeys(35);
            await fieldName.click();

	        let button = await $("#welcomeBtn");
	    	assert(button, "The #welcomeBtn doesn't exist");
		    await button.click();
         
       });

this.When(/^the customer writes öl in the searchfield$/, async function () {
      
      		let searchField = await driver.findElement(by.css('#searchField'));
    			await searchField.click();
    		let userInput = await driver.findElement(by.css('input#searchField'));
    			await userInput.sendKeys('Öl');
    		let searchButton = await driver.findElement(by.css('#searchButton'));
   				 await searchButton.click();
       });

this.Then(/^all the beers \(ÖL\) the online store have to offer shows$/, async function () {
        	
        	let body = await driver.findElement(by.css('#productDescription'));
    		let searchedItem, bodyText;

		    for (let i = 0; i < 10; i++){
		      bodyText = await body.getText();
		      if (bodyText.includes('Öl')) {
		        searchedItem = true;
		        break;
		      }
		      await sleep(1000);
		    }

		     let logUtLink = await $("#logUtLink");
        assert(logUtLink, "The " + "#logUtLink" + " doesn't exist");
        if (logUtLink) {
	       await logUtLink.click();
    	}
        await sleep(2000);
       });

}