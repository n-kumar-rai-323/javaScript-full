// // const person={
// //     name : "Nishan",
// //     age:26,
// //     city:"ktm"
// // }
// // console.log(person)
// // console.log(person.age) // Accessing object values
// // console.log(person["age"]) //Bracket notation 

// // person.age = 45

// // delete person.city
// // console.log(person)



// // Object with different Data types with nested objects 
// const user={
//     name : "Nishan",
//     age: 27,
//     isAdmin: true,
//     skills: ["js","react","node"],
//     address:{
//         city: "Ktm",
//         country:"Nepal"
//     }
// }
// console.log(typeof(user.isAdmin))
// console.log(user.skills[2])


// const employee={
//     name :"Hari",
//     address:{

//     }
// }

// // array of Object

// const users=[
//     {
//         name :"Ram",
//         age: 34
//     },
//     {
//         name:"gita",
//         age:45
//     }
// ]

// console.log(users[1].age)

// // object literal shorthand(ES6)

// when variable name and property name are same 
// const name ="Nishan"
// const age = 34;

// const user={
// //     name,
// //     age
// // }
// console.log(user)
// Object Destructuring 
// const user ={
//     name : "Nishan",
//     age:34
// }

// const {name}= user
// console.log(name)


// for ---of 

// for ----in 

const student = {
    name:"ram",
    age:33,
    city:"ktm"
}

for (let abc in student){
    // console.log(abc, student[abc])
    
}
console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))


const arr = [10,20,30]
for(let key in arr){
    console.log(key, arr[key])
}

// for --- of 
// array 
// string 
// maps, sets


const name = "JS"
for(let char of name){
    console.log(char)
}


const a ={x:1};
const b = {y:2};

const c={...a,...b}
console.log(c)