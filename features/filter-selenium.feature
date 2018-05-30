Feature: Filtering of the products

	As a user of Systembolagets online shop 
	In order to easily fined information about the products
	I want to be able to filter the products' list

	Scenario Outline: Filter the products' list by parameter <parameter> with options <parameter1> and <parameter2>
		Given that the user is "Anna" who is 22 years old 
		And the user is on the "http://localhost:3000/AllaDrycker.html"
	    When user click on "#filterButton"
	    Then the list with filtrering options appears
	    And parameter I lager "#customCheck1" is checked by default 
	    When user choose to filter the products by "option" "<parameter>" with check-box "<value>"
	    And user choose to filter the products by "option1" "<parameter1>" with check-box "<value1>"
	    And user choose to filter the products by "option2" "<parameter2>" with check-box "<value2>"
	    And click on the OK-button "#filterOK"
	    Then the list of the products is filtered according to the chosen parameter

        Examples:
		| parameter       | value         | parameter1| value1                  | parameter2          | value2                 |	
		| Priser          | #optionCheck2 | <=100 SEK | #prLabCheck0            | 500 - 1000 SEK      | #prLabCheck2           |
		| Kategorier      | #optionCheck3 | Gin       | #labCatCustomCheck15    | Brandy och Vinsprit | #labCatCustomCheck8    |	
		| Ursprungsländer | #optionCheck4 | Ryssland  |#labCountryCustomCheck70 | Armenien            | #labCountryCustomCheck1|

	Scenario Outline: Available categories in the filtering's function for the user under legal age
		Given that the user is "Anna" who is 17 years old 
		And the user is on the "http://localhost:3000/AllaDrycker.html"
	    When user click on "#filterButton"
	    Then the list with filtrering options appears
	    And parameter I lager "#customCheck1" is checked by default 
	    When user choose to filter the products by "option" "<parameter>" with check-box "<value>"
	    Then just one category "<parameter1>" is available
	    And user choose to filter the products by "option1" "<parameter1>" with check-box "<value1>"
	    And click on the OK-button "#filterOK"
	    Then the filtered products on the page contain less than "0.5%" of alcohol 

        Examples:
		| parameter       | value         | parameter1   | value1                  | 
        | Kategorier      | #optionCheck3 | Alkoholfritt | #labCatCustomCheck0     |


    Scenario Outline: Filtering's function for the user under legal age 
		Given that the user is "Anna" who is 17 years old 
		And the user is on the "http://localhost:3000/AllaDrycker.html"
	    When user click on "#filterButton"
	    Then the list with filtrering options appears
	    And parameter I lager "#customCheck1" is checked by default 
	    When user choose to filter the products by "option" "<parameter>" with check-box "<value>"
	    And user choose to filter the products by "option1" "<parameter1>" with check-box "<value1>"
	    And user choose to filter the products by "option2" "<parameter2>" with check-box "<value2>"
	    And click on the OK-button "#filterOK"
	    Then the list of the products is filtered according to the chosen parameter
	    And the filtered products on the page contain less than "0.5%" of alcohol 

        Examples:
		| parameter       | value         | parameter1| value1                  | parameter2          | value2                   |	
		| Priser          | #optionCheck2 | <=100 SEK | #prLabCheck0            | 500 - 1000 SEK      | #prLabCheck2             |
		| Ursprungsländer | #optionCheck4 | Chile     | #labCountryCustomCheck1 | Finland             | #labCountryCustomCheck2  |

	
       


    
	    