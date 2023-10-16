export {};
// <====================== CallBack Function =============================>
// Write a function that takes a callback as an argument and calls it after a short delay using setTimeout. 
// Use this function to log a message after the delay.
// function main(cb: (text: string)=>void){
//     setTimeout(function timeout(){
//         cb("calling after 10s");
//     },10000)
// }
// function callback(text: string){
//     console.log(text);
// }
// main(callback);
// Create a function that accepts a callback function and two numbers as arguments. 
// Call the callback with the sum of the two numbers as its argument.
// let sum = function(cb: (x: number,y: number)=>void, x: number, y: number){
//     cb(x,y);
// }
// let callback = (x: number,y: number)=>{
//     console.log("Sum is: ", x+y);
// }
// sum(callback, 5,6);
// Implement a function that iterates over an array of numbers and applies a callback to each element. 
// For example, you can create a function that squares each number in an array using a callback.
// function main(arr: number[], cb:(num: number)=>void){
//     arr.forEach((element, index)=>{
//         cb(element)
//     })
// }
// let sum = 0;
// function callback(arr: number){
//     sum +=  arr;
// }
// main([1,2,3,9], callback);
// console.log(sum);
// Make a function which will take 2 values and and then call a callback function for multiplication
// let calculation = function(x: number,y: number,callback: (x: number,y: number) => void){
//     console.log(callback(x,y));
// }
// calculation(5,6,(x: number, y: number)=>{
//     return x*y;
// })
// Make egg, tea and juice and then serve
// function makeEgg(cb: ()=>void){
//     console.log("Making Egg");
//     setTimeout(() => {
//         cb()
//     }, 1000); 
// }
// function makeTea(cb: ()=>void){
//     console.log("Making Tea");
//     setTimeout(() => {  
//         cb();
//     }, 2000);  
// }
// function makeJuice(cb: ()=>void){
//     console.log("Making Juice");
//     setTimeout(() => {
//         cb();
//     }, 3000);   
// }
// function eggCallBack(){
//     console.log("Egg is ready");
//     makeTea(teaCallBack)
// }
// function teaCallBack(){
//     console.log("Tea is ready");
//     makeJuice(juiceCallBack);
// }
// function juiceCallBack(){
//     console.log("Juice is ready")
//     serve();
// }
// function serve(){
//     console.log("Breakfast is served")
// }
// makeEgg(eggCallBack);
// In above example, one task happening at one time.
// As it is possible to make Egg, make Tea and Juice in parallel.
// example of Async 
// function makeEgg(){ 
//     setTimeout(() => {
//         console.log("Egg is ready");
//     }, 1000); 
// }
// function makeTea(){ 
//     setTimeout(() => {  
//         console.log("Tea is ready");
//     }, 2000);  
// }
// function makeJuice(){ 
//     setTimeout(() => {
//         console.log("Juice is ready");
//         serve();
//     }, 3000);   
// }
// function serve(){
//     console.log("Breakfast is served")
// }
// makeEgg();
// makeTea();
// makeJuice();
// <============
// Callback Hell
// function makeEgg(cb: ()=>void){
//     console.log("Making Egg");
//     setTimeout(() => {
//         cb()
//     }, 1000); 
// }
// function makeTea(cb: ()=>void){
//     console.log("Making Tea");
//     setTimeout(() => {  
//         cb();
//     }, 2000);  
// }
// function makeJuice(cb: ()=>void){
//     console.log("Making Juice");
//     setTimeout(() => {
//         cb();
//     }, 3000);   
// }
// function serve(){
//         console.log("Breakfast is served")
//     }
// makeEgg(()=>{
//     console.log("Egg is ready");
//     makeTea(()=>{
//         console.log("Tea is ready");
//         makeJuice(()=>{
//             console.log("Juice is ready");
//             serve();
//         })
//     })
// })
// doing task in parallel
// makeEgg(()=>{
//     console.log("Egg is ready");
//         makeJuice(()=>{
//             console.log("Juice is ready");
//             serve();
//         })
//     })
// makeTea(()=>{
//     console.log("Tea is ready");
// })
// <===========================
// Promises
// new Promise().then().catch().finally()
// 1. 
// const prmoise1 = new Promise<void>((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("Async task is complete");
//         resolve()
//     }, 1000);
// });
// console.log(prmoise1)
// prmoise1.then(function(){
//     console.log("Promise consumed")
// })
// 2.
// new Promise<void>(function(res, rej){
//     setTimeout(() => {
//         console.log("Async task2");
//         res();
//     }, 1000);
// }).then(function(){
//     console.log("Async 2 resolved");
// 3.
// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({username: "Ali", email: "Ali@example.com"})
//     }, 1000);
// })
// promise3.then((user)=>{
//     console.log(user);
// })
// 4. 
// const promise4 = new Promise<{username: string; email: string}>(function(resolve, reject){
//     setTimeout(() => {
//         let error = true;
//         if (!error)
//         {
//             resolve({username: "Ali", email: "Ali@example.com"})
//         }
//         else{
//             reject("Error: Something went wrong")
//         }
//     }, 1000);
// })
// promise4
// .then((user) => {
//     console.log(user);
//     return user.username;
//   }).then((username)=>{
//     console.log(username);
//   }).catch((error)=>{
//     console.log(error);
//   }).finally(()=> console.log("THe promise is done"));
// 5.
// const promise5 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = true;
//         if (!error){
//             resolve({username: "Ali", email: "Ali@example.com"})
//         }
//         else{
//             reject("Error: Something went wrong")
//         }
//     }, 1000);
// })
// async function comsumePromise5(){
//     const response = await promise5;
//     console.log(response)
// } // this will create problem when there is an error or rejected. For that we use try catch
// async function comsumePromise5(){
//     try{
//     const response = await promise5;
//     console.log(response);
//     } catch(error){
//         console.log(error);
//     }
// } //both is true we can use try catch or .then and .catch
// comsumePromise5();
// })
// let myPromise = new Promise(function(resolve, reject){
//     const isMeet = false;
//     if (isMeet){
//         resolve("Dinner");
//     }else{
//         reject("Will meet some other day");
//     }
// });
// // Syntax: .then(onResolve, onRejection)
// myPromise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error)
// })
// function myPromise(){
//     return new Promise((resolve, reject)=>{
//         const isMeet= true;
//         if (isMeet){
//             resolve("Dinner");  // if we commet resolve then no connection will established 
//             // b/w resolve and .then(). 
//             // Thus there will be no output
//         }else{
//             reject("Will meet some other day");
//         }
//     })
// }
// myPromise().then((data)=>{
//     console.log(data);
//     console.log("Hello")
// })
// <=============
// Promise chaining
//  Make omlette
// function makeOmlete(){
//     return new Promise(function(res, rej){
//         setTimeout(() => {
//             res("preparing omlete")
//         }, 0);
//     });
// }
// makeOmlete().then((response)=>{
//     console.log(response);
// })
// .then (()=>{
//     return new Promise ((res, rej)=>{
//         const isOnion = true;
//         if (isOnion){
//             setTimeout(() => {
//                 res("Onion is chopped");
//             }, 2000);
//         }else{
//             const error = new Error("Onion out of stock");
//             rej(error);
//         }
//     })
// })
// .then((response)=>{
//     console.log(response);
// })                                              // 1.
// .then (()=>{                                    // 2. We can skip these two lines
//     return new Promise ((res, rej)=>{
//         const isTomato = true;
//         if (isTomato){
//             setTimeout(() => {
//                 res("Tomato is cut");
//             }, 2000);
//         }else{
//             const error = new Error("Tomato out of stock");
//             rej(error);
//         }
//     })
// })
// .then ((data)=>{  
//     console.log(data)                                  //we skip those 2 lines
//     return new Promise ((res, rej)=>{
//         setTimeout(() => {
//             res("Omlete is ready");
//         }, 4000);
//     })
// })
// .then((data)=>{
//     console.log(data);
//     return data;
// })
// .catch((error)=>{
//     console.log(error.message)
// })
// .finally(()=>{
//     console.log("Program is ended");
// })
// <==================
// Promise.all
// function makeEgg(){
//     console.log("Making Egg");
//     setTimeout(() => {
//     }, 1000); 
// }
// function makeTea(){
//     console.log("Making Tea");
//     setTimeout(() => {  
//     }, 2000);  
// }
// function makeJuice(){
//     console.log("Making Juice");
//     setTimeout(() => {
//     }, 3000);   
// }
// function serve(){
//     console.log("Breakfast is served")
// }
// Promise.all([makeTea(), makeEgg(), makeJuice()]).then(()=>{
//     serve()
// })
// <===================Explaining difference between callBack and promises using same example>
// function watchTutorialCallback(callback: (response: string)=>void, errorCallback : (error : {name: string; message: string})=>void) {
//     let userLeft = false
//     let userWatchingCatMeme = true
//     if (userLeft) {
//       errorCallback({
//         name: 'User Left', 
//         message: ':('
//       })
//     } else if (userWatchingCatMeme) {
//       errorCallback({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat' 
//       })
//     } else {
//       callback('Thumbs up and Subscribe')
//     }
// }
// watchTutorialCallback((message: string)=>{
//     console.log("Success: " + message)
//   }, (error: {name: string; message: string} )=>{
//     console.log(error.name + " " + error.message)
// })
//   function watchTutorialPromise() {
//     let userLeft = false
//     let userWatchingCatMeme = false
//     return new Promise((resolve, reject) => {
//       if (userLeft) {
//         reject({
//           name: 'User Left', 
//           message: ':('
//         })
//       } else if (userWatchingCatMeme) {
//         reject({
//           name: 'User Watching Cat Meme',
//           message: 'WebDevSimplified < Cat' 
//         })
//       } else {
//         resolve('Thumbs up and Subscribe')
//       }
//     })
//   }
//   watchTutorialPromise().then(message => {
//     console.log(message)
//   }).catch(error => {
//     console.log(error.name + ' ' + error.message)
//   })
//   const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 Recorded')
//   })
//   const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 Recorded')
//   })
//   const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 Recorded')
//   })
//   Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
//   ]).then(messages => {
//     console.log(messages)
//   })
//   Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
//   ]).then(message => {
//     console.log(message)
//   })
// <==========================================>
// function delay (ms: number){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(() => {
//             const res = true;
//             if (res){
//                 resolve("Promise resolve")
//             }else{
//                 reject("Promise is rejected")
//             }
//         }, ms);
//     })
// }
// async function firstFunction() {
//     const response = await delay(3000);
//     console.log("Function 1, ", response);
//     const response1 = await delay(5000);
//     console.log("Function 1, ", response1);
//     console.log("This is sync");
// }
// async function secondFunction() {
//     const response = await delay(3000);
//     console.log("Function 2, ", response);
//     const response1 = await delay(5000);
//     console.log("Function 2, ",  response1);
//     console.log("This is sync");
// }
// firstFunction();
// await secondFunction();
// dada nana walid walida stamp paper
