// 1. switch menu 
// 2. bill Calculation 
// 1. select food item 
// 2. enter quantity
// 3. calclulate total bill
// 4. Show order summary

let choice = Number(prompt("FOOD MENU\n" +
    "1. MO:MO  - Rs.500\n" +
    "2. Pizza  - Rs.500\n" +
    "3. Burger - Rs.250\n" +
    "4. Coke - Rs.1000\n\n" +
    "Enter Your Choice: "))
let quantity = Number(prompt("Enter quantity: "))

let total = 0
let itemName = ""

switch (choice) {
    case 1:
        itemName = "Pizza";
        total = 500 * quantity;
        break
    case 2:
        itemName = "Burger";
        total = 250 * quantity;
        break;
    case 3:
        itemName = "MO:MO";
        total = 500 * quantity
        break
    case 4:
        itemName = "Coke";
        total = 1000 * quantity
    default:
        alert("Invalid Choice");
}

if (total > 0) {
    alert("Item: " + itemName + "\n" +
        "Quantity: " + quantity + "\n" +
        "Total Bill: Rs. " + total);

}