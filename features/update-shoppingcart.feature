Feature:
 As a user of Systembolagets online shop
 If I change my mind 
 I want to be able to add or reduce certain quantities of a beverage to my shopping cart.

	Scenario Outline: change quanitity in a shopping cart
		Given a customer has a shopping cart with "<old-cart>" items
		When the costumer removes a quantity "<remove-quantity>"
		And the costumer adds a quantity "<add-quantity>"
		Then the shopping cart should be updated to "<new-cart>"

	    Examples:
		| old-cart | remove-quantity | add-quantity | new-cart |
		| 0		   | 0	  			 | 5		    |	5	   |
		| 1		   | 1	  			 | 0		    |   0      |
		| 5		   | 1	  			 | 1		    |   5	   |
				

	Scenario Outline:  Display error for wrong quantity in shopping cart
		Given a costumer has a shopping cart with "<cart>"
		When the costumer removes a quantity "<reduce>"
		And the costumer adds a quantity "<add>"
		And the updated shopping cart "<updated-cart>" is showing the incorrect amount of items
		Then an error should "<error>" be displayed.

		Examples:
		| cart | reduce | add | updated-cart  | error |
		| 0	   | 1      |  0  |      -1		  |       |
		| 3	   | 1      |  5  |       3		  |	      |
		| 3	   | 1      |  5  |       7		  |not    |
		| 0	   | 0      |  5  |       5		  |not    |




				