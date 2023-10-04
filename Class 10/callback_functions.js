// //What are callback function in JAVASCRIPT:
// setTimeout(function(){
//     console.log("Timer");
// }, 3000);
// function x(y: any){
//     console.log("This is X function");
//     y();
// }
// x(function y(){
//     console.log("This is Y function");
// })
// console.log("Wait");
// //In JS is synchronous and single threaded means it will execute 1 line at a time.
// //Js has single call stack/ main thread. 
// //Everything excuted inside the page will executed through the callstack
// //                  "SO"
// //If any heavy operation will take more time to excute like (20- 30secs),
// //by the time JS has only 1 call stack so it won't be able to execute anyother function in the code 
// //it will block the main thread/call stack called as blocking the main thread
// //To avoid blocking the main thread -- we go for asynchronous behaviour just like we did with setTimeOut()
// //setTimeOut will take the callback and will execute this piece of code somewhere else and 
// //it will empty the call stack and get out of the call stack.
// //Using WebAPIs (setTimeOut) + callback = we can achieve the asynchronous behaviour.
// //Asynchronous code is always executed after the main thread
// //Never trust the delay given to the setTimeout function. You can only specify a minimum delay. 
// //Even if you set a 0 delay, your code could be executed much later.
// setTimeout(function () {
//     console.log("I am an asynchronous message");
//   }); // You can omit the 0
//   console.log("Test 1");
//   for (let i = 0; i < 10; ++i) {
//     console.log(doSomeStuff());
//   }
//   console.log("Test 2");
//   // The 'I am an asynchronous message' will be displayed when the main thread reach here
//   function doSomeStuff() {
//     return "Function doSomestuff";
//   }
//   //setInterval
//   //setInterval has the same behavior as setTimeout but the code is executed multiple times.
//   //You have to call clearInterval to kill the timer.
let counter = 0;
let timer = setInterval(function () {
    console.log("I am an asynchronous message");
    counter += 1;
    if (counter >= 5) {
        clearInterval(timer);
    }
}, 1000);
console.log("I am a synchronous message");
export {};
//   //With more and more asynchronous code and features in recent frameworks, we need something to manage it. Here comes our savior: the Promise class.
//   //It is now the standard way to deal with asynchronous code
// <==========================================>
//Concept we will cover:
//1-- Synchronous behaviour and callstack
//2-- Role of callbacks
//3-- Problem 1: Callback Hell
//4-- Probelm 2: Inversion of Control
// 1-- Synchronous behaviour and callstack:
// As we know JS is synchronous single threaded language and 
// it has one callstack and can do single operation at a time
// Callstack in Javascript: The call stack is used by JavaScript to keep track of multiple function calls. 
// It is like a real stack in data structures where data can be pushed and popped and 
// follows the Last In First Out (LIFO) principle. We use call stack for memorizing which function 
// is running right now.
// 2-- Role of callbacks:
// The question arises here is what if we need to execute any function after some certain delay? 
// How can we perform this delay function as callstack doesnot wait and it keep executing whatever 
// comes inside it, and there is no question on blocking the main thread.
// So to tackle this problem, callbacks came into play: Callbacks used to be the main way 
// asynchronous functions were implemented in JavaScript. 
// A callback is just a function that's passed into another function, 
// with the expectation that the callback will be called at the appropriate time.
//3-- Problem 1: Callback Hell: Callback hell is nested callbacks stacked below one another 
// forming a pyramid structure. Every callback depends/waits for previous callback, 
// thereby making a pyramid structure that effects the readibility and maintability of the code.
//Example: Ecommerce Website cart operation depended on one another
//1. Create Order
//2. Payment
//3. Show Payment Summary
//4. Update Wallet
// const cart = ["shirts", "jackets", "shoes"]; //just an example for understanding
// api.CreateOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.updateWallet();
//     });
//   });
// });
// //One callback inside other callback inside another API, make this callback hell 
// and our code grows horizontally instead of vertical which is called pyramid structure or pyramid of doom, 
// which makes difficult in code maintainability and readability.
// //Pyramid Doom:
// job1(function () {
//   doSomething1();
//   job2(function () {
//     doSomething2();
//     job3(function () {
//       doSomething3();
//       job4(function () {
//         doSomething4();
//       });
//     });
//   });
// });
// //4-- Problem 2: Inversion of control
// //It's like we lose the control of our code when using callbacks => Inversion of control 
// is the notion of having code under your control in one part of program 
// and then handing control over to a callback in another part of the program
// const cart2 = ["shirts", "jackets", "shoes"]; //just an example for understanding
// api.CreateOrder(cart, function () {
//   api.proceedToPayment();
// });
// //Here proceedToPayment() method relies on CreateOrder() => we can only proceedToPayment() 
// once we CreateOrder() this is dependency of one function into another. 
// What if, for any reason method 1 could not initiate the dependent method or initiate it twice
// //To visualize how callback and event loop works: https://wesbos.com/javascript/12-advanced-flow-control/66-the-event-loop-and-callback-hell
