const assert = require('assert');
const Test = require('test');

const sampFunc = (input) => {
    return input * 2;
}

const expectedResult = 4;

const result = sampFunc(2);

assert.equal(result, expectedResult);

Test.describe('first test',  () => {
  Test.assertEquals(sampFunc(2), expectedResult);
});