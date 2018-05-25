Feature: Sortering of the products

	As a user of Systembolagets online shop 
	In order to easily fined information about the products
	I want to be able to sort the products' list

	Scenario Outline: Sort the products' list by parameter <parameter> 
		Given I am on the "allaDrycker.html"
		And that I am a registrered user with age   21
	    When I click on "<#sortButton>"
	    Then I see list of sortering's options
	    When I choose to sort the products by parameter <parameter> with radio-button "<value>"
	    And click on the OK-button "<#sortOk>"
	    Then the list of the products is sorted according to the chosen parameter

        Examples:
		| parameter     |value         |
		| A-Z           |#customRadio1 |
		| Z-A           |#customRadio2 |
		| Högsta priser |#customRadio3 |
		| Lägsta priser |#customRadio4 |
		| Ursprungsland |#customRadio5 |
		


	

	
	

	

	    
	    
	    