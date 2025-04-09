/**
 * Assignment: Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa.
 * 
 * Formulae:
 * C = (5/9)(F - 32)
 * F = (9/5)C + 32
 * 
 * Note: Round to one decimal place: Math.round(num * 10) / 10.
 * 
 * Algorithm:
 * 1. Use the formula to convert the temperature.
 * 2. Round the result to one decimal place using Math.round(num * 10) / 10.
 * 3. Return the rounded result.
 */

const convertToCelsius = function(temp) {
  return Math.round(((5/9) * (temp - 32)) * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  return Math.round((((9/5) * temp) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
