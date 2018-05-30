Feature: Filtering of the products

	As a user of Systembolagets online shop 
	In order to easily fined information about the products
	I want to be able to filter the products' list

	Scenario Outline: Filter the products' list by parameter <parameter> 
		Given that the user is "Anna" who is 22 years old 
		And the user is on the "http://localhost:3000/AllaDrycker.html"
	    When user click on "#filterButton"
	    Then list with filtrering options uppstår
	    And parameter I lager "#customCheck1" is checked by default 
	    When user choose to filter the products by "option" "<parameter>" with check-box "<value>"
	    And user choose to filter the products by "option1" "<parameter1>" with check-box "<value1>"
	    And user choose to filter the products by "option2" "<parameter2>" with check-box "<value2>"
	    And click on the OK-button "#filterOK"
	    Then the list of the products is filtered according to the chosen parameter

        Examples:
		| parameter       | value         | parameter1| value1                  | parameter2          | value2                   |	
		| Priser          | #optionCheck2 | <=100 SEK | #prLabCheck0            | 500 - 1000 SEK      | #prLabCheck2             |
        | Kategorier      | #optionCheck3 | Gin       | #labCatCustomCheck15    | Brandy och Vinsprit | #labCatCustomCheck8      |	
		| Ursprungsländer | #optionCheck4 | Ryssland  |#labCountryCustomCheck70 | Armenien            | #labCountryCustomCheck1  |
		

	

	
	

	


	    
	    
	    