$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/testFeature.feature");
formatter.feature({
  "line": 1,
  "name": "test Launch Appication",
  "description": "",
  "id": "test-launch-appication",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "logging into application",
  "description": "",
  "id": "test-launch-appication;logging-into-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is launching application in browser with url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters user name in username field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User verifies if he is in Login Page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});