"use strict";
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
