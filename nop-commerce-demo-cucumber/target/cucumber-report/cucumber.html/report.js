$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 2,
  "name": "Computer Test",
  "description": "As a user I want to build computer and add to cart into nop commerce website",
  "id": "computer-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 14870611300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the \"Computers\" text message computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 351903800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerLink()"
});
formatter.result({
  "duration": 1262993200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 18
    }
  ],
  "location": "ComputerPageTest.iShouldSeeTheTextMessageComputerPage(String)"
});
formatter.result({
  "duration": 325850900,
  "status": "passed"
});
formatter.after({
  "duration": 1296997500,
  "status": "passed"
});
formatter.before({
  "duration": 4963648700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the \"Desktops\" text message desktop page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 72600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerLink()"
});
formatter.result({
  "duration": 1051442600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 1274605000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 18
    }
  ],
  "location": "ComputerPageTest.iShouldSeeTheTextMessageDesktopPage(String)"
});
formatter.result({
  "duration": 76953000,
  "status": "passed"
});
formatter.after({
  "duration": 847841100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verify That User Should Build You Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on build computer link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"\u003cprocessor\u003e\" processor",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"\u003chdd\u003e\" hdd button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"\u003cram\u003e\" ram",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"\u003cos\u003e\" os",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"\u003csoftware\u003e\" software",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the \"The product has been added to your shopping cart\" success message",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 31,
      "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 32,
      "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 33,
      "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 34,
      "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5294320200,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify That User Should Build You Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on build computer link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"2.2 GHz Intel Pentium Dual-Core E2200\" processor",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"320 GB\" hdd button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"2 GB\" ram",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Vista Home [+$50.00]\" os",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"Microsoft Office [+$50.00]\" software",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the \"The product has been added to your shopping cart\" success message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 71400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerLink()"
});
formatter.result({
  "duration": 1042064200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 1348402900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnBuildComputerLink()"
});
formatter.result({
  "duration": 1874085200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 311358000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectHddButton(String)"
});
formatter.result({
  "duration": 5283580600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectRam(String)"
});
formatter.result({
  "duration": 221366700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectOs(String)"
});
formatter.result({
  "duration": 13309500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 25231700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 148368800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 18
    }
  ],
  "location": "ComputerPageTest.iShouldSeeTheSuccessMessage(String)"
});
formatter.result({
  "duration": 294287300,
  "status": "passed"
});
formatter.after({
  "duration": 808602700,
  "status": "passed"
});
formatter.before({
  "duration": 5409494800,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify That User Should Build You Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on build computer link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" processor",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"400 GB [+$100.00]\" hdd button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"4GB [+$20.00]\" ram",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Vista Premium [+$60.00]\" os",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"Acrobat Reader [+$10.00]\" software",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the \"The product has been added to your shopping cart\" success message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 59400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerLink()"
});
formatter.result({
  "duration": 1093746800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 774299100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnBuildComputerLink()"
});
formatter.result({
  "duration": 1319502000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 117022300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectHddButton(String)"
});
formatter.result({
  "duration": 257548400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectRam(String)"
});
formatter.result({
  "duration": 173198600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectOs(String)"
});
formatter.result({
  "duration": 8676700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 9972800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 146688000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 18
    }
  ],
  "location": "ComputerPageTest.iShouldSeeTheSuccessMessage(String)"
});
formatter.result({
  "duration": 282600500,
  "status": "passed"
});
formatter.after({
  "duration": 1287188700,
  "status": "passed"
});
formatter.before({
  "duration": 4502513000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify That User Should Build You Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on build computer link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" processor",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"320 GB\" hdd button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"8GB [+$60.00]\" ram",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Vista Home [+$50.00]\" os",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"Total Commander [+$5.00]\" software",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the \"The product has been added to your shopping cart\" success message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 48700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerLink()"
});
formatter.result({
  "duration": 1029311100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 620531200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnBuildComputerLink()"
});
formatter.result({
  "duration": 1492228400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 125385300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectHddButton(String)"
});
formatter.result({
  "duration": 215421900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectRam(String)"
});
formatter.result({
  "duration": 120260500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectOs(String)"
});
formatter.result({
  "duration": 6845800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 8891300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 119097500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 18
    }
  ],
  "location": "ComputerPageTest.iShouldSeeTheSuccessMessage(String)"
});
formatter.result({
  "duration": 278949700,
  "status": "passed"
});
formatter.after({
  "duration": 1486786100,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As a user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4350513100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User Should Navigate To Login Page SuccessFully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the welcome message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 55500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 920380100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iShouldSeeTheWelcomeMessage()"
});
formatter.result({
  "duration": 79161700,
  "status": "passed"
});
formatter.after({
  "duration": 933335600,
  "status": "passed"
});
formatter.before({
  "duration": 5301670100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify The Error Message With InValid Credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"Kan1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 37200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1525985900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kan1234@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 518561700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "RegisterPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 135020200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 691207600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iShouldSeeTheErrorMessage()"
});
formatter.result({
  "duration": 99790100,
  "status": "passed"
});
formatter.after({
  "duration": 941363600,
  "status": "passed"
});
formatter.before({
  "duration": 5147383500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify That User Should Log In SuccessFully With Valid Credentials",
  "description": "",
  "id": "login-test;verify-that-user-should-log-in-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"ram12@ymail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 84500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 768878700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram12@ymail.com",
      "offset": 15
    }
  ],
  "location": "RegisterPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 309213500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "RegisterPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 226499200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1165308500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iShouldSeeTheLogoutButton()"
});
formatter.result({
  "duration": 40050273700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Log out\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-JDV84NQN\u0027, ip: \u0027192.168.1.94\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f262c0826a96bcdace812070cfb32f2f, findElement {using\u003dlink text, value\u003dLog out}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\harsh\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65303}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:65303/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f262c0826a96bcdace812070cfb32f2f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:64)\r\n\tat com.nopcommerce.demo.pages.HomePage.getLogOutText(HomePage.java:84)\r\n\tat com.nopcommerce.demo.steps.LoginPageTest.iShouldSeeTheLogoutButton(LoginPageTest.java:34)\r\n\tat ✽.Then I should see the logout button(login.feature:26)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2457369300,
  "status": "passed"
});
formatter.before({
  "duration": 3992271700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "VerifyThatUserShouldLogOutSuccessFully",
  "description": "",
  "id": "login-test;verifythatusershouldlogoutsuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I enter email \"ram12@ymail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the log in button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 44100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1019163600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram12@ymail.com",
      "offset": 15
    }
  ],
  "location": "RegisterPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 252904500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "RegisterPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 222060600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 906727000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 20094653800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Log out\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-JDV84NQN\u0027, ip: \u0027192.168.1.94\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [0144d3dd14d8ed22a813ad1672566bf9, findElement {using\u003dlink text, value\u003dLog out}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\harsh\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65327}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:65327/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0144d3dd14d8ed22a813ad1672566bf9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnLogoutButton(HomePage.java:91)\r\n\tat com.nopcommerce.demo.steps.LoginPageTest.iClickOnLogoutButton(LoginPageTest.java:39)\r\n\tat ✽.And I click on logout button(login.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageTest.iShouldSeeTheLogInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1277337100,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 2,
  "name": "Register Test",
  "description": "As a user I want to register into nop commerce website",
  "id": "register-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4763734700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Should Navigate To Register Page Successfully",
  "description": "",
  "id": "register-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the register text",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 133500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 986577400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iShouldSeeTheRegisterText()"
});
formatter.result({
  "duration": 115698400,
  "status": "passed"
});
formatter.after({
  "duration": 954940100,
  "status": "passed"
});
formatter.before({
  "duration": 4471381000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify That First Name, Last Name, Email Password and Confirm Password Fields are Mandatory",
  "description": "",
  "id": "register-test;verify-that-first-name,-last-name,-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the error message \"First name is required.\" in first name field",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Last name is required.\" in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"Email is required.\" in email field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Password is required.\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Password is required.\" in confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 124900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 920379600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 261039300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterPageTest.iShouldSeeTheErrorMessageInFirstNameField(String)"
});
formatter.result({
  "duration": 71138900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterPageTest.iShouldSeeTheErrorMessageInLastNameField(String)"
});
formatter.result({
  "duration": 65265400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 32
    }
  ],
  "location": "RegisterPageTest.iShouldSeeTheErrorMessageInEmailField(String)"
});
formatter.result({
  "duration": 79838300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "RegisterPageTest.iShouldSeeTheErrorMessageInPasswordField(String)"
});
formatter.result({
  "duration": 63619600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "RegisterPageTest.iShouldSeeTheErrorMessageInConfirmPasswordField(String)"
});
formatter.result({
  "duration": 63451200,
  "status": "passed"
});
formatter.after({
  "duration": 868764900,
  "status": "passed"
});
formatter.before({
  "duration": 4223100700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify That User Should Create Account Successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on female radio button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter \"Sam\" in first name field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter \"Patel\" in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"5\" day",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select \"May\" month",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select \"1990\" year",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter email \"ram12@ymail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter confirm password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see the registered message \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 49900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 944023900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnFemaleRadioButton()"
});
formatter.result({
  "duration": 155578700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sam",
      "offset": 9
    }
  ],
  "location": "RegisterPageTest.iEnterInFirstNameField(String)"
});
formatter.result({
  "duration": 199244500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 9
    }
  ],
  "location": "RegisterPageTest.iEnterInLastNameField(String)"
});
formatter.result({
  "duration": 174059600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 10
    }
  ],
  "location": "RegisterPageTest.iSelectDay(String)"
});
formatter.result({
  "duration": 169867300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 10
    }
  ],
  "location": "RegisterPageTest.iSelectMonth(String)"
});
formatter.result({
  "duration": 171202600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1990",
      "offset": 10
    }
  ],
  "location": "RegisterPageTest.iSelectYear(String)"
});
formatter.result({
  "duration": 174079600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram12@ymail.com",
      "offset": 15
    }
  ],
  "location": "RegisterPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 186400500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "RegisterPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 187695000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 26
    }
  ],
  "location": "RegisterPageTest.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 155560000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 1553544700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 37
    }
  ],
  "location": "RegisterPageTest.iShouldSeeTheRegisteredMessage(String)"
});
formatter.result({
  "duration": 94017300,
  "status": "passed"
});
formatter.after({
  "duration": 922450300,
  "status": "passed"
});
});