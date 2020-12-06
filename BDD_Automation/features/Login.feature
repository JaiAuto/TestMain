Feature: Demo site Login 

@57-test
Scenario: Demo site Login Scenarios1 

	Given User is already on login page 
	When site of login page is Demo 
	Then User enters login name as "test" and enters password as "test" 
	And User clicks on Login Button 
	Then User should be able to login 
	
Scenario Outline: Demo site Login Scenarios2

	Given User is already on login page 
	When site of login page is Demo 
	Then User enters login name as "<username>" and enters password as "<password>" 
	And User clicks on Login Button 
	Then User should be able to login 
	
	Examples: 
	
		|username| |password|
		|test||test|
		|test||test|
		|test||test|
