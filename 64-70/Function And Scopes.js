// function getDetails(zName, zAge, zCountry) {

//   function namePattern(zName) {
//     // Write Your Code Here
//         let name  = zName.split(" ")[0] + ` ` + (zName.split(" ")[1][0]) + `.`
//         return name 

//   }
//   function ageWithMessage(zAge) {

//          let age = `${parseInt(zAge)} `
//           return age

//   }
//   function countryTwoLetters(zCountry) {
        
//        return zCountry.slice(0,2).toUpperCase()
//   };
//   function fullDetails() {
//     // Write Your Code Here
//     return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`

//   }
//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is The Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // // // Hello Ahmed A., Your Age Is 32, You Live In SY

// ============ =============== ============= =========== ========== ========== =======

// 2  // 

function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

let urlclearr = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlclearr("https", "elzero", "org"));
// ============ =============== ============= =========== ========== ========== =======

function itsMe() {
  return `Iam A Normal Function`;
}

console.log(itsMe()); // Iam A Normal Function

let ArrowFunc = () => `Iam An Arrow Function`;
console.log(ArrowFunc());

// ============ =============== ============= =========== ========== ========== =======

// 3 // 

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


const checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `I am Not Available`;

console.log(checker("Osama")("Available")(4000));
console.log(checker("Ahmed")("Not Available")());

// ============ =============== ============= =========== ========== ========== =======
// 4 //

function specialMix(...data) {
  let total = 0;
  let foundNumber = false;

  for (let item of data) {
    if (typeof item === "number") {
      total += item;
      foundNumber = true;
    } else if (!isNaN(parseInt(item))) {
      total += parseInt(item);
      foundNumber = true;
    }
  }

  return foundNumber ? total : "All Is Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings










