@Smoke
Feature: How to buy car
    Background:
        Given user navigates to home page
        
    Scenario: Navigation to more information page
        When user clicks on "Mehr erfahren"
        Then user is navigated to more information page
        And user can see four steps how to buy a car