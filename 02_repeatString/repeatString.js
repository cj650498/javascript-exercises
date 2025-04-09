/**
 * Assignment: Write a function that simply repeats the string a given number of times.
 * 
 * Algorithm:
 * 1. Check if count is negative.
 * 2. Create an empty string to store the result.
 * 3. Concatenate the given string to the result `count` times using a loop.
 * 4. Return the result.
 */

const repeatString = function(text, count) {

    if (count < 0) {
        return "ERROR";
    }

    let result = '';
    for (let i = 0; i < count; ++i) {
        result += text;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
