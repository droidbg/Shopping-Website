/**
 *
 * This File is to learn call , apply and bind method in javascript
 *
 */

// ? Function borrowing
// It is used to borrow the method of one object and use it in another object.

// const user1 = {
//   firstName: "Alya",
//   lastName: "Albora",
//   //   getFullName: function () {
//   //     console.log(this.firstName + " " + this.lastName);
//   //   },
// };

// user1.getFullName();

// const user2 = {
//   firstName: "Deniz",
//   lastName: "Albora",
// };
// call method takes first argument for this keyword, and other arguments as a comma separated values
// user1.getFullName.call(user2);

// Separate the functions and use the objects as this keyword

// let getDetails = function (hometown, state) {
//   console.log(
//     this.firstName +
//       " " +
//       this.lastName +
//       ", from " +
//       hometown +
//       " state: " +
//       state
//   );
// };

// getDetails.call(user1, "London", "UK"); // user1 -> goes to this , london goes to the argument
// getDetails.call(user2, "Canada", "Toronto");

// apply method is same as call method but it takes second argument as an array
// getDetails.apply(user1, ["London", "UK"]);
// getDetails.apply(user2, ["Canada", "Toronto"]);

// bind method is same as call method but it returns a new function
// bind method is used to create a new function and it is used to bind the method to the object
// Bind method will not call the function, it will return a new function
// const getDetailsBind = getDetails.bind(user1);
// getDetailsBind("USA", "New York");

// const getDetailsBind2 = getDetails.bind(user2);
// getDetailsBind2("India", "Bengaluru");

// We can also bind the whole function or partial
// const userNew = {
//   firstName: "Test",
//   lastName: "User",
// };
// const myGetDetailedBinded = getDetails.bind(userNew, "HomeX", "StateY");

// myGetDetailedBinded();
