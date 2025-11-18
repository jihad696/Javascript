// /*
//   Products Practice
// */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 3;

// document.write(`<h1>Show ${showCount} Products</h1>`);

// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p>${colors[j]}</p>`);
//   }
//   document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div>`);
// }


// //=============================
// let i = 0
// while (i < products.length){
//     console.log(products[i])
//     i += 1
// }

// ================

// LOOP CHALLENGE

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let ActiveAdmin = []

for (i=0 ; i<myAdmins.length;i++){
    if (myAdmins[i] === "Stop") break;
    ActiveAdmin.push(myAdmins[i])
}
document.write(`<div>We Have ${ActiveAdmin.length} Admins</div>`);
document.write(`<hr>`)

for(let j = 0 ; j < ActiveAdmin.length ; j++){
    document.write(`The Admin For Team ${j+1} Is ${ActiveAdmin[j]} <br>`)
    document.write(`<h3>Team Members: </h3>`)
    num = 1
    for (let e = 0 ; e < myEmployees.length;e++)
    {
        if(ActiveAdmin[j][0] === myEmployees[e][0]){
            document.write(` - ${num} ${myEmployees[e]} <br>`)
            num ++;
        }
    }
    document.write(`<hr>`)
}




 

    

