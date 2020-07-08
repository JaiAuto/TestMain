$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Guru Demo site Login",
  "description": "",
  "id": "guru-demo-site-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Demo site Login Scenarios1",
  "description": "",
  "id": "guru-demo-site-login;demo-site-login-scenarios1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "site of login page is Demo",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters login name as \"test\" and enters password as \"test\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "DefinedSteps.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 7160438100,
  "status": "passed"
});
formatter.match({
  "location": "DefinedSteps.site_of_login_page_is_Demo()"
});
formatter.result({
  "duration": 37400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 27
    },
    {
      "val": "test",
      "offset": 57
    }
  ],
  "location": "DefinedSteps.user_enters_Login_Name_and_enters_password(String,String)"
});
formatter.result({
  "duration": 610093200,
  "status": "passed"
});
formatter.match({
  "location": "DefinedSteps.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 2434348100,
  "status": "passed"
});
formatter.match({
  "location": "DefinedSteps.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 232743900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Demo site Login Scenarios2",
  "description": "",
  "id": "guru-demo-site-login;demo-site-login-scenarios2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "site of login page is Demo",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters login name as \"\u003cusername\u003e\" and enters password as \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should be able to login",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "guru-demo-site-login;demo-site-login-scenarios2;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 21,
      "id": "guru-demo-site-login;demo-site-login-scenarios2;;1"
    },
    {
      "cells": [
        "test",
        "",
        "test"
      ],
      "line": 22,
      "id": "guru-demo-site-login;demo-site-login-scenarios2;;2"
    },
    {
      "cells": [
        "test",
        "",
        "test"
      ],
      "line": 23,
      "id": "guru-demo-site-login;demo-site-login-scenarios2;;3"
    },
    {
      "cells": [
        "test",
        "",
        "test"
      ],
      "line": 24,
      "id": "guru-demo-site-login;demo-site-login-scenarios2;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Demo site Login Scenarios2",
  "description": "",
  "id": "guru-demo-site-login;demo-site-login-scenarios2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "site of login page is Demo",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters login name as \"test\" and enters password as \"test\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "DefinedSteps.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 5430200800,
  "status": "passed"
});
formatter.match({
  "location": "DefinedSteps.site_of_login_page_is_Demo()"
});
formatter.result({
  "duration": 27600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 27
    },
    {
      "val": "test",
      "offset": 57
    }
  ],
  "location": "DefinedSteps.user_enters_Login_Name_and_enters_password(String,String)"
});
formatter.result({
  "duration": 267559000,
  "status": "passed"
});
formatter.match({
  "location": "DefinedSteps.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 1944496100,
  "status": "passed"
});
formatter.match({
  "location": "DefinedSteps.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 150829300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Demo site Login Scenarios2",
  "description": "",
  "id": "guru-demo-site-login;demo-site-login-scenarios2;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "site of login page is Demo",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters login name as \"test\" and enters password as \"test\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "DefinedSteps.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 5435600500,
  "status": "passed"
});
formatter.match({
  "location": "DefinedSteps.site_of_login_page_is_Demo()"
});
formatter.result({
  "duration": 15200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 27
    },
    {
      "val": "test",
      "offset": 57
    }
  ],
  "location": "DefinedSteps.user_enters_Login_Name_and_enters_password(String,String)"
});
formatter.result({
  "duration": 250719600,
  "status": "passed"
});
formatter.match({
  "location": "DefinedSteps.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 1441066000,
  "status": "passed"
});
formatter.match({
  "location": "DefinedSteps.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 158531800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Demo site Login Scenarios2",
  "description": "",
  "id": "guru-demo-site-login;demo-site-login-scenarios2;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "site of login page is Demo",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters login name as \"test\" and enters password as \"test\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "DefinedSteps.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 5298397800,
  "status": "passed"
});
formatter.match({
  "location": "DefinedSteps.site_of_login_page_is_Demo()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 27
    },
    {
      "val": "test",
      "offset": 57
    }
  ],
  "location": "DefinedSteps.user_enters_Login_Name_and_enters_password(String,String)"
});
formatter.result({
  "duration": 229798900,
  "status": "passed"
});
formatter.match({
  "location": "DefinedSteps.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 1452750300,
  "status": "passed"
});
formatter.match({
  "location": "DefinedSteps.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 171907900,
  "status": "passed"
});
});