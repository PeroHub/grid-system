// Challenge 1: User Age

/*
 1. Our business wants to keep track of what age range a user falls into.
 2. If they are 12 or younger log 'child'.
 3. If not a child but the user's age is under 20 log 'teenager'.
 4. If neither log 'adult'.
*/

// const age = 21;

// if (age <= 12){
//     console.log("child");
// }else if (age <=20){
//     console.log("teenager");
// } else {
//     console.log("adult");
// }

// Challenge 2: Practice and or Operators

/*
    1. Look at the examples below and see if you can guess the 
*/

// console.log(10 === 10 && 5 < 4);

// console.log(10 === 10 || 5 < 4);

// console.log((5 >= 5 || 4 > 4) && 3 + 2 === 5);

// Challenge: Customer Upgrade

/*
 1. Our business wants to convince users to upgrade their accounts.
 2. Check a user's account type (switch) of 'shopper', 'super shopper', & 'guest'.
 3. If a user is a 'guest' ask them if they want to upgrade to a 'shopper'.
 4. If a user is a 'shopper' ask if they want to upgrade to a 'super shopper'
 5. If a user is a 'super shopper' tell them they are the best!
 6. If we don't know user's status they are a guest.
*/

// const userType = '';

// switch(userType){
//     case 'guest':
//         console.log("Hi there! would you like to upgrade to a shpper plan?");
//         break;
//     case 'shopper':
//         console.log("Hey there! would you like to upgrade to a super shopper plan?");
//         break;
//     case 'super shopper':
//         console.log("hey there! You plan is the best");
//         break;
//     default:
//         console.log("You are a guest. Please subcribe to your favorite plan");
// }

// let total = 0;

// let numArray = [10, 20, 30, 40, 50, 60, 70, 80];

// for (let i = 0; i < numArray.length; i++) {
//     // console.log(numArray[i])
//     total += numArray[i];
//     console.log(total);
// }

// Challenge: Total Price

/*
 1. Give our customer their total price. 
 2. Add the price of the items together with a sales tax of 8%.
 3. Log the price. 
*/

// const cartItems = [
//     { quantity: 1, price: 5 },
//     { quantity: 3, price: 4 },
//     { quantity: 10, price: 1}
// ];

// let total = 0;
// for(let i = 0; i < cartItems.length; i++) {
//     total += cartItems[i].price * cartItems[i].quantity;

//     console.log(total);
// }

// let count = 0;
// do {
//     count++;
//     if (count < 20){
        
//         break;
//     }
// }
    
    
// while (true)
    
    


// console.log(count);

// Challenge: Analytics

/*
1. Track our user's activity.
2. While the total updates is under 10 updates keep logging the update count.
3. After we reach our threshold say, 'No longer tracking the user'.
4. Change the logic to a do while with it updating just a single time. 
*/

/*
let totalUpdates = 10;

do {
    totalUpdates++;
    console.log(totalUpdates);
}
while (totalUpdates < 10)


console.log("no longer tracking user activaty");

// console.log(totalUpdates);
*/

// function add(num1, num2) {
//     return num1 + num2 + 5;
// }

// console.log(add(5, 5));

function getUserCredentials(firstName, lastName, email){
    let clientDetails = `FullName: ${firstName} ${lastName} \nEmail: ${email}`;
    // return "Fullname:" + firstName + " " + lastName + "\n" + + " " + email;
    return clientDetails;
}


names = (getUserCredentials("Peter", "Silas", "peterime600@gmail.com"));

// console.log(names);

function getPreTaxTotal(cartItems){
    let total = 0;
    for(cartItem of cartItems) {
        total += cartItem.price * cartItem.quantity;
        
    }

    return total;
    
}

const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
]
    

// console.log(getPreTaxTotal(cartItems));

// console.log(getPreTaxTotal(1, 5));
// console.log(getPreTaxTotal(1, 5));

function preTaxTotal(tax){
    return tax;
}

const tax = getPreTaxTotal(cartItems)
console.log(tax * 1.08);

