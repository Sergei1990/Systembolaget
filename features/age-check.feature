Feature: Create age-check
	As a user of Systembolagets online shop 
	In order to not waste my time 
	I want to be warned at an early stage
	If I am too young to be able to buy alcoholic beverages in the shop

	Scenario: A person wants to buy alcohol
		Given that a person want to buy alcohol
		When he enters name and legal age 
		Then he can see all the beverages

	Scenario: A person wants to buy non-alcohol
		Given that a person want to buy non-alcohol
		When he enters name and age under 20
		Then he can only see the non-alcoholic beverages



