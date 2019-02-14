$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile.feature");
formatter.feature({
  "line": 1,
  "name": "tfl",
  "description": "",
  "id": "tfl",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "tfl journey options",
  "description": "",
  "id": "tfl;tfl-journey-options",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I entered url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I entered journey from \"\u003cFrom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I entered journey to \"\u003cTo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I clicked plan my journey button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see expected result \"\u003cExpected\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see header text journey from \"\u003cResultFrom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see header text journey to \"\u003cResultTo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see header text Travel preferences \u0026 accessibility:",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I clicked edit journey hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should switch journey plan",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I clicked Edit preferences and accessibility",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should select option Step-free to platform only",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the current url",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "tfl;tfl-journey-options;",
  "rows": [
    {
      "cells": [
        "From",
        "To",
        "Expected",
        "ResultFrom",
        "ResultTo"
      ],
      "line": 19,
      "id": "tfl;tfl-journey-options;;1"
    },
    {
      "cells": [
        "London Bridge",
        "Watford Junction",
        "Journey results",
        "London Bridge",
        "Watford Junction"
      ],
      "line": 20,
      "id": "tfl;tfl-journey-options;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9322672089,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "tfl journey options",
  "description": "",
  "id": "tfl;tfl-journey-options;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I entered url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I entered journey from \"London Bridge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I entered journey to \"Watford Junction\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I clicked plan my journey button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see expected result \"Journey results\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see header text journey from \"London Bridge\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see header text journey to \"Watford Junction\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see header text Travel preferences \u0026 accessibility:",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I clicked edit journey hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should switch journey plan",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I clicked Edit preferences and accessibility",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should select option Step-free to platform only",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the current url",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs_sd.iEnteredUrl()"
});
formatter.result({
  "duration": 8549686529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London Bridge",
      "offset": 24
    }
  ],
  "location": "MyStepdefs_sd.i_entered(String)"
});
formatter.result({
  "duration": 326047017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Watford Junction",
      "offset": 22
    }
  ],
  "location": "MyStepdefs_sd.iEnteredTo(String)"
});
formatter.result({
  "duration": 586312386,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs_sd.i_clicked_plan_my_journey()"
});
formatter.result({
  "duration": 4487732501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Journey results",
      "offset": 30
    }
  ],
  "location": "MyStepdefs_sd.iCheckedAcceptedResult(String)"
});
formatter.result({
  "duration": 86861078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London Bridge",
      "offset": 39
    }
  ],
  "location": "MyStepdefs_sd.iShouldSeeHeaderTextJourneyFrom(String)"
});
formatter.result({
  "duration": 46556081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Watford Junction",
      "offset": 37
    }
  ],
  "location": "MyStepdefs_sd.iShouldSeeHeaderTextJourneyTo(String)"
});
formatter.result({
  "duration": 28871204,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs_sd.iShouldSeeHeaderTextTravelPreferencesAndAccessibility()"
});
formatter.result({
  "duration": 24953984,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs_sd.iClickedEditJourneyHyperlink()"
});
formatter.result({
  "duration": 422460292,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs_sd.iShouldSwitchJourneyPlan()"
});
formatter.result({
  "duration": 349123671,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs_sd.iClickedEditPreferencesAndAccessbility()"
});
formatter.result({
  "duration": 452931494,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs_sd.iShouldSelectOptionStepFreeToPlatformOnly()"
});
formatter.result({
  "duration": 493989131,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs_sd.iShouldSeeTheCurrenturl()"
});
formatter.result({
  "duration": 3132125214,
  "status": "passed"
});
formatter.after({
  "duration": 50773,
  "status": "passed"
});
});