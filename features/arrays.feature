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
    Then the function will return array with length 5, and last value 10

  Scenario: remove the last item of an array
    Given inputArray = [ 1, 2, 3, 4 ]
    And a function: removeLastItem
    When the function is called with (inputArray)
    Then the function will return array with length 3, and last value 3

  Scenario: add an item to the beginning of an array
    Given inputArray = [ 1, 2, 3, 4 ]
    And a function: addItemToBeginning
    When the function is called with (inputArray, 10)
    Then the function will return array with length 5, and first value 10

  Scenario: remove the first item of an array
    Given inputArray = [ 1, 2, 3, 4 ]
    And a function: removeItemFromBeginning
    When the function is called with (inputArray)
    Then the function will return array with length 3, and first value 2

  Scenario: join together two arrays
    Given arrayA = [ 1, 2, 3 ]
    And   arrayB = [ a, b, c ]
    And a function: joinArrays
    When the function is called with arrays (arrayA, arrayB)
    Then the function will return array with length 6, first value 1 and last value c

  Scenario: add an item anywhere in an array
    Given inputArray = [ 1, 2, 3, 4 ]
    And a function: addItemAtIndex
    When the function is called with (inputArray, z, 3)
    Then the function will return array with length 5, and third value z

  Scenario: count the occurences of an item in an array
    Given inputArray = [ 1, 2, 4, 4, 3, 4, 3 ]
    And a function: countOccurences
    When the function is called with (inputArray, 4)
    Then the function will return 3

  Scenario: find duplicates in an array
    Given inputArray = [ 1, 2, 4, 4, 3, 3, 1, 5, 3 ]
    And a function: findDuplicates
    When the function is called with (inputArray)
    Then the function will return array with length 3, first value 1 and last value 4

  Scenario: square each number in an array

  Scenario: find all occurrences of an item in an array