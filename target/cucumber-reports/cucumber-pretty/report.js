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
  "duration": 10765861600,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QUFA5SU\u0027, ip: \u002710.100.102.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00A90C83+1707139]\n\tOrdinal0 [0x009F68F1+1075441]\n\tOrdinal0 [0x0096DFC9+516041]\n\tOrdinal0 [0x0096687B+485499]\n\tOrdinal0 [0x00966499+484505]\n\tOrdinal0 [0x00965D96+482710]\n\tOrdinal0 [0x009653AC+480172]\n\tOrdinal0 [0x009655D5+480725]\n\tOrdinal0 [0x00965035+479285]\n\tOrdinal0 [0x0096CD25+511269]\n\tOrdinal0 [0x00964FE8+479208]\n\tOrdinal0 [0x00965A3B+481851]\n\tOrdinal0 [0x009653AC+480172]\n\tOrdinal0 [0x009655D5+480725]\n\tOrdinal0 [0x00965035+479285]\n\tOrdinal0 [0x0096B5AE+505262]\n\tOrdinal0 [0x00964FE8+479208]\n\tOrdinal0 [0x00965A3B+481851]\n\tOrdinal0 [0x009653AC+480172]\n\tOrdinal0 [0x009655D5+480725]\n\tOrdinal0 [0x00965035+479285]\n\tOrdinal0 [0x00969E1C+499228]\n\tOrdinal0 [0x00964FE8+479208]\n\tOrdinal0 [0x00965A3B+481851]\n\tOrdinal0 [0x009653AC+480172]\n\tOrdinal0 [0x009655D5+480725]\n\tOrdinal0 [0x00965035+479285]\n\tOrdinal0 [0x009694B7+496823]\n\tOrdinal0 [0x00964FE8+479208]\n\tOrdinal0 [0x00965A3B+481851]\n\tOrdinal0 [0x009653AC+480172]\n\tOrdinal0 [0x009655D5+480725]\n\tOrdinal0 [0x00965035+479285]\n\tOrdinal0 [0x00961B5C+465756]\n\tOrdinal0 [0x00964FE8+479208]\n\tOrdinal0 [0x00964EC4+478916]\n\tOrdinal0 [0x0096ECA0+519328]\n\tOrdinal0 [0x0091CA67+182887]\n\tOrdinal0 [0x0091BDDD+179677]\n\tOrdinal0 [0x00919D4B+171339]\n\tOrdinal0 [0x00901D4A+73034]\n\tOrdinal0 [0x00902DC0+77248]\n\tOrdinal0 [0x00902D59+77145]\n\tOrdinal0 [0x00A0BB67+1162087]\n\tGetHandleVerifier [0x00B2A966+508998]\n\tGetHandleVerifier [0x00B2A6A4+508292]\n\tGetHandleVerifier [0x00B3F7B7+594583]\n\tGetHandleVerifier [0x00B2B1D6+511158]\n\tOrdinal0 [0x00A0402C+1130540]\n\tOrdinal0 [0x00A0D4CB+1168587]\n\tOrdinal0 [0x00A0D633+1168947]\n\tOrdinal0 [0x00A25B35+1268533]\n\tBaseThreadInitThunk [0x75886359+25]\n\tRtlGetAppContainerNamedObjectPath [0x76FB7B74+228]\n\tRtlGetAppContainerNamedObjectPath [0x76FB7B44+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.qa.pages.BasePage.init_driver(BasePage.java:34)\r\n\tat com.qa.stepDefinitions.LoginPageSteps.user_opens_the_browser_and_in_login_page(LoginPageSteps.java:40)\r\n\tat ✽.Given User opens the browser and in login page(01AdminLoginPage.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageSteps.user_enters_the_incorrect_username_and_incorrect_password()"
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
  "location": "LoginPageSteps.validate_whether_an_alert_message_is_thrown()"
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
  "duration": 55728100,
  "status": "passed"
});
formatter.after({
  "duration": 381100,
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
  "duration": 45897959400,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QUFA5SU\u0027, ip: \u002710.100.102.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\ROSARY~1.VEN\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:56271}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: ca8d6f6765429f43df0e16db6f4e1f05\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:694)\r\n\tat com.qa.pages.BasePage.init_driver(BasePage.java:41)\r\n\tat com.qa.stepDefinitions.LoginPageSteps.user_opens_the_browser_and_in_login_page(LoginPageSteps.java:40)\r\n\tat ✽.Given User opens the browser and in login page(01AdminLoginPage.feature:15)\r\n",
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
  "duration": 5050500,
  "status": "passed"
});
formatter.after({
  "duration": 850700,
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
