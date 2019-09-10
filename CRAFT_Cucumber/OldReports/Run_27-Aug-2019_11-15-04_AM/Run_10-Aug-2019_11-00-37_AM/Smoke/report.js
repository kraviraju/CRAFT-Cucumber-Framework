$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "As a user, I want to be able to login to the application\nwhen I present valid credentials",
  "id": "login",
  "keyword": "Feature"
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
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login;login-with-valid-username-and-valid-password;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 24,
      "id": "login;login-with-valid-username-and-valid-password;;1"
    },
    {
      "cells": [
        "mercury",
        "mercury"
      ],
      "line": 25,
      "id": "login;login-with-valid-username-and-valid-password;;2"
    },
    {
      "cells": [
        "test",
        "test"
      ],
      "line": 26,
      "id": "login;login-with-valid-username-and-valid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5491476003,
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
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 6331443570,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login with valid username and valid password",
  "description": "",
  "id": "login;login-with-valid-username-and-valid-password;;2",
  "type": "scenario",
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
  "name": "I login using the valid username mercury and the valid password mercury",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "The application should log me in and navigate to the Flight Finder page",
  "keyword": "Then "
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
  "duration": 12516532943,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.application_should_login_navigate_to_FlightFinder_page()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 1877192582,
  "status": "passed"
});
formatter.after({
  "duration": 1307634135,
  "status": "passed"
});
formatter.before({
  "duration": 2726655930,
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
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 5168658134,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login with valid username and valid password",
  "description": "",
  "id": "login;login-with-valid-username-and-valid-password;;3",
  "type": "scenario",
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
  "name": "I login using the valid username test and the valid password test",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "The application should log me in and navigate to the Flight Finder page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 33
    },
    {
      "val": "test",
      "offset": 61
    }
  ],
  "location": "LoginStepDefs.i_login_using_valid_username_valid_password(String,String)"
});
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 3144948070,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.application_should_login_navigate_to_FlightFinder_page()"
});
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "duration": 1802647846,
  "error_message": "java.lang.AssertionError: Find a Flight page displayed? expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat com.CucumberCraft.stepDefinitions.LoginStepDefs.application_should_login_navigate_to_FlightFinder_page(LoginStepDefs.java:69)\r\n\tat ✽.Then The application should log me in and navigate to the Flight Finder page(Login.feature:21)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 1415576927,
  "status": "passed"
});
});