Feature:
    As an owner of Systembolagets online shop
    I want the quantity of the items in the storage changes 
    When user add or remove items in the shopping cart 
    To control items' availability 


  	Scenario: Changing item's quantity in the storage when user adds products in the cart
	    Given that there is a user with a legal age on the site
	    And user has 5 items with article 1 in the shopping cart 
	    And there are 10 bottles of the beverage in the storehouse
	    When user add 4 items of the same beverage into the shopping cart
	    Then there are 9 items in the user's shopping cart
	    And the quantity of the item in the storehouse decreased by 7
   

  	Scenario: Add more quantity of items than there are in the storehouse
	    Given that there is a user with a legal age on the site
	    And user has 5 items with article 1 in the shopping cart 
	    And there are 4 bottles of the beverage in the storehouse
	    When user add 6 items of the same beverage into the shopping cart
	    Then the message displays that there are just 4 bottles of beverage in the storehose
	    And the quantity of the beverage in the shopping cart did not changed

	Scenario Outline: Changing item's quantity in the storage when user changes quantity of the product in the cart
	    Given that there is a user with a legal age on the site
	    And user has 5 items with article 1 in the shopping cart 
	    And there are 10 bottles of the beverage in the storehouse
	    When user changes the item's quantity to a new quantity "<quantityCart>" in the shopping cart
	    Then there are "<quantityCart>" items in the user's shopping cart
	    And the quantity of the item  in the storage is "<quantityStore>"

	    Examples:
	    |quantityCart|quantityStore|
	    |    9       |      6      |
	    |    2       |      13     |

    Scenario: Change item's quantity in the shopping cart which is less than storage has
	    Given that there is a user with a legal age on the site
	    And user has 3 items with article 1 in the shopping cart
	    And there are 2 bottles of the beverage in the storehouse
	    When I change the quantity of the beverage in my shopping cart to 8
	    Then the message displays that there are just 2 bottles of beverage in the storehose 
	    And the quantity of the beverage in the shopping cart did not changed

	Scenario: Changing item's quantity in the storage after removing items from the shopping cart
	    Given that there is a user with a legal age on the site
	    And user has 5 items with article 1 in the shopping cart 
	    And there are 4 bottles of the beverage in the storehouse
	    When i cklick on the Remove button of the item in the shopping cart
	    Then the shopping cart is empty
	    And the quantity of the beverage in the storage increased by 5

	Scenario: Changing item's quantity in the storage after removing All items from the shopping cart
	    Given that there is a user with a legal age on the site
	    And user has 5 items with  article 1 in the shopping cart 
	    And user has 2 items with  article 1000005 in the shopping cart
	    And there are 4 bottles of the beverage with article 1 in the storehouse
	    And there are 8 bottles of the beverage with article 1000005 in the storehouse
	    When i cklick on the Clear Cart button of the item in the shopping cart
	    Then the shopping cart is empty
	    And the quantities of the items in the storage are 9 and 10 respectivly


    


    
 

  






				