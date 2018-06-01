Feature:  The registered user should be 
able to change the quantity of 
all products in her shopping cart.

	Scenario:  Increasing quantity in the shopping cart
		Given that the user shopping cart has one renat 
		When the registered user increases the quantity to two renat
		Then the quantity number for renat should change to two
		And the total sum should also be updated.