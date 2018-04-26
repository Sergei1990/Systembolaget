Feature: Function filtering function for name, price, categ, article nr, and country

	As a user of Systembolagets online shop 
	In order to easily get an overview 
	I want to choose/see certain type of beverages


	Scenario Outline: Filter beverages by different <prices>
		Given that I am a registrered user with age over 20
	    When I choose to filter the products with prices "<prices>"
	    Then there are just beverages with these prices on the product page

	    Examples:

		| prices   |
		| <100     |
		| 101-500  |
		| 501-1000 |
		| <1000    |

	Scenario: Filter beverages by category Alkoholfritt från Frankrike
		Given that I am a registrered user with age over 20
	    When I choose to filter the products with category "<Alkoholfritt från Frankrike>"
	    Then there are just beverages from this category on the product page

	
	Scenario Outline: Filter beveragesr by different parameters <parameter>
		Given that I am a registrered user with age over 20
	    And I need to see all beverages which have <parameter> "<value>"
	    When I choose to filter the products with parameter "<parameter>" "<value>"
	    Then there are just beverages with parameter <parameter> on the product page

	    Examples:
		| parameter         |
		| category          |"Alkoholfritt från Spanien"
		| words in the name |
		| price <100        |
		| price 101-500     |
		| price 501-1000    |
		| price <1000       |
		| article nr        |
		| country           |


	

	    
	    
	    