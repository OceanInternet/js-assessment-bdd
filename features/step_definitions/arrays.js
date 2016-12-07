import arrays from '../../app/arrays';

module.exports = function () {

    'use strict'

    let scenario = {
        arrays: [],
        answerFunction: undefined,
        result: undefined
    };

    this.Before(setup);

    this.Given(/^(\w+) = \[(.*)\]$/, function (arrayName, arrayString, done) {

        let inputArray = stringToArray(arrayString);

        setArray(arrayName, inputArray);
        done();
    });

    this.Given(/^a function: (\w+)$/, function (functionName, done) {

        setAnswerFunction(arrays[functionName]);
        done();
    });

    this.When(/^the function is called with \((\w+), (\d+)\)$/, function (arrayName, value, done) {

        setResult(scenario.answerFunction(scenario.arrays[arrayName], value));
        done();
    });

    this.When(/^the function is called with \((\w+)\)$/, function (one, done) {

        setResult(scenario.answerFunction(scenario[one]));
        done();
    });

    this.When(/^the function is called with \((\w+), (\w+)\)$/, function (arrayA, arrayB, done) {

        setResult(scenario.answerFunction(scenario.arrays[arrayA], scenario.arrays[arrayB]));
        done();
    });


    this.Then(/^the function will return (-?\d+)$/, function (value) {

        assert.equal(
            scenario.result,
            value
        );
    });

    this.Then(/^the function will return the sum of (\w+) values$/, function (arrayName) {

        assert.equal(
            scenario.result,
            getSumOfArrayIntegers(scenario[arrayName])
        );
    });

    this.Then(/^the function will return (\w+) with instances of (\d+) removed$/, function (arrayName, value) {

        assert.deepEqual(
            scenario.result,
            removeInstances(scenario[arrayName], value)
        );
    });

    this.Then(/^the function will return array with length (\d+) and last value (\d+)$/, function (length, lastValue) {

        let resultLength = scenario.result.length;

        assert.equal(resultLength, length);
        assert.equal(scenario.result[resultLength-1], lastValue);
    });

    this.Then(/^the function will return array with length (\d+) and first value (\d+)$/, function (length, firstValue) {

        let resultLength = scenario.result.length;

        assert.equal(resultLength, length);
        assert.equal(scenario.result[0], firstValue);
    });

    this.Then(/^the function will return array with length (\d+), first value (\d+) and last value (\w+)$/, function (length, firstValue, lastValue) {

        let resultLength = scenario.result.length;

        assert.equal(resultLength, length);
        assert.equal(scenario.result[0], firstValue);
        assert.equal(scenario.result[resultLength-1], lastValue);
    });


    function setup() {

        scenario.arrays = [];
        setAnswerFunction();
        setResult();
    }

    function setArray(arrayName, inputArray) {

        scenario.arrays[arrayName] = inputArray;
    }

    function setAnswerFunction(answerFunction) {

        scenario.answerFunction = answerFunction;
    }

    function setResult(result) {

        scenario.result = result;
    }

    function stringToArray(string) {

        let arr = string.split(',');

        return arr.map(function (value) {
            return parseInt(value.trim());
        });
    }

    function getSumOfArrayIntegers(inputArray) {

        let sum = 0;

        for (let i = 0; i < inputArray.length; i++) {

            sum += inputArray[i];
        }

        return sum;
    }

    function removeInstances(inputArray, value) {

        let result = [];

        for (let i = 0; i < inputArray.length; i++) {

            (inputArray[i] != value) && result.push(inputArray[i]);
        }

        return result;
    }
};