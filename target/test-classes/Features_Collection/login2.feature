#Author:dipti
#Date:2019-2-25


Feature: Login feature
Background:User access login page of memory Tours application.
           When user open "chrome" browser
           And user enter the application url"http://newtours.demoaut.com/"
           And user waits "5" seconds to load login page
           And user maximize login page
           Then mercuryTours application login page should be displayed
           
  @SmokeTest
  Scenario Outline: Verify that valid user able to login into mercury Tours application by using valid username and password
    Given user access login page of mercury Tours application
    And user enters "<username>" as username
    And user enters "<password>" as password
    And user click on sign in button
    Then user is on flight finder page
    When user click on signoff link
    Then user access sign on page
    
Examples:
|username|password|
|diptichopade|chopade123|
 