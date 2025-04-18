/**
 * Assignment: Create a function that determines whether or not a given year is a leap year. Leap years are determined 
 * by the following rules:
 * 
 * Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years 
 * (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
 * 
 * Algorithm: 
 * 1. Return true if year if divisible by 400.
 * 2. Return false if divisible by 100.
 * 3. Return true if divisible by 4.
 */

const leapYears = year =>
    year % 400 === 0 ? true :
    year % 100 === 0 ? false :
    year % 4 === 0;

// Do not edit below this line
module.exports = leapYears;
