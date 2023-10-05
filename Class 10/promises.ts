//Topics we will cover
//1-- Before and After Promises
//2-- Difference between Callback and Promises
//3-- State of Promises
//4-- Promise Chaining

//DEFINITON OF PROMISE:
// A promise is an object representing the eventual completion or failure of an asynchronous operation.
// Promsie also refer as a placeholder that will be filled later with a value. 
// So promise object is a placeholder for a certain period of time 
// until we recieve a value from a async function.
// Promises also refer as a container for a future value.

//1.1-- Before Promises:
// const cart = ["Shirts", "joggers", "jackets"];

// createOrder(cart, function () {
//   proceedToPayment(orderId);
// });

//Now here API is responsible to create an order and then call our callback function back 
//once the order is created with orderId.
//This was a method we used to handle our async function with callback methods.
//                              "BUT"
//Here is the issue of inversion of control with this code. 
// What our API never call our callback function or call it twice due to any reason? 
// So this is not reliable to giving control some part of your program to some other code 
// which we are not aware of.
//To handle it Promises came into play

//Que: What are promises and how does it works?
//1.2--  After Promises:
// const promise = createOrder(cart); //async function

//When JS engine execute above line, createOrder API will return an empty object {} which is called promise 
// -- and program start executing other functions.
//After certain delay when async operation is performed it return data to an empty object/promise automatically.
//Now we can attach our promise object to other callback functions using keyword "then".

//promise.then(inside it we have our callback function)
// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

//Once our createOrder return a value to our promise then callback function attach to our promise will be automatically called.
//2-- Difference between callback and promises
//2.1: In callback we pass one function to another whereas in promises we attach a callback function to promise object.
//2.2: In callback we have to relie on other code to call our callback fuction back and we hand over control to other program whereas in promises our callback functions executed automatically as soon as the promises object get the data from the async function and the control of program is in our hand.

//3-- States of Promises:
//We have 3 states of promises i.e pending, fullfilled, and rejected

//Note: Promises objects are immutable that nobody can change what's inside the object of promise.

//4-- Promise chaining:
//Promise resolve the issue of inversion of control but what about issue of callback hell?
//In callback hell we call functions one after another:

// createOrder(cart, function () {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function () {
//       updateWallet();
//     });
//   });
// }); //pyramid doom

//We transforming the upper function using promise chaining
// createOrder(cart)