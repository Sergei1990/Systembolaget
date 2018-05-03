Feature: Create age-check
	As a user of Systembolagets online shop 
	In order to not waste my time 
	I want to be warned at an early stage
	If I am too young to be able to buy alcoholic beverages in the shop

	Scenario: A person has the right age to buy alcohol
		Given that a person is of legal age to buy alcohol
		When the person enter the onlinestore
		Then an alert age-check appears to click yes or no button if you are of legal age
		And the person click yes to enter the site


 		Scenario Outline: When a user under the legal age tries to see our products then a warning should be displayed
		  Given that I am a registrered user with a known age of "<age>"
		  When I try to see products on the web site
		  Then a warning should "<warning>" be displayed

			Examples:
		    | age | warning |
		    | 15  |         |
		    | 25  | not     |
