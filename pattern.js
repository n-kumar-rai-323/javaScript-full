let char = a;
for(let i =1; i<=5; i++){
   let row = ""
   for(let j=1;j<=i;j++){
        
        row +=String.fromCharCode(char);
       
        char++;
      
   }
   console.log(row)
}

// A 
// B C 
// D E F 
// G H I J 
// K L M N O

