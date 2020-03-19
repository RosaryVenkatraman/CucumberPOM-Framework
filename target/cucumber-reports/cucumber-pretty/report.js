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
  "duration": 68340164600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_enters_the_incorrect_username_and_incorrect_password()"
});
formatter.result({
  "duration": 5676188400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 90924799,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.validate_whether_an_alert_message_is_thrown()"
});
formatter.result({
  "duration": 5380534000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.close_the_browser()"
});
formatter.result({
  "duration": 148925300,
  "status": "passed"
});
formatter.after({
  "duration": 325199,
  "status": "passed"
});
formatter.after({
  "duration": 36300,
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
  "duration": 15688356200,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QUFA5SU\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00A90C83+1707139]\n\tOrdinal0 [0x009F68F1+1075441]\n\tOrdinal0 [0x0096DE72+515698]\n\tOrdinal0 [0x00967CA8+490664]\n\tOrdinal0 [0x0096839B+492443]\n\tOrdinal0 [0x009692F5+496373]\n\tOrdinal0 [0x00964F05+478981]\n\tOrdinal0 [0x0096ECA0+519328]\n\tOrdinal0 [0x0091CA67+182887]\n\tOrdinal0 [0x0091BDDD+179677]\n\tOrdinal0 [0x00919D4B+171339]\n\tOrdinal0 [0x00901D4A+73034]\n\tOrdinal0 [0x00902DC0+77248]\n\tOrdinal0 [0x00902D59+77145]\n\tOrdinal0 [0x00A0BB67+1162087]\n\tGetHandleVerifier [0x00B2A966+508998]\n\tGetHandleVerifier [0x00B2A6A4+508292]\n\tGetHandleVerifier [0x00B3F7B7+594583]\n\tGetHandleVerifier [0x00B2B1D6+511158]\n\tOrdinal0 [0x00A0402C+1130540]\n\tOrdinal0 [0x00A0D4CB+1168587]\n\tOrdinal0 [0x00A0D633+1168947]\n\tOrdinal0 [0x00A25B35+1268533]\n\tBaseThreadInitThunk [0x75886359+25]\n\tRtlGetAppContainerNamedObjectPath [0x76FB7B74+228]\n\tRtlGetAppContainerNamedObjectPath [0x76FB7B44+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.qa.pages.BasePage.init_driver(BasePage.java:34)\r\n\tat com.qa.stepDefinitions.LoginPageSteps.user_opens_the_browser_and_in_login_page(LoginPageSteps.java:40)\r\n\tat ✽.Given User opens the browser and in login page(01AdminLoginPage.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageSteps.user_enters_the_invalid_emailid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageSteps.user_clicks_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageSteps.validate_whether_an_appropriate_error_message_is_thrown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 39880199,
  "status": "passed"
});
formatter.after({
  "duration": 15947699,
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
  "duration": 15414624001,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QUFA5SU\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00A90C83+1707139]\n\tOrdinal0 [0x009F68F1+1075441]\n\tOrdinal0 [0x0096DE72+515698]\n\tOrdinal0 [0x00967CA8+490664]\n\tOrdinal0 [0x0096839B+492443]\n\tOrdinal0 [0x009692F5+496373]\n\tOrdinal0 [0x00964F05+478981]\n\tOrdinal0 [0x0096ECA0+519328]\n\tOrdinal0 [0x0091CA67+182887]\n\tOrdinal0 [0x0091BDDD+179677]\n\tOrdinal0 [0x00919D4B+171339]\n\tOrdinal0 [0x00901D4A+73034]\n\tOrdinal0 [0x00902DC0+77248]\n\tOrdinal0 [0x00902D59+77145]\n\tOrdinal0 [0x00A0BB67+1162087]\n\tGetHandleVerifier [0x00B2A966+508998]\n\tGetHandleVerifier [0x00B2A6A4+508292]\n\tGetHandleVerifier [0x00B3F7B7+594583]\n\tGetHandleVerifier [0x00B2B1D6+511158]\n\tOrdinal0 [0x00A0402C+1130540]\n\tOrdinal0 [0x00A0D4CB+1168587]\n\tOrdinal0 [0x00A0D633+1168947]\n\tOrdinal0 [0x00A25B35+1268533]\n\tBaseThreadInitThunk [0x75886359+25]\n\tRtlGetAppContainerNamedObjectPath [0x76FB7B74+228]\n\tRtlGetAppContainerNamedObjectPath [0x76FB7B44+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.qa.pages.BasePage.init_driver(BasePage.java:34)\r\n\tat com.qa.stepDefinitions.HomePageSteps.user_is_in_homepage(HomePageSteps.java:40)\r\n\tat ✽.Given User is in homepage(02AdminHomePage.feature:6)\r\n",
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
formatter.after({
  "duration": 9309800,
  "status": "passed"
});
formatter.after({
  "duration": 7669600,
  "status": "passed"
});
});