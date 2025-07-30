// IIFE - > Immediately Invoked Function Expression

// import { useEffect } from "react";

// Even though below function is invoked immediately, it is not single expression, so it is not IIFE
// function test() {
//   console.log("Hello");
// }

// test();

// * This is IIFE ↙
// (function test() {
//   console.log("Hello");
// })();

// !! Practical Use of IIFE !!
// We can use IIFE for below function so that unnecceray variables are not created on global scope, it will be less polluted and will have less conflicts and memory utilization

// (function () {
//   let head = document.querySelector("h1");
//   //   console.log(head);
//   const p = document.querySelector("p");
//   const num = 120;
//   head.style.backgroundColor = "pink";
//   head.style.color = "black";
//   p.innerText = num;
// })();

// !! 2. Using async operation inside useEffect !!

/**
 * useEffect wants that you should return a function from it,
 * so if want to use async/ await inside it, it will throw error,
 * as it will return Promise instead of function.
 *
 * So if we want to use async await in useEffect, we can use IIFE
 */

// useEffect(() => {
//   // IIFE
//   (async function () {
//     const response = await fetch("https://fakedataapi.vercel.app/api/products");
//     const data = await response.json();
//     console.log(data);
//   })();
// });

// ------------------------

// (function () {
//   console.log("IIFE");
// });

// This is also valid
// (function () {
//   console.log("IIFE");
// }());

// (() => {
//   console.log("IIFE");
// })();

// (() => console.log("IIFE"))();

// + function() {
// console.log("IIFE");
// }()

// -(function () {
//   console.log("IIFE");
// })();

// const a = (function () {
//   console.log("IIFE");
// })();

// !function () {
//   console.log("IIFE");
// }();

// ~function () {
//   console.log("IIFE");
// }();

// void function () {
//   console.log("IIFE void");
// }();

// new function () {
//     console.log("IIFE");
//   }();

// true &&  function () {
//     console.log("IIFE ");
//   }();

// true ||  function () {
//     console.log("IIFE ");
//   }();

// true ?  function () {
//     console.log("IIFE ");
//   }() : "Hi"
