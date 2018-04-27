Feature: Logging in with username and password
	As a costumer of Systembolagets online shop
	In order to buy products online
	I want to be able to login as a Systembolaget member

	Scenario:  A person has a username and password
		Given that I have a username as a non-empty string
    	And a password as a non-empty string
    	When I try to login with this data
    	Then I should be logged in
    


	Scenario Outline:
		Given that I am in the sytembolagets main page
		When I fill in username with <"invalid-username"> 
		And i fill in password with <"invalid-password"> 
		And click login button
		Then I should get a runtime error.

		Examples:
		| invalid-username | invalid-password  | 
		| empty string     | empty string      |
		| number	       | number            |
		| boolean	       | boolean           | 
		| undefined	       | undefined         |
		| array		       | array             |
		| object	       | object            |