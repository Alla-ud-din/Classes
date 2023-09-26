// import sum from "./firstModules.js";
// sum();
// import inquirer from 'inquirer';
// const answer = await inquirer.prompt([{
//     name:"userName",
//     type:"text",
//     message:"Enter your name.. "
// },
// {
//     name:"userAge",
//     type:"number",
//     message:"Enter your age.. ",
//     validate: function(userAge: number){
//         if(userAge < 20){
//             return "User age should be greater than 20"
//         }
//         return true;
//     }
// }])
// console.log("your name is : ", answer.userName);
// import sumOfTwo from "./sum.js";
// import productOfTwo from "./multiply.js";
// import differenceOfTwo from "./subtract.js";
// console.log(sumOfTwo(15,20));
// console.log(productOfTwo(5, 10))
// console.log(differenceOfTwo(20, 10))


// import inquirer from "inquirer";
// let answers = await inquirer.prompt([
// {
//     name: "userName",
//     type: "string",
//     message: "Enter your name: "
// },
// {
//     name: "email",
//     type: "string",
//     message: "Enter your email"
// },
// {
//     name:"contact",
//     type:"number",
//     message: "Enter your contact"
// }
// ])

// console.log(chalk.bgBlue(answers.userName))
// console.log(answers.contact)

// import chalk from "chalk";

// console.log(chalk.red("Hello world"))
// console.log("Hello world")
// console.log(chalk.bgBlueBright("Hello world"))
// console.log('Hello', chalk.underline.bgBlue('world') + '!')

// import showBanner from 'node-banner';
 
// (async () => {
//     await showBanner('The Title', 'This is a suitable tagline');
// })();