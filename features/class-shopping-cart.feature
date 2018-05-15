Feature: Class Shopping-cart
	As a user 
	I want to have a shopping cart 
	To find there items I want to buy 
	And to see the total amount.

	Scenario: An empty shopping cart creats after user's first registration
		Given that my name is "Anna" 
		And I am 27 yers old
    When I register  myself on the site
    Then I recieve an empty shopping cart

  Scenario: The user wants to know a total amount in the shopping cart
  	Given that I'm a registrered user with a legal age
    And I add 2 bottles of beverage with id 0 in my shopping cart
    And I add 1 bottles of beverage with id 1 in my shopping cart
    And I add 3 bottles of beverage with id 2 in my shopping cart
    When I oppen my shopping cart to see the total amount
    Then I can see the total amount for added items

  Scenario: The user wants to find the item in the shopping cart which is there
  	Given that I'm a registrered user with a legal age
    And I add 2 bottles of beverage with id 0 in my shopping cart
    And I add 1 bottles of beverage with id 1 in my shopping cart
    And I add 3 bottles of beverage with id 2 in my shopping cart
    When I try to find the beverage with id 2 in my shopping cart
    Then I can see just this item in the shopping cart's list
	    
	Scenario: The user trys to find the item in the shopping cart which is not there
  	Given that I'm a registrered user with a legal age
    And I add 2 bottles of beverage with id 0 in my shopping cart
    And I add 1 bottles of beverage with id 1 in my shopping cart
    And I add 3 bottles of beverage with id 2 in my shopping cart
    When I try to find the beverage with id 3 in my shopping cart
    Then the searching result is an empty list av found products in my shopping cart  