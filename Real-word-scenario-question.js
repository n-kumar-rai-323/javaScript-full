let balance = 5000;
let choice;

do {
    choice = Number(prompt(
        "ATM MENU\n" +
        "1. Check Balance\n" +
        "2. Deposit Money\n" +
        "3. Withdraw Money\n" +
        "4. Exit\n\n" +
        "Enter your choice:"
    ));
    switch (choice) {
        case 1:
            alert("Current Balance: Rs. " + balance);
            break;
        case 2:
            let deposit = Number(prompt("Enter deposit amount: "));

            if (deposit > 0) {
                balance += deposit;
                alert("Deposit Successful ");
            } else {
                alert("Invalid Amount")
            }
            break;
        case 3:
            let withdraw = Number(prompt("Enter withdraw amount:"));
            if (withdraw <= balance) {
                balance -= withdraw
                alert("Withdrawal Successful");
            } else {
                alert("insufficient Balance ");
            }
            break;
        case 4:
            alert("Thank You for Using ATM ");
            break;
        default :
        alert("Invalid Choice");
    }

} while (choice !== 4);

