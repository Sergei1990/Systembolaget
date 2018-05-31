Feature: Remove everything from the cart
	As a user of an Alco Silk Road I want to be able to remove everything from my cart with one click

	Scenario: Click a magic button to clear the cart
		Given that I have two bottles in my cart
		When I click Täm Varukorg button
		Then my cart magically becomes empty