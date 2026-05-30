// let fruits = ["Apple", "Banana", "Mango"]

// let numbers =[10,20,30]

// fruits.length
// // Array methods 
// // push()  adds element at the end 
// // pop() removes last Element
// // unshift() adds element at beginning 
// // shift() Removes first element 
// // includes() true false
// // indexOf 
// // slice() 
// // splice(start, deleteCount, item1, itme2)
// // join(",")
// // reverse()
// // sort()
// // concat()
// // Array Reference in javascript 

// // Nested for loop 
// // for(let i =1; i<=3; i++){
// //     for(let j=1; j<=2; j++){
// //         console.log("i= ",i , "j=", j)
// //     }
// // }

// // loops with array 
// // let fruits = ["Apple", "Banana", "Mango"]

// // for(let i=0;i<fruits.length; i++){

// // }

// // for of loop 
// // for(let value of iterable){

// // }
// for(let fruit of fruits){
//     console.log(fruit)
// }

// let name = "Nishan"
// for(let char of name){
//     console.log(char)
// }


// let data = [5,10,15,20]
// let sum =0

// for(let num of data){
//     sum +=num
// }
// console.log(sum)


// for(let num of data){
//     if (num % 2 ==0){
//         console.log(num)
//     }
// }

// let result = [1,2,3,4,5];
// for(let num of result){
//     if(num ===3){
//         continue;
//     }
//     console.log(num)
// }


// // index 
let fruits = ["Apple", "Banana", "Mango"]

for(let[index, value] of fruits.entries()){
    console.log(index, value)
}
// Inverted-star pattern 
// *   *   *   *
// *   *   *
// *   *
// *
let n =4;
for(let line=1; line<=4; line++){
    for(let star =1; star<=4-line+1; star++){
        console.log("*")
       
    }
}
