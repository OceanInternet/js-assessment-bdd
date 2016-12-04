Feature: Arrays
  As a [role]
  I want [feature]
  So that [benefit]

  Background:
    Given inputArray = [ 1, 2, 3, 4 ]

  Scenario Outline: determine the location of an item in an array
    Given a function: getArrayIndex
    When the function is called with (inputArray, <value>)
    Then the function will return <index>
    Examples:
      | value | index |
      | 2     | 1     |
      | 5     | -1    |

  Scenario: sum the items of an array
    Given a function: sumArrayItems
    When the function is called with (inputArray)
    Then the function will return the sum of inputArray values