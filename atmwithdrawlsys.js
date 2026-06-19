let amount = 25000;
let pin=2580;
let otp=2213;
if (amount<=5000){
    console.log(`Rs.${amount} withdrawn successfully.`)
} else if(amount>5000 && amount <=20000){
    console.log("Pin required for transaction.")
    if (required_pin==pin){
        pin=2580;
        console.log(`Rs.${amount} withdrawn successfully.`)
    } else{
        console.log("Transaction Failed.")
    }
}else if(amount>20000 && amount <= 50000){
    console.log("Requires OTP verification.!!!")
    required_otp=2213;
    if (required_otp==otp){
        console.log(`Rs.${amount} withdrawn successfully.`)
    } else{
        console.log("Transaction Failed.")
    }
}else{
    console.log("Transaction is rejected.!!!")
}