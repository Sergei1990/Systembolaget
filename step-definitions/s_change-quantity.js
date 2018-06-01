module.exports = function(){

let app = require('../app.js')
let Person = require('../person.js');
let assert = require('assert');

let {$, sleep} = require('./funcs');


let userInput;


this.Given(/^that the user shopping cart has one renat$/, async function () {
        await helpers.loadPage('http://localhost:3000/index.html');
    	await sleep(2000);

    	let inputUsername = await driver.findElement(by.css('input#name'));
    	await inputUsername.sendKeys('Tani');
    	await sleep(500);
    	let inputAge = await driver.findElement(by.css('input#age'));
    	await inputAge.sendKeys(50);
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
  		await sleep(2000);
        });


this.When(/^the registered user increases the quantity to two renat$/, async function () {
		let addButtonV = await driver.findElement(by.css('#addButtonV0'));
    	await addButtonV.click();
  		await sleep(2000);   


       });

this.Then(/^the quantity number for renat should change to two$/, async function () {
		await helpers.loadPage('http://localhost:3000/varukorg.html');
  		await sleep(2000);           
       });

this.Then(/^the total sum should also be updated\.$/, async function () {
		let sum = await driver.findElement(by.css('#totalAmountV'));
		await helpers.loadPage('http://localhost:3000/varukorg.html');
  		await sleep(2000);        
       });
}