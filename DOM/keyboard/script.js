// let btn =document.querySelector("button")

// btn.addEventListener("dblclick", function(event){
// console.log(event)
// })

// let inp = document.querySelector("input")


// inp.addEventListener("keyup", function(e){
//     console.log("Key=",e.key)
//     console.log("Code=",e.code)
// })


// let form = document.querySelector("form")
// form.addEventListener("submit",function(e){
//     e.preventDefault()

//     let inp = form.elements;
//     console.log("key=",e.key)
//       // let inp = document.querySelector(".inp")
//     // let pass =document.querySelector(".pass")
//     console.log(inp.username.value)
//     console.log(inp.password.value)
// })

let input = document.querySelector("input")
// form.addEventListener("change", function(event){
// console.log("Input Changed")

// console.log("Final Value=", event.target.value)
// })


input.addEventListener("input", function(event){
    console.log("Typing:", event.target.value)
})