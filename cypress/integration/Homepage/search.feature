@Smoke
Feature: Search for used cars
    Background:
        Given user navigates to home page

    Scenario: Find car by brand and model
        When user selects car brand and model type
        And user submits filters
        Then user is navigated to car showcase page
        And selected filters are applied