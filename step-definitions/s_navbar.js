let assert = require('assert');

module.exports = function(){

	this.Given(/^that I am on a startpage$/, async function() {
    return helpers.loadPage('http://localhost:3000/startpage.html').then(async function() {
    	console.log('it works');
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

}