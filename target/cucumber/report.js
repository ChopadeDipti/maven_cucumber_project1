$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login1.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author:diptichopade"
    },
    {
      "line": 2,
      "value": "#Date:2019-2-25"
    }
  ],
  "line": 5,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 306346,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User access login page of memory Tours application.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user open \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter the application url\"http://newtours.demoaut.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user waits \"5\" seconds to load login page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user maximize login page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "mercuryTours application login page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 11
    }
  ],
  "location": "mercurytsCucumber.OpenBrowser(String)"
});
formatter.result({
  "duration": 10602721876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/",
      "offset": 31
    }
  ],
  "location": "mercurytsCucumber.enterApplicationurl(String)"
});
formatter.result({
  "duration": 3094003159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "mercurytsCucumber.waitTillloginPageload(int)"
});
formatter.result({
  "duration": 14824954,
  "status": "passed"
});
formatter.match({
  "location": "mercurytsCucumber.maximizeBrowser()"
});
formatter.result({
  "duration": 1237237232,
  "status": "passed"
});
formatter.match({
  "location": "mercurytsCucumber.verifyTitle()"
});
formatter.result({
  "duration": 34099185,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify that valid user able to login into mercury Tours application by using valid username and password",
  "description": "",
  "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user access login page of mercury Tours application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters \"diptichopade\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters \"chopade123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user is on flight finder page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user click on signoff link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user access sign on page",
  "keyword": "Then "
});
formatter.match({
  "location": "mercurytsCucumber.verifytitile1()"
});
formatter.result({
  "duration": 209920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diptichopade",
      "offset": 13
    }
  ],
  "location": "mercurytsCucumber.enterUsername(String)"
});
formatter.result({
  "duration": 239586458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chopade123",
      "offset": 13
    }
  ],
  "location": "mercurytsCucumber.enterPassword(String)"
});
formatter.result({
  "duration": 108930940,
  "status": "passed"
});
formatter.match({
  "location": "mercurytsCucumber.clickonlogin()"
});
formatter.result({
  "duration": 17995439788,
  "status": "passed"
});
formatter.match({
  "location": "mercurytsCucumber.flightfinder()"
});
formatter.result({
  "duration": 198818048,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//img[@src\u003d\u0027/images/masts/mast_flightfinder.gif\u0027]\"}\n  (Session info: chrome\u003d72.0.3626.119)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-479UU7V\u0027, ip: \u0027192.168.43.201\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\GIRISH~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49772}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.119, webStorageEnabled: true}\nSession ID: 625071c69f1145eb5c19b3b6d9f5a32c\n*** Element info: {Using\u003dxpath, value\u003d//img[@src\u003d\u0027/images/masts/mast_flightfinder.gif\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat mt.mstr.steps.mercurytsCucumber.flightfinder(mercurytsCucumber.java:106)\r\n\tat ✽.Then user is on flight finder page(login1.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "mercurytsCucumber.clicksignoff()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "mercurytsCucumber.signonpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 143360,
  "status": "passed"
});
formatter.before({
  "duration": 204800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User access login page of memory Tours application.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user open \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter the application url\"http://newtours.demoaut.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user waits \"5\" seconds to load login page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user maximize login page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "mercuryTours application login page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 11
    }
  ],
  "location": "mercurytsCucumber.OpenBrowser(String)"
});
formatter.result({
  "duration": 2539908036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/",
      "offset": 31
    }
  ],
  "location": "mercurytsCucumber.enterApplicationurl(String)"
});
formatter.result({
  "duration": 1005446825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "mercurytsCucumber.waitTillloginPageload(int)"
});
formatter.result({
  "duration": 17223672,
  "status": "passed"
});
formatter.match({
  "location": "mercurytsCucumber.maximizeBrowser()"
});
formatter.result({
  "duration": 6086971270,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d72.0.3626.119)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-479UU7V\u0027, ip: \u0027192.168.43.201\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\GIRISH~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49806}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.119, webStorageEnabled: true}\nSession ID: 751510c4fb564deacf42f804b55bcd60\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat mt.mstr.steps.mercurytsCucumber.maximizeBrowser(mercurytsCucumber.java:57)\r\n\tat ✽.And user maximize login page(login1.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "mercurytsCucumber.verifyTitle()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that valid user able to login into mercury Tours application by using Invalid username and password",
  "description": "",
  "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-invalid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user access login page of mercury Tours application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user enters \"dipti\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters \"chopade123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user is on flight finder page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user click on signoff link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user not access sign on page",
  "keyword": "Then "
});
formatter.match({
  "location": "mercurytsCucumber.verifytitile1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "dipti",
      "offset": 13
    }
  ],
  "location": "mercurytsCucumber.enterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "chopade123",
      "offset": 13
    }
  ],
  "location": "mercurytsCucumber.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "mercurytsCucumber.clickonlogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "mercurytsCucumber.flightfinder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "mercurytsCucumber.clicksignoff()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 56747,
  "status": "passed"
});
formatter.uri("login2.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author:dipti"
    },
    {
      "line": 2,
      "value": "#Date:2019-2-25"
    }
  ],
  "line": 5,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Verify that valid user able to login into mercury Tours application by using valid username and password",
  "description": "",
  "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user access login page of mercury Tours application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters \"\u003cusername\u003e\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user is on flight finder page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user click on signoff link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user access sign on page",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password;;1"
    },
    {
      "cells": [
        "diptichopade",
        "chopade123"
      ],
      "line": 25,
      "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 73386,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User access login page of memory Tours application.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user open \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter the application url\"http://newtours.demoaut.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user waits \"5\" seconds to load login page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user maximize login page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "mercuryTours application login page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 11
    }
  ],
  "location": "mercurytsCucumber.OpenBrowser(String)"
});
formatter.result({
  "duration": 2470831586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/",
      "offset": 31
    }
  ],
  "location": "mercurytsCucumber.enterApplicationurl(String)"
});
formatter.result({
  "duration": 1050012565,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d72.0.3626.119)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-479UU7V\u0027, ip: \u0027192.168.43.201\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\GIRISH~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49840}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.119, webStorageEnabled: true}\nSession ID: 4bd988ab181d5025fa5af8adc8b45b6d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat mt.mstr.steps.mercurytsCucumber.enterApplicationurl(mercurytsCucumber.java:45)\r\n\tat ✽.And user enter the application url\"http://newtours.demoaut.com/\"(login2.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "mercurytsCucumber.waitTillloginPageload(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "mercurytsCucumber.maximizeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "mercurytsCucumber.verifyTitle()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "Verify that valid user able to login into mercury Tours application by using valid username and password",
  "description": "",
  "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user access login page of mercury Tours application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters \"diptichopade\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters \"chopade123\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user is on flight finder page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user click on signoff link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user access sign on page",
  "keyword": "Then "
});
formatter.match({
  "location": "mercurytsCucumber.verifytitile1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "diptichopade",
      "offset": 13
    }
  ],
  "location": "mercurytsCucumber.enterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "chopade123",
      "offset": 13
    }
  ],
  "location": "mercurytsCucumber.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "mercurytsCucumber.clickonlogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "mercurytsCucumber.flightfinder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "mercurytsCucumber.clicksignoff()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "mercurytsCucumber.signonpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 58453,
  "status": "passed"
});
});