

// Operators and Expressions

const { log } = require("node:console");

// An operator is a symbol that performs a specific operation on one or more operands. 
// An expression is a combination of values, variables, and operators that evaluates to a single value.

// Arithmetic Operators: +, -, *, /, %, ++, --
// console.log('Arithmetic Operators');
// var a = 10;
// var b = 5;
// console.log('a + b = ' + (a + b));
// console.log('a - b = ' + (a - b));
// console.log('a * b = ' + (a * b));
// console.log('a / b = ' + (a / b));
// console.log('a % b = ' + (a % b));
// console.log('a ++ = ' + (a++));
// console.log('a -- = ' + (a--));


// var result = "hello"/2;
// console.log('Result: ' + result); // NaN (Not a Number) because we cannot divide a string by a number.



// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// console.log('Comparison Operators');
// var x = 10;
// var y = '10';
// console.log('x == y: ' + (x == y)); // true because == operator performs type coercion and compares the values after converting 
// them to a common type.
// console.log('x === y: ' + (x === y)); // false because === operator does not perform type coercion and compares both value and type.
// console.log('x != y: ' + (x != y)); // false because != operator performs type coercion and compares the values after converting 
// them to a common type.
// console.log('x !== y: ' + (x !== y)); // true because !== operator does not perform type coercion and compares both value and type.
// console.log('x > y: ' + (x > y)); // false because x is not greater than y after type coercion.
// console.log('x < y: ' + (x < y)); // false because x is not less than y after type coercion.
// console.log('x >= y: ' + (x >= y)); // true because x is greater than or equal to y after type coercion.
// console.log('x <= y: ' + (x <= y)); // true because x is less than or equal to y after type coercion.


// var a= 0.1+0.2;
// console.log('Result of 0.1 + 0.2: ' + a); // 0.30000000000000004 because of the way JavaScript handles floating-point arithmetic, 
// which can lead to precision issues. This is a common issue in many programming languages that use floating-point numbers.
// console.log('Result of 0.1 + 0.2 using toFixed(2): ' + a.toFixed(2)); // 0.30 because toFixed() method rounds the number to the 
// specified number of decimal places,

// const result_1 = 55 * "hello";
// console.log('Result of 55 * "hello": ' + result); // NaN (Not a Number) because we cannot multiply a number by a string.


// String concatenation using + operator, we can use + operator to concatenate strings,
// ex: 'myName + myAge' to concatenate string and number.
// var myName = 'John';
// var myLastname = 'Doe';
// var myAge = 30;
// console.log(myName + ' ' + myLastname + ' is ' + myAge + ' years old.'); // John Doe is 30 years old because the + operator concatenates the strings and the number, 
// converting the number to a string in the process.


// console.log("is not equal: ", 5 != 5);
// console.log( 5 == 5);



var score = 65;

const result = (score >= 60 && score<=70) ? 'Pass' : 'Fail';
console.log(result);
