$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BookFlightTickets.feature");
formatter.feature({
  "line": 1,
  "name": "Book flight tickets",
  "description": "As a user with valid credentials,\nI want to be able to search for flight tickets between a given source and destination,\nselect from the available options presented, and book the tickets accordingly",
  "id": "book-flight-tickets",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3642523039,
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
  "duration": 4631956567,
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
  "duration": 6126432835,
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
      "name": "@completed"
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
  "duration": 1805697563,
  "status": "passed"
});
formatter.match({
  "location": "BookFlightTicketsStepDefs.i_select_first_available_flight()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 2129595452,
  "status": "passed"
});
formatter.match({
  "location": "BookFlightTicketsStepDefs.i_book_tickets(DataTable)"
});
formatter.result({
  "duration": 478875920,
  "status": "passed"
});
formatter.match({
  "location": "BookFlightTicketsStepDefs.i_use_credit_card(DataTable)"
});
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 2025063938,
  "status": "passed"
});
formatter.match({
  "location": "BookFlightTicketsStepDefs.i_should_get_booking_confirmation()"
});
formatter.embedding("image/png", "embedded5.png");
formatter.write("The confirmation number is: 2019-08-06233902");
formatter.result({
  "duration": 376879072,
  "status": "passed"
});
formatter.after({
  "duration": 1256825123,
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
  "duration": 2797214620,
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
  "duration": 3913555446,
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
      "name": "@completed"
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
  "duration": 2996086734,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.application_should_stay_on_login_page()"
});
formatter.embedding("image/png", "embedded8.png");
formatter.result({
  "duration": 336643529,
  "status": "passed"
});
formatter.after({
  "duration": 1086366177,
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
  "duration": 2963368880,
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
      "name": "@completed"
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
formatter.embedding("image/png", "embedded9.png");
formatter.result({
  "duration": 2984371195,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserStepDefs.registerUser(DataTable)"
});
formatter.embedding("image/png", "embedded10.png");
formatter.result({
  "duration": 5051573657,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserStepDefs.i_should_get_registration_confirmation()"
});
formatter.embedding("image/png", "embedded11.png");
formatter.result({
  "duration": 305769875,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_click_on_signin_link()"
});
formatter.result({
  "duration": 781492509,
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
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "duration": 2862231850,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.application_should_login_navigate_to_FlightFinder_page()"
});
formatter.embedding("image/png", "embedded13.png");
formatter.result({
  "duration": 362472580,
  "status": "passed"
});
formatter.after({
  "duration": 1060821245,
  "status": "passed"
});
});