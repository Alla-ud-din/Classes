// console.log("Hello")
// let myName : string | null = "Afaq";

// myName = null;

// let myAge : string | number | null = 100

// myAge = "100"
// myAge = null;

// myAge = true;

// let myname: string | null;

// myname = null;
// console.log(myname);

// myname = "zia";
// console.log(myname);

// myname = undefined; //Error
// myname = 12; //Error

// let myAge: string | number;

// myAge = 16;//narrowing
// console.log(myAge);

// console.log(myAge.toLowerCase());//Error

// let x : number = 15
// let y : string = x.toString()

// console.log(y.toUpperCase())

// myAge = "Dont Know";//narrowing
// console.log(myAge);

// console.log(myAge.toString()); // common to both types 
//                                // can be called even without narrowing

// console.log(myAge.toLowerCase());//Can be called on string 
//                                 //because of narrowing

// // <=========================== Ternary operator: ===========================>
// // condition ? True statement : false statement
// let newAge = Math.random() > 0.6 ? "Khan": 60;
// // math.random => 0 - 1 ; 0.5, 0.8 


// if(Math.random() > 0.6){
//     newAge = "khan"
// }
// else{
//     newAge = 60
// }

// newAge.toLowerCase();//Error: Transpiler cannot narrow

// if (newAge === "Khan") {
//     // Type of newAge: string
//     newAge.toUpperCase(); // Can be called
// }

// if(typeof newAge === "string"){
//     // Type of newAge: string
//     newAge.toUpperCase(); // Can be called
// }

// typeof newAge === "string" ? newAge.toUpperCase() : newAge.toFixed(); // Ok: number
// let a = 20.88899
// console.log(a.toFixed())

// let age: number | "died" | "unknown";

// age = 90;//OK
// age = "died";//OK
// age = "unknown";//OK
// // age = "living";//Error


// let zia: "zia";

// zia = "zia";
// // zia = "khan";//Error


let yourName = Math.random() > 0.6 ? "Hira Khan": undefined;
// // The if statement in your code checks the truthiness of the yourName variable. 

// // 1. Any non-falsy value (i.e., a value that is not false, 0, NaN, null, undefined, or an empty string "") 
// // is considered truthy.

// // 2. Objects (including strings, arrays, functions, etc.) are always truthy.
// if (yourName) {
//     yourName.toUpperCase(); // Ok: string
// }

// // yourName.toUpperCase();//Error: Object is possibly 'undefined'.
// // 1. If yourName is a string, the toUpperCase() method will be called, 
// // and the string will be converted to uppercase. 
// // This is the expected behavior.

// // 2. If yourName is not a string (e.g., if it's a number, null, or undefined), 
// // the expression will not throw an error. 
// // Instead, it will return undefined without attempting to call the toUpperCase() method.

// yourName?.toUpperCase();//OK
// // <===========================Type Alias===================================>
// // You can also define a type alias

// type RawData = boolean | number | string | null | undefined;

// let data: RawData;

// // You can even combine them

// type Id = number | string;

// type IdMaybe = Id | undefined | null;


// // ===============================

// let amt = "Ten Thounsand";
// console.log(amt.toLowerCase());

// function cashWithdraw(amount: number | string | boolean){  
//     //common type
//     amount.toString();
//      //amount = "Thirty K"
//     //string
//     if(typeof amount == 'string'){
//     console.log(amount.toLowerCase());
//     }
//     else if(typeof amount == 'number'){
//     console.log(amount / 100);
//     }
//     //amount = 5000
//     //number
// }
// cashWithdraw(5);
// let age2: number | "died" | "unknown";

// age2 = 17;
// age2 ="ten"

// // ===========================

// // Type Aliases

// let myVariable :   number | boolean | "Value";

//  type myDataType =  number | boolean | "Value";


// let secVar : myDataType;

// type Point = {
//     x: number;
//     y: number;
// };
// function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
// } 
// printCoord({ x: 100, y: 100 });

// // ==========================================

// // Objects
// // object has any name car
// // contain some properties
// // model, color, brand, type etc

// //sytanx 
// let carObj = {
//     model : 2023,
//     color : "black",
//     brand : "abc",
//     "Fuel avg": '15km'
// }

// console.log(carObj.color);
// console.log(carObj.brand);
// console.log(carObj['brand']);
// console.log(carObj['Fuel avg']);

// // =========================
// let answer = {
//     name:"firstOpt",
//     type:"text",
//     message:"Ener First Number",
// }

// // ==========================
// // Nested Objects

// let addressVal = {
//     HNo:"3/7",
//     StNo:"74",
//     City:"KHI",
//     PostCode:52000
// }

// let person ={
//     firstName:"Zia",
//     LastName:"Khan",
//     gender:"Male",
//     address :addressVal,
//     address2 :{
//         HNo:"4/2",
//         StNo:"12",
//         City:"ISB",
//         PostCode:46000
//     }
// }
// console.log(person.address.City);
// console.log(person['address']['StNo']);


// type Human ={
//     name:string,
//     age:number,
//     height:number
// }
// function PersonInfo(person: Human){
//     person.age;
//     person.height
// }
// let man : Human= {
//     name: "Ali",
//     age: 6,
//     height: 5
// }
// PersonInfo(man)
//  Can also write directly
// function PersonInfo(person: {name: string, age: number, height: number}){
//     person.age;
//     person.name;
//     person.height
// }
// PersonInfo({name: "Ali", height: 6, age: 20});