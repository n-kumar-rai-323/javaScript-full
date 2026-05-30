// 1. Find Maximum Number 
let nums = [12,45,7,89,34]

// let max = nums[0]

// for(let i=1;i<=nums.length;i++){
//     if (nums[i]>max){
//         max = nums[i]
//     }
// }

// console.log("The maxmiium number is",max)


// console.log(Math.max(...nums))


// reverse an arry
// new_arr=[] 
// for (let i = nums.length-1;i>=0;i--){
//     new_arr.push(nums[i])
// }

// console.log(new_arr)

// count even numbmbers 
let count = 0;
for(i=0;i<=nums.length;i++){
    if (nums[i] % 2 === 0){
        count += 1 
    }
    
}

console.log("The number of even number is",count)
