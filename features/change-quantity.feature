Feature:
 As a user of Systembolagets online shop
 If I change my mind 
 I want to be able to add or reduce certain quantities of a beverage to my shopping cart.

	Scenario: Increasing quantity of a product in a cart
		Given that we have product quantity of five in a cart
		When I change products quantity by fifteen
		Then I have product quantity of fifteen in a cart

	Scenario: Decreasing quantity of a product in a cart
		Given that we have a product quantity of fifteen in a cart
		When I change product quantity to five 
		Then I have product quantity of five in a cart.




				