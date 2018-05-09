Feature:
    As a user 
    I want to have a shopping cart on the site 
    To find there items I want to buy and the total amount.


  	Scenario: To see the total sum of the goods in my shopping cart
	    Given  that I am a registrered user with a legal  age
	    And my shopping cart is empty    
	    When I add three different beverages in my shopping cart, 3, 10, 2 in number accordingly
	    Then I can see the the calculated total amount for the goods in my shopping cart

    


    
 

  






				