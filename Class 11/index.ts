// // overloads give us type-checked calls

// // function add1(arg1: string, arg2: string){
// // body
// // }

// //its customary to order overloads from most specific to least specific
// function add(arg1: string, arg2: string): string; //option 1

// function add(arg1: number): number; //option 2

// function add(arg1: boolean, arg2: boolean): boolean; //option 3

// //this is not part of the overload list,
// //so it has only three overloads
// function add(arg1: any, arg2?: any): any {
//   return arg1 + arg2;
// }

// //Calling 'add' with any other parameter types would cause an error except for the three options
// // console.log(add(1, 2));
// console.log(add(1));
// console.log(add("Hello", "World"));
// console.log(add(true, false));

// function sum(a: number, b: number): number;
// function sum(a: string, b: string): string;
// function sum(a: any, b: any){
//   return a+b;
// }
// sum(4,5);   //This is giving exact data type which is number and returning number
// // sum(5, "Ali"); //error
// sum("Hello", "Ali") //data type as string and returning string

// function sum (a: number | string, b: number | string) : number | string{
//   if (typeof a == "number" && typeof b == "number") {return a+b;}
//   else { return `${a} ${b}`}
// }
// sum(4,5);   // Not giving exact data Type
// sum(5, "Ali"); // No error
// sum("Hello", "Ali") //NOt giving exact data Type
// // // ============================================

// // //number array

// let arry: number[] = [832, 1535, 1315, 155];

// //Tuple types have the advantage that you can accurately describe the type of an array of mixed types
// Tuple is a typed array, with a predefined length and types for each index.

// var tuple: [number, string, boolean] = [531, "151", true];
// var tuple: [number, string, boolean] = [531, "151"];   //error
// var tuple: [number, string] = [531, "151", true];   //error
// var tuple: [number, string, boolean , {name: string}] = [531, "151",true];   //error
//to resolve above error we have to make object optional
// var tuple: [number,string,boolean,{name: string}?] = [531,"151",true];   //No error
// var tuple: [number,string,boolean,{name: string}?] = [531,"151",true, {name: "Ali"}];   //No error
// var secondElement = tuple[1]; // secondElement now has type 'string'

// // // =================================================

// // // structural typing

// class Human {
//   name: string;
//   constructor(userName: string) {
//      this.name = userName;
//   }
// }
// let humanObj = new Human("Usman"); //obj
// humanObj.name;
// let obj ={
//     name:""
// }
// class Human1 {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//     // this.age = age;
//   }
//   eat() {
//     console.log(this.name + " is a Human and is eating");
//   }
// }
// class Animal1 {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   eat() {
//     console.log(this.name + " is a Animal and is eating");
//   }
// }
// class WildAnimal1 {
//   title: string;
//   constructor(title: string) {
//     this.title = title;
// }
//   eat() {
//     console.log(this.title + " is a Wild Animal and is eating");
//   }
// }
// class Robot1 {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// let h: Human1 = new Human1("Tom");
// let a: Animal1 = new Animal1("Goat");
// let r: Robot1 = new Robot1("R2-D2");
// h.eat();
// a.eat();

// let h2 = h;
// h2 = a;
// h2.eat();

// let r2 = r;
// r = a;
// //Animal has a name, Robot also has a name
// // "a" is a stale object therefore extra eat() method in "a" is ok
// // a = r; //Error, Robot does not have eat method
// // a = r2; //Error, Robot does not have eat method

// let hum: Human1 = new Animal1("Dog"); //Fresh Object
// console.log(hum instanceof Human1, hum instanceof Animal1)  // false true

// // But Fresh or stale both have same properties and methods
// // therefore compatible

// // let wild : Animal = new WildAnimal1("Deer");//Fresh Object

// let r0: Robot1 = new Animal1("Donkey");

// var isItRobot = r0 instanceof Robot1;
// var isItAnimal = r0 instanceof Animal1;
// console.log("R0 instance of ", isItRobot);   // false
// console.log("R0 instance of ", isItAnimal)   // true

// // ==========================================

// class Animal {
//   name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
//   move(meters: number = 0) {
//     console.log(this.name + " moved " + meters + "m.");
//   }
// }
// class Snake extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(meters = 5) {
//     console.log("Slithering...");
//     super.move(meters);
//   }
//   bite() {
//     console.log("bites");
//   }
// }

// class Horse extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(meters = 45) {
//     alert("Galloping...");
//     super.move(meters);
//   }
// }
// class Donkey extends Animal {
//   distance: number;
//   constructor(name: string, distance: number) {
//     super(name);
//     this.distance = distance;
//   }
//   move(meters = 45) {
//     alert("Moving...");
//     super.move(meters);
//   }
// }
// class Cat extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(meters = 1) {
//     alert("Jumping...");
//     super.move(meters);
//   }
// }
// let a: Animal = new Snake("Python");
// a.move(5);
//Snake move method is called not Animals, this is because of polymorphism

// let a1: Animal = new Horse("Rocket");
// console.log(a1 instanceof Animal, a1 instanceof Horse);
// let h: Horse = a1; //explicit casting not require because Child object have same properties and fuctions
// console.log(a1 instanceof Animal, a1 instanceof Horse);
// // let h2: Horse = a1 as Horse; //explicit will also works but not needed

// let a2: Animal = new Donkey("Worker", 100);
// console.log(a2 instanceof Animal, a2 instanceof Donkey);
// let h3: Donkey = a2 as Donkey; //explicit casting require because Child object have additional properties or functions
// console.log(a2 instanceof Animal, a2 instanceof Donkey);
// // let h4: Donkey = a2; // Error -- will not work, explicit casting is required as above

// let d1: Horse = new Donkey("Worker", 200);

// console.log("is Animal? " + (d1 instanceof Animal)); // true
// console.log("is Donkey? " + (d1 instanceof Donkey)); // true
// console.log("is Horse? " + (d1 instanceof Horse));

// let h1: Horse = new Cat("Kitten");
// //why is this allowed? Because it has same properties and methods (structural type) not because of inheritance
// //https://github.com/Microsoft/TypeScript/issues/5303
// another example

// class school {
//   name: string;
//   students: student[] = [];
//   teachers: teacher[] = [];
//   addStudent(stdObj: student){
//     this.students.push(stdObj);
//   }
//   addTeacher(tecObj: teacher){
//     this.teachers.push(tecObj);
//   }
//   constructor(name: string){
//     this.name = name;
//   }
// }
// class student{
//   name: string;
//   age: number;
//   schoolName: string;
//   constructor(name: string, age: number, schoolName: string){
//     this.name = name;
//     this.age = age;
//     this.schoolName = schoolName;
//   }
//   // studentFunc(): string{
//   //   return `Student name is ${this.name}`
//   // }
// }
// // class teacher{
// //   [x: string]: any;
// //   name: string;
// //   age: number;
// //   schoolName: string;
// //   constructor(name: string, age: number, schoolName: string){
// //     this.name = name;
// //     this.age = age;
// //     this.schoolName = schoolName;
// //   }
// // } instead of all this defination of class teacher we can just extend teacher using student class
// // class teacher extends student{} // This works oky but if we want to add more details to teacher class then
// // class teacher extends student{
// //   email: string =""; //normally we initiallize properties using constructor
// //   contact: number = 0;
// //   addInfo(email: string, contact: number){
// //     this.email = email;
// //     this.contact = contact;
// //   }
// // }
// // we can also write class teacher as 
// class teacher extends student{
//   email: string =""; //normally we initiallize properties using constructor
//   contact: number = 0;
//   constructor(name: string, age: number, schoolName: string, email: string, contact: number){
//     super(name, age, schoolName)
//     this.email = email;
//     this.contact = contact;
//   }
// }
// let school1 = new school("Holy Mission");
// let school2 = new school("Mission School")
// const student1 = new student("Ali", 10, school1.name);
// const student2 = new student("Muazam", 8, school2.name);
// const student3 = new student("Mukaram", 6, school2.name);
// // const teacher1 = new teacher("Kamran", 40, school1.name);
// // const teacher2 = new teacher("Usman", 50, school2.name);
// // const teacher3 = new teacher("Ibrar", 50, school2.name)
// const teacher1 = new teacher("Kamran", 40, school1.name, "abc@abc.com", 123456);
// const teacher2 = new teacher("Usman", 50, school2.name, "def@abc.com", 789101);
// const teacher3 = new teacher("Ibrar", 50, school2.name, "ghi@abc.com", 112131)
// school1.addStudent(student1);
// school2.addStudent(student2);
// school2.addStudent(student3)
// // console.log(school1);
// // console.log(school2)
// // console.log(teacher1);
// // console.log(teacher2);
// // console.log(teacher3);
// school1.addTeacher(teacher1);
// school2.addTeacher(teacher2);
// school2.addTeacher(teacher3);
// // teacher1.addInfo("abc@abc.com", 123456);
// // teacher1.addInfo("def@abc.com", 789101);
// // teacher1.addInfo("ghi@abc.com", 112131);

// console.log(school1);
// console.log(school2);

// // console.log(student1.studentFunc());


// class A {
//   constructor() {
//     this.MyvirtualMethod();
//   }
//   protected MyvirtualMethod(): void {
//     console.log("A");
//   }
// }

// class B extends A {
//   private testString: string = "B";

//   public MyvirtualMethod2(): void {
//     console.log(this.testString); // This becomes undefined
//   }
// }

// let obj = new B();

// // obj.testString

// // public        by default property is public
// // private       can use only inside class not from outside not even in child class
// // protected     we can use property of parent class in child class but not from outside

// var passcode = "secret passcode";

// class Employee {
//   private _fullName: string | undefined;

//   get fullName(): string | undefined {
//     //you have to login
//     return this._fullName;
//   }

//   set fullName(newName: string | undefined) {
//     this._fullName = newName;
//   }
// }

// var employee = new Employee();
// employee.fullName = "Bob Smith";

// if (employee.fullName) {
//   console.log(employee.fullName);
// }

// // Example:
// class user {
//   // private name = "Bilal";
//   protected name = "Bilal"
//   getUser(){
//     return this.name;
//   }
// }
// class userInfo extends user {
//   age = 48;
//   setUserName(){
//     // return this.name = "Tehsin" // with private name property there will be an error here
//     return this.name = "Tehsin";
//   }
// }