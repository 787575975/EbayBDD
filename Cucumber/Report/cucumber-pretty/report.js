$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/dola/IdeaProjects/EbayBDD/Cucumber/src/test/java/Features/Register.feature");
formatter.feature({
  "line": 2,
  "name": "Register Feature",
  "description": "",
  "id": "register-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Register Feature test",
  "description": "",
  "id": "register-feature;register-feature-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User in register page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "put first name",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "put last name",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "put email address",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click create account button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.User_in_register_page()"
});
formatter.result({
  "duration": 4995243401,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.put_first_name()"
});
formatter.result({
  "duration": 845316008,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.put_last_name()"
});
formatter.result({
  "duration": 71380191,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.put_email_address()"
});
formatter.result({
  "duration": 174875523,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.enter_password()"
});
formatter.result({
  "duration": 350969407,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.click_create_account_button()"
});
formatter.result({
  "duration": 10112715842,
  "status": "passed"
});
});