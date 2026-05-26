// // Type conversion in JavaScript
// // 1. String to Number
// let s = "123"
// let n = Number(s)
// console.log(n)
// console.log(typeof(n))

// // 2. Number to String 
// let s = String(n)

// // 3. Boolean to Number
// let bool = true;
// let n = Number(bool)

// // 4. Booleant to String
// let s = String(bool)


// // JavaScript control Flow Statement 
// // if statement 
// const age = 28;
// if(age >= 18){
//     console.log("-------")
// }
// // if else statement 
// const score = 40;
// if(score >= 50){
//     null
// }else{
//     null
// }
// // if ----else if ---else statement 

// const temp = 34;
// if(temp > 30){
//     null
// }else if(temp >= 20){
//     null
// }else{
//     null
// }

// // Switch Statement 

// const day = "Monday"
// switch(day){
//     case "Monday":
//         console.log("..........")
//         break
//     case "friday":
//         console.log("....")
//         break
//     default:
//         console.log("...........")
// }


// // looping Statements 
// // 1.For loop
//  for(let i=1; i<=3;i++){
//     console.log(i)
// }

// // 2. while loop:  The while loop runs as the condition is true.
// let i =1;
// while(i <=3){
//     console.log(i);
//     i++;
// }

// // 3. do ---- while loop
// let i =1;
// do{
//     console.log(i);
//     i++;
// }while (i <=3)

// // 4. Ternary Operator or conditional operator 
// let a = 20

// console.log(a == 5 ? "A is equal to 5" : "a is not equal to 5")


// // Scope of Variables in javascript 

// Declaring a global variable 
// let x =10; 

// function func(){
//     let y = 20;
//     console.log(x, ",", y)

// }
// func()

// locol scope 
// function fun2() {
//     var x = 10;
//     console.log(x)
// }

// fun2()


// block and lexical Scope 
// {
//     var x = 10;
//     const y = 20;
//     let z = 30;
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }

// console.log(x);


// the variable is declared inside the function and can only be accessed inside the block or nested block is called 
// lexical scope


// function fun1(){
//     const x = 10;
//     function func2(){
//         const y = 20;
//         console.log(`${x} and ${y} `)
//     }
//     func2()
// }
// fun1()

// Modular Scope  : Module scope refers to variable and functions that are accessible only within a specific javaScriipt module.
// it helps keep code organized and prevents variables from affecting the globla scope 



 export const number = 10 
 export function add(a,b){
    return a + b;
 }
