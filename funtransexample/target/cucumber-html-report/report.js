$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myfile/example.feature");
formatter.feature({
  "name": "Fund transcation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Enter registered payee and correct amount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "fundtransfer url,and registerd payee",
  "keyword": "Given "
});
formatter.step({
  "name": "enter \"\u003cpayee\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "enter correct \"\u003camount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on transfer button and validate with the messages \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "payee",
        "amount",
        "status"
      ]
    },
    {
      "cells": [
        "Tim",
        "20",
        "$20 transferred successfully to Tim!!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Enter registered payee and correct amount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "fundtransfer url,and registerd payee",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdef.fundtransfer_url_and_registerd_payee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"Tim\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter correct \"20\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.enter_correct(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on transfer button and validate with the messages \"$20 transferred successfully to Tim!!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.click_on_transfer_button_and_validate_with_the_messages(String)"
});
formatter.result({
  "status": "passed"
});
});