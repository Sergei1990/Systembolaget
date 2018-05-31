
Feature: modal check name and age
	As for users of Alco Silk Road
	They need to fill in name and age
	To decide what kind of beverages they are supposed to see. 

	Scenario: user is under 20 and has filled in name and age in modal
		Given that a user enters 15 as a age and filles their in name "Andrea"
		When user clicks on ok button
		Then the user should log in but only see non-alcoholic beverages

	Scenario: user is over 20 and has filled in name and age in modal
		Given that a user enters 21 as a age and filles in name "Jessica"
		When user clicks on okbutton
		Then the user should log in and see all of the beverages 
