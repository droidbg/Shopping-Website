/**
 *  This file includes the following topics:
 * 1. Currying
 * 2. Infinite Currying
 * 3. Reusability
 * 4. Partial Application
 * 5. Currying vs Partial Application
 * 6. Using the bind to achieve the same
 * 
 * Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.
 *
 * * Example Use Cases:
 * 1. Customable Logging:
const log = level => message => console.log(`[${level}] ${message}`);

const errorLog = log("ERROR");
const infoLog = log("INFO");

errorLog("Something went wrong!");
infoLog("App started successfully.");

* 2. Function Reuse/ Partial Application:
const multiply = a => b => a * b;

const double = multiply(2);  // preset 'a'
double(5); // ➝ 10

* 3.  Flexible Configuration
const apiRequest = baseUrl => endpoint => query => fetch(`${baseUrl}/${endpoint}?q=${query}`).then(res => res.json());

const githubRequest = apiRequest("https://api.github.com");
const searchUsers = githubRequest("search/users");

searchUsers("john").then(data => console.log(data));
 */

// const multiplyNormal = (x, y, z) => x * y * z;

// const multiply = (x) => {
//   return function (y) {
//     return function (z) {
//       return x * y * z;
//     };
//   };
// };

// const multiply = (x) => (y) => (z) => x * y * z;

// console.log(multiply(2)(5)(3));

// ! Infinte Currying

// function multiplyFn(x) {
//   return function (y) {
//     if (y != null) {
//       return multiplyFn(x * y);
//     } else return x;
//   };
// }

// console.log(multiplyFn(3)(2)(10)(2)());
// console.log(multiplyFn(3)(2)(0)(2)());

// ! Reusability

// const multiplyByN = (x) => {
//   return function (y) {
//     return x * y;
//   };
// };

// const multiplyBy5 = multiplyByN(5);

// console.log(multiplyBy5(4));

// ? Using the bind to achieve the same

// function multiply(a, b) {
//   return a * b;
// }

// const multiplyBy5 = multiply.bind(this, 5);
// console.log(multiplyBy5(6));
