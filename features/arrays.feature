Feature: Arrays
  As a [role]
  I want [feature]
  So that [benefit]

  Scenario Outline: determine the location of an item in an array
    Given inputArray = [ 1, 2, 3, 4 ]
    And a function: getArrayIndex
    When the function is called with (inputArray, <value>)
    Then the function will return <index>
    Examples:
      | value | index |
      | 2     | 1     |
      | 5     | -1    |

  Scenario: sum the items of an array
    Given inputArray = [ 1, 2, 3, 4 ]
    And a function: sumArrayItems
    When the function is called with (inputArray)
    Then the function will return the sum of inputArray values

  Scenario: remove all instances of a value from an array
    Given inputArray = [ 1, 2, 3, 4, 2, 2 ]
    And a function: removeAllInstances
    When the function is called with (inputArray, 2)
    Then the function will return inputArray with instances of 2 removed

  Scenario: remove all instances of a value from an array, returning the original array
    Given inputArray = [ 1, 2, 3, 4, 2, 2 ]
    And a function: removeAllInstancesReturnOriginal
    When the function is called with (inputArray, 2)
    Then the function will return inputArray with instances of 2 removed

  Scenario: add an item to the end of an array
    Given inputArray = [ 1, 2, 3, 4 ]
    And a function: addItemToEndOfArray
    When the function is called with (inputArray, 10)
    Then the function will return array with length 5 and last value 10

  Scenario: remove the last item of an array

  Scenario: add an item to the beginning of an array

  Scenario: remove the first item of an array

  Scenario: join together two arrays

  Scenario: add an item anywhere in an array

  Scenario: count the occurences of an item in an array

  Scenario: find duplicates in an array

  Scenario: square each number in an array

  Scenario: find all occurrences of an item in an array