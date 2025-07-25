// This script is to practice map, filter, reduce

// const students = [
//   { name: "Alya Albora", age: 30 },
//   { name: "Cihan A", age: 35 },
//   { name: "Deniz", age: 5 },
//   { name: "Boran", age: 28 },
//   { name: "Zenyep", age: 18 },
//   { name: "Azeze", age: 16 },
// ];

// const filteredStudent = students.filter((student) => {
//   return student.age >= 18;
// });

// console.log(filteredStudent);

/**
 * Successfully able to access script1 variable.
 */
// console.log(abcd);

/**
 *    Reduce
 * - It will iterate over the list and reduce it to one value based on the condition
 * - It has 4 params (Accumulator, currentItem, index, array), where mainly first 2 are used in callback
 * - It also a option to provide initial Value
 * - Accumulator = it is where the value will accumulate (it is basically storing the previous value of the iteration).
 * - If the initialValue is provided - the loop will run n times (from 0th element to last index) with accumulator initial value set as same as what passed
 * - If the initialValue is not provided, then loop will run n-1 times, with accumulator initial value  will be the first element of the array, and the loop will start from 1st index element.
 * - CurrentItem = it is like the current element on which the array is, while iterating
 * - index = current index of the element
 * - array = it also contain the value of array on which the iteration is happening
 */
// const array = [1, 2, 3, 4, 5];

// const sum = array.reduce((previousValue, currentItem) => {
//   console.log(currentItem);
//   return previousValue + currentItem;
// }, 0);

// console.log(sum);

// console.log("Without Initial Value");
// const sum2 = array.reduce((previousValue, currentItem) => {
//   console.log(currentItem);
//   return previousValue + currentItem;
// });

// console.log(sum2);

// console.log("With Initial Value");
// const multiply = array.reduce((previousValue, currentItem) => {
//   console.log(currentItem);
//   return previousValue * currentItem;
// }, 0);
// // Here Result will be 0
// console.log(multiply);

// console.log("Without Initial Value");
// const multiply2 = array.reduce((previousValue, currentItem) => {
//   console.log(currentItem);
//   return previousValue * currentItem;
// });

// console.log(multiply2);

// console.log("With Some inital Value");
// const arr2 = [5, 10, 1]; // sum of arr2 = 16
// const summ = arr2.reduce((prev, current) => {
//   return prev + current;
// }, 10);
// console.log(summ); // 16 + 10 = 26 output
