Feature: Able to log in to buy beverages
	As a costumer of Systembolagets online shop
	In order to buy products online
	I need to verify home address to be able to buy bevages


	Scenario: A person with an non-empty shopping cart
		Given that the user wants to check out whith a non-empty cart
		And the user has enterd a valid home address
		When user wants to pay
		Then the person continues to payment


	Scenario: A person with an empty shopping cart	
		Given that the user wants to check out with empty cart
		When the user attempts to pay
		Then a warning alerts user about empty cart


	Scenario Outline:
		Given that I am in the sytembolagets checkout
		When I fill in home address with "<invalid-home-address>" 
		Then I should get a runtime error

		Examples:
		| invalid-home-address	    |
		| empty string     			|
		| number	       			|
		| boolean	      			|
		| undefined	       			| 
		| array		      			| 
		| object	      			| 