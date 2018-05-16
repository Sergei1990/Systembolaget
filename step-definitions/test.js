module.exports = function() {
	 
	   function sleep(ms) {
         return new Promise(resolve => setTimeout(resolve, ms));
       }


        this.Given(/^when$/, async function () {

       	return helpers.loadPage('http://localhost:3000').then(async function() {
       		console.log('it works');
       		await sleep(1000);

       	})
       });

       this.When(/^then$/, async function () {
        let theButton = await driver.findElement(by.css('#button'));
      	await theButton.click();
      	
      
        
        
       });



       this.Then(/^given$/,async function () {
       	 let body = await driver.findElement(by.css('body'));
       	 let bgColor = await body.getCssValue('backgroundColor')
       	 // console.log(bgColor);
         
         assert(
         	bgColor == "rgba(0, 128, 0, 1)",
         	"The background color didn't turn green"
         	);
          });
}