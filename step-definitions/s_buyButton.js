
module.exports = function(){

let app = require('../app.js')
let Person = require('../person.js');
let assert = require('assert');

// let inputAge;
// let inputUsername;
let {$, sleep} = require('./funcs');

let userInput;
let inputStreetAddress;
let inputAdressline1;
let inputPostalcode;
let modal;





this.Given(/^the cart has one renat in it$/, async function () {
	await helpers.loadPage('http://localhost:3000/index.html');
    await sleep(2000);

    let inputUsername = await driver.findElement(by.css('input#name'));
    await inputUsername.sendKeys('Fyllekajan');
    await sleep(500);
    let inputAge = await driver.findElement(by.css('input#age'));
    await inputAge.sendKeys(85);
    await sleep(500);

    let welcomeButton = await driver.findElement(by.css('#welcomeBtn'));
    await inputUsername.click();
    await sleep(500);
    await welcomeButton.click();
    await sleep(500);  

 	await helpers.loadPage('http://localhost:3000/allaDrycker.html');
 	await sleep(2000);

    let addButton0 = await driver.findElement(by.css('#addButton0'));
    await addButton0.click();
  	await sleep(50);

  	await helpers.loadPage('http://localhost:3000/varukorg.html');
});



this.When(/^the customer has filled in correct information$/, async function () {
	await helpers.loadPage('http://localhost:3000/varukorg.html');
 	await sleep(2000);

  	let inputAdressline1= await driver.findElement(by.css('input#address-line1'));
    inputAdressline1.sendKeys('Essingestråket');

    let inputCity = await driver.findElement(by.css('input#city'));
    inputCity.sendKeys("Stockholm");

    let inputPostalcode= await driver.findElement(by.css('input#postal-code'));
    inputPostalcode.sendKeys(11266);

});


this.When(/^clicks on buy button$/,async function () {
	let button = await driver.findElement(by.css('#buy-button'));
    await button.click();
  	await sleep(2000);
         
});

this.Then(/^the cart is reset$/,async function () {
    let buttonEmpty = await driver.findElement(by.css('#button-close1'));
    await buttonEmpty.click();
  	await sleep(2000);  
});

}




