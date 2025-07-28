/**
 *
 * ! Memoization in JS
 * ? Memoization is a technique to store the results of expensive function calls and return the cached result when the same inputs occur again.
 *  It is used to improve the performance of a function by reducing the number of times it is called. It is a form of caching and dynamic programming.
 *
 * * Redux createSelector also make the callback function memoized, so that it will not re-calculate the result if the state is not changed.
 */

// Orignal Function
// function doHeavyCalculation(x) {
//   const startTime = Date.now();
//   let currentTime = startTime;
//   while (startTime + 1000 > currentTime) {
//     currentTime = Date.now();
//     console.log("Calculating... ", currentTime - startTime);
//   }
//   const result = +Math.sqrt(x).toFixed(3);
//   return result;
// }

// console.log(doHeavyCalculation(4))
//console.log(doHeavyCalculation(4)) It will do all the calculations again

// const cache = {};
// function doHeavyCalculation(x) {
//   if (cache[x]) return cache[x];
//   const startTime = Date.now();
//   let currentTime = startTime;
//   while (startTime + 1000 > currentTime) {
//     currentTime = Date.now();
//     console.log("Calculating... ", currentTime - startTime);
//   }
//   const result = +Math.sqrt(x).toFixed(3);
//   cache[x] = result;
//   return result;
// }
// console.log(doHeavyCalculation(4));
// console.log(doHeavyCalculation(4)); It will do calculation only one time and then it will take from cache

// * But the problem is cache is still a global variable and anyone can change its value, resulting in function returning incorrect result, to fix it we can use closures

// function memoizedCalculation() {
//   const cache = {};
//   return function doHeavyCalculation(x) {
//     if (cache[x]) return cache[x];
//     const startTime = Date.now();
//     let currentTime = startTime;
//     while (startTime + 1000 > currentTime) {
//       currentTime = Date.now();
//       console.log("Calculating... ", currentTime - startTime);
//     }
//     const result = +Math.sqrt(x).toFixed(3);
//     cache[x] = result;
//     return result;
//   };
// }

// const doHeavyCalculationMemoized = memoizedCalculation();
// // doHeavyCalculationMemoized this method will have a cache in closure, and also save and return the value from cache
// console.log(doHeavyCalculationMemoized(4));
// console.log(doHeavyCalculationMemoized(4));
// console.dir(doHeavyCalculationMemoized);
