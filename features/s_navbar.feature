Feature: Clicking on navbar pages
	As a user of an Alco Silk Road I want to be able to click on a menu and switch pages

	Scenario Outline: Click on a menu pages and see that the page changes
        Given that I am on a startpage
        When I click on a page "<page>"
        Then a page displays "<text>"

        Examples:
        | page         | text                  |
        | #mainPage    | Rött vin              |
        | #allaDrycker | Sortering             |
        | #omOss       | Om Alco Silk Road     |
        | #varukorg    | Gatuadress            |

	Scenario: Click on search field and write something
		Given that I am on the mainpage
		And I logg in
		When I click on search field
		And write corona in there
		And press search button
		Then I can see all corona products