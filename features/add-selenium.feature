Feature: Add the product to the shopping cart

	As a user of Systembolagets online shop 
	In order to buy products
	I want to be able to add them into my shopping cart

	Scenario: Add some products to the shopping cart from the page AllaDrycker
		Given that the user is "Anna" who is 22 years old
		And the user is on the "http://localhost:3000/AllaDrycker.html"
		When the user clicks on the LäggTill-button to add 3 bottles of the beverage 1 in the product's list
		And the user clicks on the LäggTill-button to add 2 bottles of the beverage 5 in the product's list
		And the user clicks on the LäggTill-button to add 1 bottles of the beverage 1 in the product's list
		Then the current quantity of the added products displays on the shopping cart's icon
		When the user clicks on the shopping cart's icon
		And the page "http://localhost:3000/Varukorg.html" is opened
		Then there are 4 bottles of the beverage nr 1 in the cart's list
		And there are 2 bottles of the beverage nr 2 in the cart's list
		And the total amount  in the shopping cart is changed accordingly

	
