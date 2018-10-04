Feature: Fund transcation
Scenario Outline: Enter registered payee and correct amount
Given fundtransfer url,and registerd payee
When  enter "<payee>"
And  enter correct "<amount>"
Then click on transfer button and validate with the messages "<status>"

Examples:
|payee|amount|status|
|Tim|20|$20 transferred successfully to Tim!!|