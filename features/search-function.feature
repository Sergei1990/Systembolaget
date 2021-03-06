Feature: Create search function
	As a user of systembolagets online store I want to be able to search after beverages, and sort by names, and sort by categories. 

	Scenario: 
		Given that a user want to search a beverages by a specific name
		When the user searches for the beverage 
		Then the specific beverage turns up as the result


	Scenario: 
		Given that a customer search after all the alcoholfree products in the online store
		When the customer writes beer in the searchfield 
		Then all the beers the online store have to offer shows

	Scenario:
		Given that a user have a search result of all beer in the online store
		When the user searches by name
		Then the search result list should be correct according to the sortiment
