$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BookFlightTickets.feature");
formatter.feature({
  "line": 1,
  "name": "Book flight tickets",
  "description": "As a user with valid credentials,\nI want to be able to search for flight tickets between a given source and destination,\nselect from the available options presented, and book the tickets accordingly",
  "id": "book-flight-tickets",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6988489258,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am in the login page of the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I login using the valid username mercury and the valid password mercury",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefs.i_am_in_login_page()"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 5857487092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 33
    },
    {
      "val": "mercury",
      "offset": 64
    }
  ],
  "location": "LoginStepDefs.i_login_using_valid_username_valid_password(String,String)"
});
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 6335495709,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Find and book flight tickets",
  "description": "",
  "id": "book-flight-tickets;find-and-book-flight-tickets",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@BookFlight"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I search for flights using the following criteria:",
  "rows": [
    {
      "cells": [
        "FromPort",
        "FromMonth",
        "FromDate",
        "ToPort",
        "ToMonth",
        "ToDate",
        "Airline",
        "PassengerCount"
      ],
      "line": 13
    },
    {
      "cells": [
        "London",
        "July",
        "23",
        "Paris",
        "July",
        "29",
        "Unified Airlines",
        "2"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I select the first available flight",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I book the tickets using the following passenger details:",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName"
      ],
      "line": 17
    },
    {
      "cells": [
        "iCIMS",
        "Labs"
      ],
      "line": 18
    },
    {
      "cells": [
        "QA",
        "Automation"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I use the following credit card details:",
  "rows": [
    {
      "cells": [
        "CreditCardType",
        "CreditCardNumber"
      ],
      "line": 21
    },
    {
      "cells": [
        "MasterCard",
        "1234567890"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should get a booking confirmation with a confirmation number",
  "keyword": "Then "
});
formatter.match({
  "location": "BookFlightTicketsStepDefs.i_search_for_flights(DataTable)"
});
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 2189817381,
  "status": "passed"
});
formatter.match({
  "location": "BookFlightTicketsStepDefs.i_select_first_available_flight()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 2210512737,
  "status": "passed"
});
formatter.match({
  "location": "BookFlightTicketsStepDefs.i_book_tickets(DataTable)"
});
formatter.result({
  "duration": 664246765,
  "status": "passed"
});
formatter.match({
  "location": "BookFlightTicketsStepDefs.i_use_credit_card(DataTable)"
});
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 2482886209,
  "status": "passed"
});
formatter.match({
  "location": "BookFlightTicketsStepDefs.i_should_get_booking_confirmation()"
});
formatter.embedding("image/png", "embedded5.png");
formatter.write("The confirmation number is: 2019-09-09231645");
formatter.result({
  "duration": 435922772,
  "status": "passed"
});
formatter.after({
  "duration": 1822514924,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "As a user, I want to be able to login to the application\nwhen I present valid credentials",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3075698538,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am in the login page of the application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.i_am_in_login_page()"
});
formatter.embedding("image/png", "embedded6.png");
formatter.result({
  "duration": 10602192420,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login with invalid username and invalid password",
  "description": "",
  "id": "login;login-with-invalid-username-and-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@InvalidUsername"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I login using the invalid username abc and the invalid password xyz",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The application should stay on the login page, and not log me in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 35
    },
    {
      "val": "xyz",
      "offset": 64
    }
  ],
  "location": "LoginStepDefs.i_login_using_invalid_username_invalid_password(String,String)"
});
formatter.embedding("image/png", "embedded7.png");
formatter.result({
  "duration": 3516070159,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.application_should_stay_on_login_page()"
});
formatter.embedding("image/png", "embedded8.png");
formatter.result({
  "duration": 350656131,
  "status": "passed"
});
formatter.after({
  "duration": 1013377803,
  "status": "passed"
});
formatter.before({
  "duration": 2801011534,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am in the login page of the application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.i_am_in_login_page()"
});
formatter.embedding("image/png", "embedded9.png");
formatter.result({
  "duration": 16053050279,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login with valid username and invalid password",
  "description": "",
  "id": "login;login-with-valid-username-and-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@InvalidPassword"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I login using the valid username mercury and the invalid password xyz",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The application should stay on the login page, and not log me in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 33
    },
    {
      "val": "xyz",
      "offset": 66
    }
  ],
  "location": "LoginStepDefs.i_login_using_valid_username_invalid_password(String,String)"
});
formatter.embedding("image/png", "embedded10.png");
formatter.result({
  "duration": 3033965857,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.application_should_stay_on_login_page()"
});
formatter.embedding("image/png", "embedded11.png");
formatter.result({
  "duration": 368676393,
  "status": "passed"
});
formatter.after({
  "duration": 966222621,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Login with valid username and valid password",
  "description": "",
  "id": "login;login-with-valid-username-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@validlogin"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I login using the valid username \u003cUsername\u003e and the valid password \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "The application should log me in and navigate to the Flight Finder page",
  "keyword": "Then "
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Login with valid username and valid password",
  "description": "",
  "id": "login;login-with-valid-username-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Invalidlogin"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I login using the invalid username \u003cUsername\u003e and the invalid password \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The application should not log me in and show login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login;login-with-valid-username-and-valid-password;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 29,
      "id": "login;login-with-valid-username-and-valid-password;;1"
    },
    {
      "cells": [
        "mercury",
        "mercury"
      ],
      "line": 30,
      "id": "login;login-with-valid-username-and-valid-password;;2"
    },
    {
      "cells": [
        "mercury",
        "test"
      ],
      "line": 31,
      "id": "login;login-with-valid-username-and-valid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2693088236,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am in the login page of the application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.i_am_in_login_page()"
});
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "duration": 6743285672,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Login with valid username and valid password",
  "description": "",
  "id": "login;login-with-valid-username-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Invalidlogin"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I login using the invalid username mercury and the invalid password mercury",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The application should not log me in and show login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 35
    },
    {
      "val": "mercury",
      "offset": 68
    }
  ],
  "location": "LoginStepDefs.i_login_using_invalid_username_invalid_password(String,String)"
});
formatter.embedding("image/png", "embedded13.png");
formatter.result({
  "duration": 6357620519,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.The_application_should_not_log_me_in_and_show_login_page()"
});
formatter.embedding("image/png", "embedded14.png");
formatter.result({
  "duration": 1804393891,
  "error_message": "java.lang.AssertionError: Login page displayed? expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat com.CucumberCraft.stepDefinitions.LoginStepDefs.The_application_should_not_log_me_in_and_show_login_page(LoginStepDefs.java:73)\r\n\tat ✽.Then The application should not log me in and show login page(Login.feature:26)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "duration": 1287686450,
  "status": "passed"
});
formatter.before({
  "duration": 2658641851,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am in the login page of the application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.i_am_in_login_page()"
});
formatter.embedding("image/png", "embedded16.png");
formatter.result({
  "duration": 4430691083,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Login with valid username and valid password",
  "description": "",
  "id": "login;login-with-valid-username-and-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Invalidlogin"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I login using the invalid username mercury and the invalid password test",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The application should not log me in and show login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 35
    },
    {
      "val": "test",
      "offset": 68
    }
  ],
  "location": "LoginStepDefs.i_login_using_invalid_username_invalid_password(String,String)"
});
formatter.embedding("image/png", "embedded17.png");
formatter.result({
  "duration": 2899607460,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.The_application_should_not_log_me_in_and_show_login_page()"
});
formatter.embedding("image/png", "embedded18.png");
formatter.result({
  "duration": 1767852311,
  "status": "passed"
});
formatter.after({
  "duration": 1020825986,
  "status": "passed"
});
formatter.uri("RegisterNewUser.feature");
formatter.feature({
  "line": 1,
  "name": "Register new user",
  "description": "As a new user to the application, I want to be able to register myself\nso that I can login and use the application further",
  "id": "register-new-user",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2663643073,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Register new user and login using the newly registered credentials",
  "description": "",
  "id": "register-new-user;register-new-user-and-login-using-the-newly-registered-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am in the login page of the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I register a new user with the following details:",
  "rows": [
    {
      "cells": [
        "Username",
        "icims"
      ],
      "line": 9
    },
    {
      "cells": [
        "Password",
        "password-1"
      ],
      "line": 10
    },
    {
      "cells": [
        "FirstName",
        "vj"
      ],
      "line": 11
    },
    {
      "cells": [
        "LastName",
        "rams"
      ],
      "line": 12
    },
    {
      "cells": [
        "Phone",
        "1234567890"
      ],
      "line": 13
    },
    {
      "cells": [
        "Email",
        "reachus@icims.com"
      ],
      "line": 14
    },
    {
      "cells": [
        "Address",
        "90 Matawan Road"
      ],
      "line": 15
    },
    {
      "cells": [
        "City",
        "Matawan"
      ],
      "line": 16
    },
    {
      "cells": [
        "State",
        "New Jersey"
      ],
      "line": 17
    },
    {
      "cells": [
        "PostalCode",
        "07747"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should get a confirmation on successful registration",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on the sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I login using the valid username icims and the valid password password-1",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "The application should log me in and navigate to the Flight Finder page",
  "keyword": "Then "
});
formatter.match({
  "location": "GeneralStepDefs.i_am_in_login_page()"
});
formatter.embedding("image/png", "embedded19.png");
formatter.result({
  "duration": 4261518673,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserStepDefs.registerUser(DataTable)"
});
formatter.embedding("image/png", "embedded20.png");
formatter.result({
  "duration": 4836669503,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserStepDefs.i_should_get_registration_confirmation()"
});
formatter.embedding("image/png", "embedded21.png");
formatter.result({
  "duration": 328312516,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_click_on_signin_link()"
});
formatter.result({
  "duration": 991798836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "icims",
      "offset": 33
    },
    {
      "val": "password-1",
      "offset": 62
    }
  ],
  "location": "LoginStepDefs.i_login_using_valid_username_valid_password(String,String)"
});
formatter.embedding("image/png", "embedded22.png");
formatter.result({
  "duration": 3868695988,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.application_should_login_navigate_to_FlightFinder_page()"
});
formatter.embedding("image/png", "embedded23.png");
formatter.result({
  "duration": 1829844608,
  "status": "passed"
});
formatter.after({
  "duration": 1010204453,
  "status": "passed"
});
formatter.uri("eribankFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Eribank Application",
  "description": "",
  "id": "eribank-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2754420390,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login to EriBank",
  "description": "",
  "id": "eribank-application;login-to-eribank",
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
  "line": 5,
  "name": "I launch eribank",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \"company\" and \"company\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click LOGIN",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click LOGOUT",
  "keyword": "And "
});
formatter.match({
  "location": "EribankLogin.i_launch_eribank()"
});
formatter.result({
  "duration": 313510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "company",
      "offset": 9
    },
    {
      "val": "company",
      "offset": 23
    }
  ],
  "location": "EribankLogin.i_enter_and(String,String)"
});
formatter.result({
  "duration": 10123904816,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"com.experitest.ExperiBank:id/usernameTextField\"}\n  (Session info: chrome\u003d76.0.3809.132)\n  (Driver info: chromedriver\u003d76.0.3809.68 (420c9498db8ce8fcd190a954d51297672c1515d5-refs/branch-heads/3809@{#864}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.09 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027HYDPCM144977L\u0027, ip: \u002710.136.200.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54404}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.68 (420c9498db8ce8fcd190a954d51297672c1515d5-refs/branch-heads/3809@{#864}), userDataDir\u003dC:\\Users\\ravi.kuchharlapati\\AppData\\Local\\Temp\\scoped_dir19240_2108143542}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d76.0.3809.132, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a54b8d6af4c2ca6371e300f084db03c2\n*** Element info: {Using\u003did, value\u003dcom.experitest.ExperiBank:id/usernameTextField}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.CucumberCraft.supportLibraries.CraftDriver.findElement(CraftDriver.java:104)\r\n\tat com.CucumberCraft.stepDefinitions.EribankLogin.i_enter_and(EribankLogin.java:25)\r\n\tat ✽.When I enter \"company\" and \"company\"(eribankFeature.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EribankLogin.i_click_LOGIN()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EribankLogin.i_click_LOGOUT()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded24.png");
formatter.after({
  "duration": 1295277857,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "MakePayment",
  "description": "",
  "id": "eribank-application;makepayment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    },
    {
      "line": 10,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I launch eribank",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"company\" and \"company\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click LOGIN",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click Make Payment",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter Phone number as \"\u003cphone\u003e\" name as \"\u003cname\u003e\" Amount as \"\u003camount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select country as \"\u003ccountry\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click Send Payment",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click LOGOUT",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "eribank-application;makepayment;",
  "rows": [
    {
      "cells": [
        "phone",
        "name",
        "amount",
        "country"
      ],
      "line": 22,
      "id": "eribank-application;makepayment;;1"
    },
    {
      "cells": [
        "9876543210",
        "kasthuri",
        "10000",
        "India"
      ],
      "line": 23,
      "id": "eribank-application;makepayment;;2"
    },
    {
      "cells": [
        "123456",
        "nizam",
        "10000",
        "USA"
      ],
      "line": 24,
      "id": "eribank-application;makepayment;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2744879345,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "MakePayment",
  "description": "",
  "id": "eribank-application;makepayment;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I launch eribank",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"company\" and \"company\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click LOGIN",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click Make Payment",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter Phone number as \"9876543210\" name as \"kasthuri\" Amount as \"10000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select country as \"India\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click Send Payment",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click LOGOUT",
  "keyword": "And "
});
formatter.match({
  "location": "EribankLogin.i_launch_eribank()"
});
formatter.result({
  "duration": 104970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "company",
      "offset": 9
    },
    {
      "val": "company",
      "offset": 23
    }
  ],
  "location": "EribankLogin.i_enter_and(String,String)"
});
formatter.result({
  "duration": 10030022729,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"com.experitest.ExperiBank:id/usernameTextField\"}\n  (Session info: chrome\u003d76.0.3809.132)\n  (Driver info: chromedriver\u003d76.0.3809.68 (420c9498db8ce8fcd190a954d51297672c1515d5-refs/branch-heads/3809@{#864}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.03 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027HYDPCM144977L\u0027, ip: \u002710.136.200.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54422}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.68 (420c9498db8ce8fcd190a954d51297672c1515d5-refs/branch-heads/3809@{#864}), userDataDir\u003dC:\\Users\\ravi.kuchharlapati\\AppData\\Local\\Temp\\scoped_dir20208_27882648}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d76.0.3809.132, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4c9cf8833309bd68b3680cee090fa88b\n*** Element info: {Using\u003did, value\u003dcom.experitest.ExperiBank:id/usernameTextField}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.CucumberCraft.supportLibraries.CraftDriver.findElement(CraftDriver.java:104)\r\n\tat com.CucumberCraft.stepDefinitions.EribankLogin.i_enter_and(EribankLogin.java:25)\r\n\tat ✽.When I enter \"company\" and \"company\"(eribankFeature.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EribankLogin.i_click_LOGIN()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EribankPayment.i_click_Make_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9876543210",
      "offset": 25
    },
    {
      "val": "kasthuri",
      "offset": 46
    },
    {
      "val": "10000",
      "offset": 67
    }
  ],
  "location": "EribankPayment.i_enter_Phone_number_as_name_as_Amount_as(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 21
    }
  ],
  "location": "EribankPayment.i_select_country_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EribankPayment.click_Send_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EribankLogin.i_click_LOGOUT()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded25.png");
formatter.after({
  "duration": 1307378295,
  "status": "passed"
});
formatter.before({
  "duration": 2839051615,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "MakePayment",
  "description": "",
  "id": "eribank-application;makepayment;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I launch eribank",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"company\" and \"company\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click LOGIN",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click Make Payment",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter Phone number as \"123456\" name as \"nizam\" Amount as \"10000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select country as \"USA\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click Send Payment",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click LOGOUT",
  "keyword": "And "
});
formatter.match({
  "location": "EribankLogin.i_launch_eribank()"
});
formatter.result({
  "duration": 178682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "company",
      "offset": 9
    },
    {
      "val": "company",
      "offset": 23
    }
  ],
  "location": "EribankLogin.i_enter_and(String,String)"
});
formatter.result({
  "duration": 10073479713,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"com.experitest.ExperiBank:id/usernameTextField\"}\n  (Session info: chrome\u003d76.0.3809.132)\n  (Driver info: chromedriver\u003d76.0.3809.68 (420c9498db8ce8fcd190a954d51297672c1515d5-refs/branch-heads/3809@{#864}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.08 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027HYDPCM144977L\u0027, ip: \u002710.136.200.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54439}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.68 (420c9498db8ce8fcd190a954d51297672c1515d5-refs/branch-heads/3809@{#864}), userDataDir\u003dC:\\Users\\ravi.kuchharlapati\\AppData\\Local\\Temp\\scoped_dir20000_411094221}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d76.0.3809.132, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 3a5a09b24490618dda058711f3ea5005\n*** Element info: {Using\u003did, value\u003dcom.experitest.ExperiBank:id/usernameTextField}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.CucumberCraft.supportLibraries.CraftDriver.findElement(CraftDriver.java:104)\r\n\tat com.CucumberCraft.stepDefinitions.EribankLogin.i_enter_and(EribankLogin.java:25)\r\n\tat ✽.When I enter \"company\" and \"company\"(eribankFeature.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EribankLogin.i_click_LOGIN()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EribankPayment.i_click_Make_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 25
    },
    {
      "val": "nizam",
      "offset": 42
    },
    {
      "val": "10000",
      "offset": 60
    }
  ],
  "location": "EribankPayment.i_enter_Phone_number_as_name_as_Amount_as(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 21
    }
  ],
  "location": "EribankPayment.i_select_country_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EribankPayment.click_Send_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EribankLogin.i_click_LOGOUT()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded26.png");
formatter.after({
  "duration": 1290197324,
  "status": "passed"
});
});