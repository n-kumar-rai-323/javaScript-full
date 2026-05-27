// Login Authe 
// 1 retry attempts
// 2 condition checking 
// 3 loops
// 4. user authentication logic

let correctUsername = "admin"
let correctPassword = "1234"
let attempts =3;

while(attempts > 0){
    let username = prompt("Enter Username: ");
    let password = prompt("Enter Password: ");
    if(username === correctUsername && password === correctPassword){
        alert("Login Successful");
        break;
    }else{
        attempts --;
        alert("Invalid Credentials");
        alert("Remaining Attempts: " + attempts)
    
    }
}
if (attempts === 0){
    alert("Account Blocked");
}