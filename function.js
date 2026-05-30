function greet(name){
    console.log("Hello" + name)
}

greet("Nishan")
function greet(name="Guest"){
    console.log("Hello" + name)
}

greet()
// 1.name function 
function add(a,b){
    return a + b;
}
let result = add(45,66)
console.log(add(3,4))


// 2. Arrow Function  =>
const square = n => n*n;
console.log(square(4))