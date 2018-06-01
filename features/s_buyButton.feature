Feature: buy button will reset shoppingcart
As a customer whit a non empty cart
Has filled in streetname, city and postnumber correctly 
And click on buy button 
The cart will reset 

	Scenario: non empty carts is reset after clicking on buy button
		Given the cart has one renat in it
		When the customer has filled in correct information
		And clicks on buy button
		Then the cart is reset

		