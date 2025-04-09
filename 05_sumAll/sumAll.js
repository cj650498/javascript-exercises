/**
 * Assignment: Implement a function that takes 2 positive integers and returns the sum of every integer between (and 
 * including) them.
 * 
 * Algorithm:
 * 1. If either parameter is negative, not a number, or not an integer, return "ERROR".
 * 2. If the first parameter is larger than the second, swap them.
 * 3. Initialize `sum` to 0.
 * 4. Loop from the lower to the higher number (inclusive), adding each number to `sum`.
 * 5. Return `sum`.
 */

const sumAll = function (start, end) {

    // Negative parameters
    if (start < 0 || end < 0) {
        return "ERROR";
    }

    // Non-number parameters
    if (!(typeof start === "number") || !(typeof end === "number")) {
        return "ERROR";
    }

    // Non-integer parameters
    if (!(Number.isInteger(start)) || !(Number.isInteger(end))) {
        return "ERROR";
    }

    // Initialize sum to 0
    let sum = 0;

    // Swap if first parameter is larger
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    // Loop from start to end, inclusive, and add each value to the sum
    for (let current = start; current <= end; ++current) {
        sum += current;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;