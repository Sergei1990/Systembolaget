Feature:
 As a user of Systembolagets online shop
 If I change my mind 
 I want to be able to add or reduce certain quantities of a beverage to my shopping cart.

	Scenario Outline: change quanitity in a shopping cart
		Given we have a shopping cart with a quantity "<a-quantity>" of Purcari
		When the costumer removes "<change-purcari>" of Purcari
		And the costumer adds "<renat-quant>" of Renat
		Then the shopping cart should be updated to "<new-quant>" total products.

	    Examples:
		| a-quantity | change-purcari | renat-quant | new-quant |
		| 0		     | 0	  		  | 5		    |	5	    |
		| 1		     | 1	  		  | 0		    |   0       |
		| 5		     | 1	  		  | 1		    |   5	    |
				







				