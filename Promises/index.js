// ------------------------ ------------------------ ------------------------
// STEP - 1 : Basic Promises

// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an async task
//   // DB calls, cyptography, network calls

//   setTimeout(function () {
//     console.log("Async task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise consumed (did the promised async task)");
// });

/*
    we can also do it directly, without needing ot assign it
    to an object or variable.
 */

// ------------------------ ------------------------ ------------------------
// STEP 2 : Promises with no assignment to a variable.

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async task 2 was resolved (promise consumed).");
// });

// STEP 3 : Promises returning Object

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve({ name: "Kenny", email: "kenny@user.np" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// ------------------------ ------------------------ ------------------------
// STEP 4 : Promises with reject (catch-handling), and a finally block.

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ name: "Kenny", email: "kenny@user.np" });
//     }
//     reject("ERROR: Something went wrong.");
//   }, 1000);
// });

// promiseFour
//   .then(function (user) {
//     console.log("Async task was resolved.");
//     console.log("Here is your user: \n", user);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("The promise was either resolved or rejected.");
//   });

// ------------------------ ------------------------ ------------------------
// STEP 5 : Promises with async-await.
// Async await are also used to make a line of code,
//  or a function to wait, until it's completed.
// which is same as `Promises`. so they can also be used to implement promises.

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong.");
//     }
//   }, 1000);
// });

// in implementing promises with async await, you mainly have issues
// with handling errors gracefully, as there is nothing like `catch` block here.
// So, to catch errors here, we use try-catch BLOCKs.

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive; // n’t do await promiseFive() because promiseFive is already a Promise, not a function.
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// STEP 6 : Promise using async-await with fetch() and response.json().

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json(); // beginners make mistake here.
    // since it takes some time, also for data to be converted to json,
    // we use `await` here as well.
  } catch (error) {
    console.log("E :", error);
  }
}

// also, another way to use fetch, with .then().catch()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

// promise.all
