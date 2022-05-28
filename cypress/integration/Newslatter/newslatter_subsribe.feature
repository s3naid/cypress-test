@Smoke
Feature: Newsletter
    Background:
        Given user navigates to offers page
        
    Scenario: Newslatter email confirmation
        When user submits ist email
        Then user gets  confirmation email
        And user email confirmation is completed