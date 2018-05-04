Feature:
    As a user of Systembolagets online shop
    I want to be able to buy chosen beverages 
    To get what I want

	Scenario: To buy beverages with quick registration
		Given that I am a quick-registrered user
		And there are 2 beverages with index 0 in my shopping cart
		And there are 3 beverages with index 1 in my shopping cart
	    When I click on the button Buy
	    Then I recieve a message that I need to enter my post adress in the profile to buy the products.

	Scenario: To buy beverages with complete registration
		Given that I am a complete-registrered user
		And I have 2 beverages with index 0 in my shopping cart
		And I have 3 beverages with index 1 in my shopping cart
	    When I click on the button Buy
	    Then my shopping card is empty
	    And the total  amount in the shopping cart is 0






				