module.exports = function() {

	let {$, sleep} = require('./funcs');




	this.Given(/^that the user are loged in with "([^"]*)" and "([^"]*)" at the systembolaget$/, async function (arg1, arg2) {
	        
	        await helpers.loadPage("http://localhost:3000/index.html");
		    console.log("hej0000")
	        await sleep(2000);
	        let fieldName = await $("#name");
	        assert(fieldName, "The #name-input-field doesn't exist");
	        await fieldName.sendKeys("William");

	        let fieldAge = await $("#age");
	        assert(fieldAge, "The #age-input-field doesn't exist");
        	await fieldAge.sendKeys(33);
            await fieldName.click();

	        let button = await $("#welcomeBtn");
	    	assert(button, "The #welcomeBtn doesn't exist");
		    await button.click();
		    
	});

	this.When(/^user want to log out from the store$/, async function () {
		    
	 		await helpers.loadPage("http://localhost:3000/startpage.html");
	        await sleep(2000);
    });

	 this.When(/^click the button "([^"]*)"$/, async function (arg1) {
		    
			
	        let logUtLink = await $(arg1);
        assert(logUtLink, "The " + arg1 + " doesn't exist");
        if (logUtLink) {
	       await logUtLink.click();
    	}
        await sleep(2000);
	});

	this.Then(/^user gets logged out and returning to the login page$/, async function () {
		    
	         console.log("Yippie Ki Yay M*****F******")
	});

   
}