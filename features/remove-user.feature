Feature:
    As an owner of Systembolagets online shop
    I want user is able to log out 
    To let another user to log in

	Scenario: To log out 
		Given that I am  a  registrered user
		And there are 2 beverages with  index 0 in my shopping cart
		And there are 3 beverages with  index 1 in my shopping cart
    When I click on the link Log out
    Then the items in the shopping cart are returned into the storage
    And the user is not registrered on the web-site 








				