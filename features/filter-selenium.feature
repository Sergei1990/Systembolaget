Feature: Filtering of the products

	As a user of Systembolagets online shop 
	In order to easily fined information about the products
	I want to be able to filter the products' list


	Scenario Outline: Filter the products' list by parameter <parameter> with options <parameter1> and <parameter2>
		Given that the user is "Anna" who is 22 years old 
		And the user is on the "http://localhost:3000/AllaDrycker.html"
	    When user click on "#filterButton"
	    Then the list with filtrering options appears
	    And parameter "I lager" is checked by default 
	    When user choose to filter the products by "option" "<parameter>"
	    And user choose to filter the products by "option1" "<parameter1>"
	    And user choose to filter the products by "option2" "<parameter2>"
	    And click on the OK-button "#filterOK"
	    Then the list of the products is filtered according to the chosen parameter

        Examples:
		| parameter       | parameter1| parameter2          |
		| Priser          | <=100 SEK | 500 - 1000 SEK      |
		| Kategorier      | Gin       | Brandy och Vinsprit |	
		| Ursprungsländer | Ryssland  | Armenien            |


	Scenario Outline: Available categories in the filtering's function for the user under legal age
		Given that the user is "Anna" who is 17 years old 
		And the user is on the "http://localhost:3000/AllaDrycker.html"
	    When user click on "#filterButton"
	    Then the list with filtrering options appears
	    And parameter "I lager" is checked by default 
	    When user choose to filter the products by "option" "<parameter>"
	    Then just one category "<parameter1>" is available
	    When user choose to filter the products by "option1" "<parameter1>"
	    And click on the OK-button "#filterOK"
	    Then the filtered products on the page contain less than "0.5%" of alcohol 

        Examples:
		| parameter       | parameter1   |
        | Kategorier      | Alkoholfritt |	


    Scenario Outline: Filtering's function for the user under legal age 
		Given that the user is "Anna" who is 17 years old 
		And the user is on the "http://localhost:3000/AllaDrycker.html"
	    When user click on "#filterButton"
	    Then the list with filtrering options appears
	    And parameter "I lager" is checked by default 
	    When user choose to filter the products by "option" "<parameter>"
	    And user choose to filter the products by "option1" "<parameter1>"
	    And user choose to filter the products by "option2" "<parameter2>"
	    And click on the OK-button "#filterOK"
	    Then the list of the products is filtered according to the chosen parameter
	    And the filtered products on the page contain less than "0.5%" of alcohol 

        Examples:
		| parameter       | parameter1| parameter2          |	
		| Priser          | <=100 SEK | 500 - 1000 SEK      |
		| Ursprungsländer | Chile     | Finland             |
