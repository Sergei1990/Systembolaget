Feature: Sortering of the products

	As a user of Systembolagets online shop 
	In order to easily fined information about the products
	I want to be able to sort the products' list

	Scenario Outline: Sort the products' list by parameter <parameter> 
		Given that I am a registrered user with age   21
		And I am on the products' page 
	    When I choose to sort the products by parameter <parameter>
	    And click on the button OK
	    Then the list of the products is sorted according to the chosen parameter

        Examples:
		| parameter     |
		| A-Z           |
		| Z-A           |
		| Högsta priser |
		| Lägsta priser |
		| Ursprungsland | 
		


	

	
	

	

	    
	    
	    