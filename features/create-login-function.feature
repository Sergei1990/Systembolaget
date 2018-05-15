Feature: Able to log in to buy beverages
	As a costumer of Systembolagets online shop
	In order to buy products online
	I need to verify email adress to be able to buy bevages

	Scenario:  A person of valid age whit non-empty shopping cart
		Given that the user has an legal age 
		And has a non-empty shopping cart
    When user wants to check out
    Then user must enter email to validate legal age
    
  Scenario:  A person of valid age whit empty shopping cart
		Given that the user has an legal age 
		And has a empty shopping cart
    When user wants to check out
    Then a warning should be shown


	Scenario Outline:
		Given that I am in the sytembolagets checkout
		When I fill in email with "<invalid-email>" 
		Then I should get a runtime error

		Examples:
		| invalid-email  |
		| empty string   |
		| number	       |
		| boolean	       |
		| undefined	     | 
		| array		       | 
		| object	       | 