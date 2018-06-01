let assert = require('assert');

module.exports = function(){

	function sleep(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

	this.Given(/^that I have two bottles in my cart$/, async function() {
    await helpers.loadPage('http://localhost:3000/index.html');
    await sleep(2000);

    // fill in username
    let inputUsername = await driver.findElement(by.css('input#name'));
    await inputUsername.sendKeys('Marcus');
    // fill in age
    let inputAge = await driver.findElement(by.css('input#age'));
    await inputAge.sendKeys(44);
    await sleep(500); 
    await inputUsername.click();
    // press welcome button
    let welcomeButton = await driver.findElement(by.css('#welcomeBtn'));
    await welcomeButton.click();
    await sleep(500); 
    // press Alla drycker
    let allaDrycker = await driver.findElement(by.css('#allaDrycker'));
    await allaDrycker.click();
    await sleep(2500);
    // add two products
    let prod1 = await driver.findElement(by.css('#addButton0'));
    let prod2 = await driver.findElement(by.css('#addButton1'));
    await prod1.click();
    await sleep(500); 
    await prod2.click();
    await sleep(500); 

  });

	this.When(/^I click Täm Varukorg button$/, async function() {
    // go to basket page
    let basketPage = await driver.findElement(by.css('#basketImg'));
    await basketPage.click();
    await sleep(2000);
    // click Töm Varukorg
    let emptyCart = await driver.findElement(by.css('#buttonEmpty'));
    await emptyCart.click();
    await sleep(2000);
  });

	this.Then(/^my cart magically becomes empty$/, async function() {
    let body = await driver.findElement(by.css('#totalAmountV'));
		let bodyText = await body.getText();
		assert(
			bodyText.includes("0 SEK"),
			"Couldn't find the text"
		);
  });

}