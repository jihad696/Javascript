let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero



let res = mix
  .map(el => (typeof el === "number" ? "" : el))   // replace numbers with ""
  .reduce((acc, el) => acc + el);                  // concatenate letters
console.log(res); // "Elzero"



// ==========================================
let myString = "EElllzzzzzzzeroo";

let arr = myString.split("");


let uniqueArr = arr.filter((char, index) => {
  return arr.indexOf(char) === index;
});


// 1. char E(ind of E = 0) ===  i =0   ys
// 2. char E(ind of E = 0)   === 1         no skip  
// index 0f l = 1    index 1        ys
// index 0f l = 1    index 1        ys


// // Step 3: Join back into a string
let result = uniqueArr.join("");

console.log(result); // "Elzero"

// ==========================================

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result3 = myArray.reduce((acc, curr) => {

  if (Array.isArray(curr)) {

    return acc + curr.join("");
  } else {
    return acc + curr;
  }
}, ""); 

console.log(result); // "Elzero"

// ==========================================


let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result4 = numsAndStrings
  .filter(el => typeof el === "number")
  .map(num => -num);

console.log(result4); // [-1, -10, 10, 20, -5, -3]


//=============================================
let nums = [2, 12, 11, 5, 10, 1, 99];

let result5 = nums.reduce((acc, curr) => {
  if (curr % 2 !== 0) {
    return acc + curr; 
  } else {
    return acc * curr; 
  }
}, 1);

console.log(result); // 500



