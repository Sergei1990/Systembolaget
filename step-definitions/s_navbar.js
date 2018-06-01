let assert = require('assert');

module.exports = function(){

  function sleep(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

	this.Given(/^that I am on a startpage$/, async function() {
    return helpers.loadPage('http://localhost:3000/startpage.html').then(async function() {
    });
  });

  this.When(/^I click on a page "([^"]*)"$/, async function (arg1) {
  	let theButton = await driver.findElement(by.css(arg1));
    await theButton.click();
  });

	this.Then(/^a page displays "([^"]*)"$/, async function (arg1) {
		let body = await driver.findElement(by.css('body'));
		let bodyText = await body.getText();
		assert(
			bodyText.includes(arg1),
			"Couldn't find the text"
		);

  });

  // 2nd Scenarion

  this.Given(/^that I am on the mainpage$/, async function() {
    await helpers.loadPage('http://localhost:3000/index.html');
    await sleep(2000);
  });

  this.Given(/^I logg in$/, async function() {
    // fill in username
    let inputUsername = await driver.findElement(by.css('input#name'));
    inputUsername.sendKeys('Marcus');
    // fill in age
    let inputAge = await driver.findElement(by.css('input#age'));
    inputAge.sendKeys(44);
    // press button
    let welcomeButton = await driver.findElement(by.css('#welcomeBtn'));
    await welcomeButton.click();
  });

  this.When(/^I click on search field$/, async function() {
    let searchField = await driver.findElement(by.css('#searchField'));
    await searchField.click();
  });

  this.When(/^write corona in there$/, async function() {
    let userInput = await driver.findElement(by.css('input#searchField'));
    await userInput.sendKeys('corona');
  });

  this.When(/^press search button$/, async function() {
    let searchButton = await driver.findElement(by.css('#searchButton'));
    await searchButton.click();
  });

  this.Then(/^I can see all corona products$/, async function() {
    let body = await driver.findElement(by.css('#productDescription'));
    let searchedItem, bodyText;

    for (let i = 0; i < 10; i++){
      bodyText = await body.getText();
      if (bodyText.includes('Corona Extra')) {
        searchedItem = true;
        break;
      }
      await sleep(1000);
    }

  });

}