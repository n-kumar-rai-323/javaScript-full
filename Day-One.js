// Data Types in javascript

// Primitive data types  
// represent signle 
// values and are immutable.                               Non-primitive data types 
// 1. Numeric Type            2. Non-Numeric type           1. object
// a. Number   '                 a. String                   2. Arrays
// b. bigint                    b. Boolean                  3. Function
                                // c. Null                  4. Data object
                                // d. undefined             5. Regular Expression 
                                // e. Symbol 



                                // Variables 
// 1. var keyword   it has a function-scoped or globally scoped behaviour 
var num = 4;
// console.log(num)
num = 30;
console.log(num)  // reassigning is allowed 

// the let keyword is introduced in ES6  has block scope amd cannot be re-declared in the same scope 

let n = 10;
n = 20 // Value can be updated
// let n = 15; // can not redeclare  
console.log(n)


// const keyword :- declares variables that cannot be ressigned. block-scoped as well 
const data = 100;
// data = 200;
console.log(data)
let result = 34;
let pi = 3.14

let s= "Hello, world";
let bool= true
let boll= false

// has been declared but not assigned a value. 
let notAssigned;
console.log(notAssigned)

// Null : Represents an intentional absence of any value
let empty = null
console.log(empty)

// Symbole : Represents unique and immutable values, often used as object keys.
let sym = Symbol('unique')
console.log(sym)

// BigInt  : integers larger than Number. Max_safe_integer
let bigNumber= 6712648726184682736487638746n;

// Non-Primitive Datatypes : are objects and can store collections of data or more complex
// Object => Represents key-value pairs

let obj ={
    name: "Nishan",
    age : 24
}


// array  -> orderd list of values.
let a = ["red","green", "blue"]

// function : resuable blocks of code

function fun(){
    console.log("Hello world")
}

fun()


// Working with variables and data types 
console.log(null === undefined)
console.log(5 >3>2)
console.log([]===[]) // arrays are objects. even if two arrays have the same content they are still different objects in memory

console.log("10" < "9")

console.log(NaN === NaN)
console.log(true == 1)
console.log(undefined > 0 )



// JavaScript Operation 
// Arithmetic Operators + - * /
// Assignment Operators 
// let night = 10 
// night = night + 4;
// night +=4

// Comparison Operator 
// === checks for strict equality (both type and value)
// Logical operators 
// const a = true , b = false
// console.log(a && b )
// console.log(a || b)
// console.log(!a)

// bitwise operators 
const res = 5 & 1;
// console.log(res)  & | ^ xor ~ NOT << left shifts  >> right shifts >>> 

// Ternary Operator : shorthand for conditional statements. it takes three operands. 
const age = 18;
const status = age >= 18 ? "Adult" : "Minor"

// Common Operator 


// Unary Operators
console.log("-----------")
// Relational Operator 
const RO = { length: 10}
console.log("length " in RO)

// string operators 
const nishan= "Hello" + " " + "world";
console.log(nishan) 

// Chaining operator (?) : allows safe access to deeply nested properties without throwing errors if the 
// property doesn't exits 

const result2 = {name: "Nishan", address:{city:"KTM"}};
console.log(result2.address?.city)
console.log(result2.contact?.phone)