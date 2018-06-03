Feature: Create search function
	As a user of systembolagets online store I want to be able to search after beverages. 

	Scenario: 
		Given that a user want to search a product
		When the user searches for the product
		Then the specific product turns up as the result


	Scenario: 
		Given that a customer search after all beers in the online store
		When the customer writes öl in the searchfield 
		Then all the beers (ÖL) the online store have to offer shows

	
