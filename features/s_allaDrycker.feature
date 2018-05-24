Feature: Clicking on navbar pages
	As a user of an Alco Silk Road I want to be able to click on a menu and switch pages

	Scenario Outline: Click on Filtrering or Sortering button and get a dropdown menu
		Given that I'am on an Alla Drycker page
		When I click on Filtrering/Sortering <button>
		Then i will get a dropdown <dropdown> menu

		Examples:
		| button     | dropdown      |
		| Filtrering | Kategorier    |
		| Sortering  | Högsta priser |