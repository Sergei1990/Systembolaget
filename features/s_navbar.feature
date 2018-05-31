Feature: Clicking on navbar pages
	As a user of an Alco Silk Road I want to be able to click on a menu and switch pages

	

	Scenario: Click on search field and write something
		Given that I am on the mainpage
		When I click on search field
		And write corona in there
		And press search button
		Then I can see all corona products