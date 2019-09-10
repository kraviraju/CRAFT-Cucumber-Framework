Feature: Login 
	As a user, I want to be able to login to the application
	when I present valid credentials

Background:
	Given I am in the login page of the application

@InvalidUsername	
Scenario: Login with invalid username and invalid password
	When I login using the invalid username abc and the invalid password xyz
	Then The application should stay on the login page, and not log me in
	
@InvalidPassword
Scenario: Login with valid username and invalid password
	When I login using the valid username mercury and the invalid password xyz
	Then The application should stay on the login page, and not log me in
	
@validlogin
Scenario Outline: Login with valid username and valid password
	When I login using the valid username <Username> and the valid password <Password>
	Then The application should log me in and navigate to the Flight Finder page

@Invalidlogin
Scenario Outline: Login with valid username and valid password
	When I login using the invalid username <Username> and the invalid password <Password>
	Then The application should not log me in and show login page
	
	Examples:
	|Username	|Password	|
	|mercury	|mercury	|
	|mercury	|test   	|