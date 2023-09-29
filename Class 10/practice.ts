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
function makeEgg(cb: ()=>void){
    console.log("Making Egg");
    setTimeout(() => {
        cb()
    }, 1000); 
}
function makeTea(cb: ()=>void){
    console.log("Making Tea");
    setTimeout(() => {  
        cb();
    }, 2000);  
}
function makeJuice(cb: ()=>void){
    console.log("Making Juice");
    setTimeout(() => {
        cb();
    }, 3000);   
}
function serve(){
        console.log("Breakfast is served")
    }
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
makeEgg(()=>{
    console.log("Egg is ready");
    
        makeJuice(()=>{
            console.log("Juice is ready");
            serve();
        })
    })
makeTea(()=>{
    console.log("Tea is ready");
})