$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01AdminLoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Freshbenies Admin Loginpage Test.",
  "description": "",
  "id": "freshbenies-admin-loginpage-test.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate login functionality with incorrect credentials",
  "description": "",
  "id": "freshbenies-admin-loginpage-test.;validate-login-functionality-with-incorrect-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User opens the browser and in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the incorrect username and incorrect password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Validate whether an alert message is thrown",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_opens_the_browser_and_in_login_page()"
});
formatter.result({
  "duration": 49198192700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_enters_the_incorrect_username_and_incorrect_password()"
});
formatter.result({
  "duration": 5237239100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 67781600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.validate_whether_an_alert_message_is_thrown()"
});
formatter.result({
  "duration": 5108872000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.close_the_browser()"
});
formatter.result({
  "duration": 4052858700,
  "status": "passed"
});
formatter.after({
  "duration": 476300,
  "status": "passed"
});
formatter.after({
  "duration": 16800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify whether appropriate error message is displayed on entering invalid emailid.",
  "description": "",
  "id": "freshbenies-admin-loginpage-test.;verify-whether-appropriate-error-message-is-displayed-on-entering-invalid-emailid.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User opens the browser and in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enters the invalid emailid",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User clicks the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Validate whether an appropriate error message is thrown",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_opens_the_browser_and_in_login_page()"
});
formatter.result({
  "duration": 47003694800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_enters_the_invalid_emailid()"
});
formatter.result({
  "duration": 5103602900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 66136500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.validate_whether_an_appropriate_error_message_is_thrown()"
});
formatter.result({
  "duration": 35191481000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.close_the_browser()"
});
formatter.result({
  "duration": 83944100,
  "status": "passed"
});
formatter.after({
  "duration": 66800,
  "status": "passed"
});
formatter.after({
  "duration": 18400,
  "status": "passed"
});
formatter.uri("02AdminHomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Freshbenies Admin HomePage Test.",
  "description": "",
  "id": "freshbenies-admin-homepage-test.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate whether all the menus and submenus are shown",
  "description": "",
  "id": "freshbenies-admin-homepage-test.;validate-whether-all-the-menus-and-submenus-are-shown",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Verify for the submenus under the menu ActionItems",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify for the submenus under the menu Broker",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify for the submenus under the menu Employer",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify for the submenus under the menu Member",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify for the submenus under the menu Proposals",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify for the submenus under the menu Reports",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify for the submenus under the menu Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify for the submenus under the menu ManageUser",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "CloseHomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_is_in_homepage()"
});
formatter.result({
  "duration": 57309122000,
  "error_message": "java.lang.AssertionError: expected [Automation | Broker Quick Actions] but found [Automation | Login]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.qa.stepDefinitions.HomePageSteps.user_is_in_homepage(HomePageSteps.java:46)\r\n\tat ✽.Given User is in homepage(02AdminHomePage.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.verify_for_the_submenus_under_the_menu_ActionItems()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.verify_for_the_submenus_under_the_menu_Broker()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.verify_for_the_submenus_under_the_menu_Employer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.verify_for_the_submenus_under_the_menu_Member()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.verify_for_the_submenus_under_the_menu_Proposals()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.verify_for_the_submenus_under_the_menu_Reports()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.verify_for_the_submenus_under_the_menu_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.verify_for_the_submenus_under_the_menu_ManageUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.closehomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 331274600,
  "status": "passed"
});
formatter.after({
  "duration": 5273200,
  "status": "passed"
});
});