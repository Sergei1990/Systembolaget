module.exports = function(){

let app = require('../app.js')
let Person = require('../person.js');
let assert = require('assert');
let legalAge = 20;
let underAge = 15;
let person;
let age;
let inputAge;
let inputUsername;


let {$, sleep} = require('./funcs');




this.Given(/^that a user enters (\d+) as a age and filles their in name "([^"]*)"$/, async function (arg1, arg2,) {
    await helpers.loadPage('http://localhost:3000/index.html');
    await sleep(2000);

    let inputUsername = await driver.findElement(by.css('input#inputUsername'));
    inputUsername.sendKeys('Andrea');
    let inputAge = await driver.findElement(by.css('input#inputAge'));
    inputAge.sendKeys(15);
      
});


this.When(/^user clicks on ok button$/, async function () {
    let welcomeButton = await driver.findElement(by.css('#welcomeBtn'));
    await welcomeButton.click();
    await sleep(2000);  
});


this.Then(/^the user should log in but only see non\-alcoholic beverages$/, async function () {

if (age < 20){ 
			for(let p of this.allProducts){
				if ((p.alkoholhalt/1) <= 0.5)
						this.products.push(p);
			}
			
			for(let cat of this.allCategories){
				if (cat.name.includes("Alkoholfritt"))
					this.categories.push(cat);
			}
		}    
		await sleep(2000);
});


//scenario 2

this.Given(/^that a user enters (\d+) as a age and filles in name "([^"]*)"$/, async function (arg1, arg2,) {
    await helpers.loadPage('http://localhost:3000/index.html');
    await sleep(2000);

    let inputUsername = await driver.findElement(by.css('input#inputUsername'));
    inputUsername.sendKeys('Jessica');
    let inputAge = await driver.findElement(by.css('input#inputAge'));
    inputAge.sendKeys(21);   
});

this.When(/^user clicks on okbutton$/, async function () {
    let welcomeButton = await driver.findElement(by.css('#welcomeBtn'));
    await welcomeButton.click();
    await sleep(2000);
});


this.Then(/^the user should log in and see all of the beverages$/, function async () {
    	if(age > 20) {    
			for(let p of this.allProducts){
					this.products.push(p); 
			}
			
			for(let cat of this.allCategories){ 
				this.categories.push(cat);
			}
		}   
});










}//ta inte bort