Feature: Add to shopping cart
	As a user of Systembolagets online shop In order to buy beverages I want to be able to add a certain quantity of a beverage to my shopping cart


    Scenario: Add a beverage in a shopping cart
        Given that I'm in Systembolaget
        When I have decided what I want to buy
        And I have decided how much of a certain beverage I want
        And I add a bevarege in a cart
        Then you have received your product in your cart