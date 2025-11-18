let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// // Method 1
// myFriends.pop()
// console.log(myFriends)
// Method 2
// myFriends.splice(num)
// console.log(myFriends)

// Method 3
// console.log(myFriends.slice(0,num))  // zero is a number not accrat solution 

//========================
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift()
friends.pop()
console.log(friends)

//================================
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// // Write One Single Line Of Code
finalArr = arrTwo.reverse().concat(arrOne.reverse());

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//=================================
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words[website.length][website.length-website.length].slice(website.length).toUpperCase()); // ZERO
// ==============================
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// 1.include
if (haystack.includes(needle)){
    console.log("Found")
}

//2
if (haystack.lastIndexOf(needle) !== -1) {
    console.log("Found");
} else {
    console.log("Not Found");
}

// 3
if (haystack.find(el => el === needle)) { 
    console.log("Found"); // Prints "Found" if the element exists
} else {
    console.log("Not Found");
}

/* 🔹 Analysis of el => el === needle

el           → each element of the array during iteration
=>           → means "return this expression" (arrow function shorthand)
el === needle → the condition itself: checks if the current element equals needle

In plain English:
"Take each element from the array, and return the element if it equals needle."
*/


//==============================
