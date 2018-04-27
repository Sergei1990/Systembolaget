Feature: Create search function
	As a user of systembolagets online store I want to be able to search after beverages, and sort by names, and sort by categories. 

	Scenario: 
		Given that a user want to search a beverages by a specific name
		When the user writes the name of the beverage 
		Then the specific beverage turns up as the result


	Scenario: 
		Given that a customer search after all the beer in the online store
		When the customer writes beer in the searchfield 
		Then all the beers the onlie store have to offer shows

	Scenario:
		Given that a user have a search result of all beer in the online store
		When the user sort by name
		Then the search result list sorts after names
