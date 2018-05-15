Feature: Function to remove items from the shopping cart

	As a user of Systembolagets online shop 
	If I change my mind 
	I want to be able to remove beverages from my shopping cart

	Scenario: Remove the beverages from the shopping cart
		Given that I am a registrered user with a legal age
    And there are 2 bottles of beverage with id 0 in my shopping cart
    And there are 1 bottles of beverage with id 1 in my shopping cart
    And there are 3 bottles of beverage with id 2 in my shopping cart
    When I click on the button Remove for beverages with id 1 and 2 in my cart
    Then these beverages are removed
    And total ammount in the shopping cart is changed accordingly
    And these beverges are returned into the storehouse

	Scenario: Remove all beverages from the shopping cart
		Given that I am a registrered user with a legal age
    And there are 2 bottles of beverage with id 0 in my shopping cart
    And there are 1 bottles of beverage with id 1 in my shopping cart
    And there are 3 bottles of beverage with id 2 in my shopping cart
    When I click on the button Clear Cart
    Then all the beverages are removed
    And total ammount in the shopping cart is 0

 


 