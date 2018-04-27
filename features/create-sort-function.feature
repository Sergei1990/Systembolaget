Feature: Create sort function
	As a customer of systembolaget I want be able to sort by names alphabetically after a search for beverages. 

	Scenario: 
		Given that a customer want to sort by names alphabetically after a search
		When the customer sorts names alphabetically 
		Then the site shows the beverages sorted by names alphabetically


	Scenario: 
		Given that a customer sort products after price (min to high)
		When the customer sorts pproducts after price  
		Then all products sorts afer price from low to high

	Scenario:
		Given that a user search after categories
		When the user sort by name
		Then the search result list sorts after names in alphabetically order