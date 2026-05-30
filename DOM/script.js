// let btn = document.querySelector(".cl")
// let btns= document.querySelectorAll("button")
// let hi= document.querySelector("h1")
// let btn = document.getElementById("btns")
// let btn = document.getElementsByClassName("cl")

// btn.onclick=function(){
//    alert("Button was click")
// }

// function sayHello(){
//     alert("Hello")
// }
// for(btn of btns){
//     btn.onclick=sayHello
// }


// // onmouseenter
// let btns = document.querySelectorAll("button")

// function sayHello(){
//     alert("Say Hello")
// }

// function sayName(){
//     alert("Say Name ")
// }

// // for (btn of btns){
// //     btn.onclick=sayHello;
// //     btn.onclick=sayName;
// // }

// for(btn of btns){
//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName)
// }




let btn = document.querySelector("button")

btn.addEventListener("click", function(){
   let text = document.querySelector("h3");
   let randomColor = getRandomColor()
   text.innerText = randomColor


   let bod = document.querySelector("body");
   bod.style.backgroundColor=randomColor
})


function getRandomColor(){
    let red = Math.floor(Math.random()* 255)
    let green = Math.floor(Math.random()* 255)
    let blue = Math.floor(Math.random() * 255)
    let color = `rgb(${red}, ${green}, ${blue})`
    return color
}