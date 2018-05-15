Feature: Function filtering by price, category,country, in the storage/not in the storage

	As a user of Systembolagets online shop 
	In order to easily get an overview 
	I want to choose/see certain type of beverages

	Scenario Outline: Filter beverages by parameter <parameter> with value <value> 
		Given that I am a registrered user with age over 20
    When I choose to filter the products by parameter "<parameter>" as "<value>"
    Then there are just beverages with this parameter on the product's page

	  Examples:
		| parameter        | value                       |
		| category         | Alkoholfritt från Frankrike |
		| country          | Frankrike                   |
		| availability1    | true                        |
		| availability0    | false                       |
		| prices <= 100    | 1                           | 
		| prices (100-500] | 2                           | 
		| prices (500-1000]| 3                           | 
		| prices > 1000    | 4                           |  
        

  Scenario: Filter beverages by several parameters
		Given that I am a registrered user with age over 20
    When I choose to filter the products by categories "Rött vin" and "Vitt vin"
    And by countries "Italien" and "Frankrike"
    And which are chipper than 500 kr
    Then there are just beverages with chosen parameters on the product page

	Scenario: Filtering function for the person under 20 years old
		Given that I am a registrered user with age under 20
    When I try to find category "Öl" in the options' list for filtering
    Then there are just "Alkoholfritt"-categories which are available

	

	
	

	

	    
	    
	    