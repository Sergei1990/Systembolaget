Feature: Clicking on navbar pages
	As a user of an Alco Silk Road I want to be able to click on a menu and switch pages

	Scenario Outline: Click on a menu pages and see that the page changes
		Given that I am on a startpage
		When I click on a page <page>
		Then a page displays <text>

		Examples:
		| page                                   | text                  |
		| http://localhost:3000/index.html       | Rött vin              |
		| http://localhost:3000/AllaDrycker.html | Nils Oscar Alkoholfri |
		| http://localhost:3000/OmOss.html       | Om Alco Silk Road     |
		| http://localhost:3000/Varukorg.html    | Gatuadress            |

	Scenario: Click on search field and write something
		Given that I am on the mainpage
		When I click on search field
		And write something in there
		Then I can see that I wrote

	Scenario: Click on search button and get results
		Given that I am on the main page
		When I write something in search field
		And click on a search button
		Then I get the results