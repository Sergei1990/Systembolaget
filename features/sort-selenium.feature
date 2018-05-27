Feature: Sortering of the products

	As a user of Systembolagets online shop 
	In order to easily fined information about the products
	I want to be able to sort the products' list

	Scenario Outline: Sort the products' list by parameter <parameter> 
		Given that the user is "Anna" who is 22 years old 
		And the user is on the "http://localhost:3000/AllaDrycker.html"
	    When I click on "#sortButton"
	    And choose to sort the products by parameter with radio-button "<value>"
	    And click on the OK-button "#sortOk"
	    Then the list of the products is sorted according to the chosen parameter

        Examples:
		| parameter     |value         |		
		| A-Z           |#customLabel1 |
		| Z-A           |#customLabel2 |
		| Högsta priser |#customLabel3 |
		| Lägsta priser |#customLabel4 |
		| Ursprungsland |#customLabel5 |


	

	
	

	


	    
	    
	    