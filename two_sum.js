// // Given an array of integers nums and integers target, return indices of the two numbers such that they add up to target.
// // example 
// num = [2,7,11,15]
// target = 9
// new_arr=[]
// for(let i = 1;i<=num.length;i++){
//     let a = num[i-1]
//     let b = num[i]
//     let sum = a +b;
//     if (sum == target){
//         new_arr.push(a)
// //         new_arr.push(a)

        
// //     }
// // }

// // console.log(new_arr)
// // // output :[0,1]



// // reverse a string 
// // input : "hello"
// // Output : "olleh"

// let str = "hello";
// let rem = "";
// for (let i = str.length; i >= 1;i--){
    
//     rem = rem + str[i-1];

// }
// console.log(rem)



function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"))


// count characters 
let input = "javascript"


function count(text){
    return text.length;
}

console.log(count(input))


// convert to uppercase 
let inp = "hello"
let rem = ""
for (let char of inp){
    rem = rem + char.toUpperCase()
}

console.log(rem)

function toUpper(str){
    return str.toUpperCase();
}

console.log(toUpper("hello"))


// check Vowel 
// input : a
// output : true 

function check(char){
    char = char.toUpperCase()
    if (char === "A" || char === "E" || char ==="I" || char==="O" || char=== "U"){
        return true;

    }else{
        return false;
    }
}


let n = "o"
console.log(check(n))




function isVowel(ch){
    return "aeiouAEIOU".includes(ch);
}
console.log(isVowel("a"))


// // count Vowels in string 
// input : "javascript"
// output: 3

function countvowel(string){
    count=0
    for (char of string){
        if ("aeiouAEIOU".includes(char)){
            count+=1
        }
    }
   return count 
}


console.log(countvowel("javascript"))

// Check Palindrome 
// input : "madam"
// output: ture 

function palin(str){
   let  newstring = str.split("").reverse().join("")
   return str === newstring

    // if (newstring === string){
    //     return true;
    // }else{
    //     return false;
    // }
}

console.log(palin("ra"))