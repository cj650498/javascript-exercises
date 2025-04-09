/**
 * Assignment: Write a function called reverseString that returns its input reversed.
 * 
 * Algorithm:
 * 1. Create an empty `result` string.
 * 2. Loop backwards through the input string.
 * 3. On each iteration, add the current character to the result string.
 * 4. Return the result.
 */

const reverseString = function(text) {
    let result = '';
    for (let i = text.length - 1; i >= 0; --i) {
        result += text[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
