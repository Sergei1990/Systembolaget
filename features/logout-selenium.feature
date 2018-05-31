Feature: Able to log out from the shop
	As a customer of Systembolagets online shop
	In order to log out from the store, there will be
	a log out button when customer are loged in. 

	Scenario:  A person who are loged in as a customer
		Given that the user are loged in with "#name" and "#age" at the systembolaget 	
   		When user want to log out from the store
   		And click the button "#logUtDiv"
    	Then user gets logged out and returning to the login page