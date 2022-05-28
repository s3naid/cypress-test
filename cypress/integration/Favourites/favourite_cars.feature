@Smoke
Feature: Favourite cars
    Background:
        Given user navigates to cars page
        
    Scenario: Add and remove favourite cars
        When user selects a car as favourite
        Then count of favourite car on Favourites tab will appear
        And user can navigate to favourite cars
        And see favourite cars
        When user removes car from Favourites
        Then car counter will be lowered and car does not appear on favourites list
        
