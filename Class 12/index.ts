// // Abstration 

// // Things we can't define at that time

// // abstract class Base {
// //     foo(): number { return this.bar(); }
// //     abstract bar() : number;
// // }

// // class E extends Base { // okay -- implements abstract method
// //     bar() { return 1; }
// // }

// // // var obj1 = new Base();//Error, cannnot create a instance of a Abstract class
// // // console.log(obj1.foo());

// abstract class Animal {
//     abstract sound(): void;    // abstract class ka object/instance create nai hota
//     abstract move(): void;     // Thus we have to add  "abstract" with class too
//     abstract type(): void; 
// }
// abstract class Dog extends Animal{//child component ky ley mast hy ky wo har abstract chz ko implement kry 
//     sound(): void {           // overridding: Diff b/w overridding and overloading
//         console.log("Dog will bark")   // if we don't add sound() and move() Dog will give error
//     }
//     move(): void {
//         console.log("Running")
//     }
//     abstract type(): void   // we don't know type of Dog here too thus we have to make type and class abstruct
// }
// class libra extends Dog {
//     type(): void {
//         console.log("Dog is Libra")
//     }
// }           // ?


// let dg = new libra();

// dg.move();
// dg.sound();


// // <========================= interface ================>

// interface Shape {
//     color: string;
//     size: number;
// }

// interface Square extends Shape {
//     sideLength: number;
// }
// var square = <Square>{};
// // square.color = "blue";
// // square.sideLength = 10;
// // square.a = 5;//Error

// class circle implements Square {
//     color: string = "red";
//     size: number = 10;
//     sideLength: number = 5;
// }
// let circleObj = new circle();
// console.log(circleObj.sideLength)
// console.log(circleObj.size)
// console.log(circleObj.color)



