@FunctionalTest
Feature: Register Feature
Scenario: Register Feature test

Given User in register page
Then put first name
Then put last name
Then put email address
Then enter password
Then click create account button