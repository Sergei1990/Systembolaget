Feature:
	As a user of Systembolagets online shop
	In order to buy beverages
	I want to be able to add a certain quantity of a beverage to my shopping cart

	Scenario: Add certain quantity to shopping cart
		Given a customer with an empty shopping cart
		When the custumer adds 10 Renat
		Then the quantity of Renat should increase from zero to 10
		
	Scenario: Reduce certain quantitys in shopping cart
		Given a customer with non-empty shopping cart
		When the customer clicks on reduce button
		Then the quantity of beverage should decrease from 10 to 9