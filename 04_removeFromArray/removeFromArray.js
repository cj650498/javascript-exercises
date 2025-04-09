/**
 * Assignment: Implement a function that takes an array and some other arguments, then removes the other arguments from 
 * that array.
 * 
 * Algorithm:
 * 1. Loop through each value to remove.
 * 2. For each value, iterate through the main array backwards to avoid index shifting when removing items.
 * 3. If a match is found, remove it.
 * 4. Return the updated array.
 */

const removeFromArray = function (array, ...valuesToRemove) {

    for (let removeIndex = 0; removeIndex < valuesToRemove.length; ++removeIndex) {
        for (let arrayIndex = array.length - 1; arrayIndex >= 0; --arrayIndex) {
            if (array[arrayIndex] === valuesToRemove[removeIndex]) {
                array.splice(arrayIndex, 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
