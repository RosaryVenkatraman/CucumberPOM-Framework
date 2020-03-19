Feature: Freshbenies Admin Loginpage Test.

@Sanity
Scenario: Validate login functionality with incorrect credentials

Given User opens the browser and in login page
Then User enters the incorrect username and incorrect password
Then User clicks the login button
Then Validate whether an alert message is thrown
Then Close the browser

@Sanity
Scenario: Verify whether appropriate error message is displayed on entering invalid emailid.

Given User opens the browser and in login page
Then User enters the invalid emailid
Then User clicks the login button
Then Validate whether an appropriate error message is thrown
Then Close the browser