// function sayHello(theName, theGender) {
//   // Your Code Here

//       if(theGender === "Female"){
//         console.log(`Hello Miss ${theName}`)
//     }else if (theGender === "Male"){
//         console.log(`Hello Mrs ${theName}`)
//     }else{
//         console.log(`Hello ${theName}`)
//     }
// }

// // Needed Output
// // sayHello("Osama", "Male"); // "Hello Mr Osama"
// // sayHello("Eman", "Female"); // "Hello Miss Eman"
// // sayHello("Sameh"); // "Hello Sameh"


// //===============
// function calculate(firstNum, secondNum, operation) {
        
//     // Your Code Here
//     if (!firstNum || !secondNum) {
//         console.log("Second Number Not Found");
//     }
//     else if (!operation){
//         console.log(firstNum + secondNum);;
//     }
//      else if (operation === "add") {
//         console.log(firstNum + secondNum);
//     } else if (operation === "subtract") {
//         console.log(firstNum - secondNum);
//     } else if (operation === "multiply") {
//         console.log(firstNum * secondNum);
//     }
// }
    


// // calculate(20); // Second Number Not Found
// // calculate(20, 30); // 50
// // calculate(20, 30, 'add'); // 50
// // calculate(20, 30, 'subtract'); // -10
// // calculate(20, 30, 'multiply'); // 600

// //===============

// function ageInTime(theAge) {
//   if (theAge > 10 && theAge < 100) {

//     let months = theAge * 12;
//     let weeks = theAge * 52;
//     let days = theAge * 365.25;
//     let hours = days * 24;
//     let minutes = hours * 60;
//     let seconds = minutes * 60;

//     console.log(`Your age in months: ${months}`);
//     console.log(`Your age in weeks: ${weeks}`);
//     console.log(`Your age in days: ${days}`);
//     console.log(`Your age in hours: ${hours}`);
//     console.log(`Your age in minutes: ${minutes}`);
//     console.log(`Your age in seconds: ${seconds}`);

//   } else {
//     console.log("Age Out Of Range");
//   }
// }


// // ageInTime(110)
// // ageInTime(38)

// //=============================
// function checkStatus(a, b, c) {
//   let arr = [a, b, c];
//   let name, age, status;

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//       name = arr[i];
//     } else if (typeof arr[i] === "number") {
//       age = arr[i];
//     } else if (typeof arr[i] === "boolean") {
//       status = arr[i];
//     }
//   }

//   console.log(`Hello  ${name} Your Age Is ${age} , ${status? "You Are Available For Hire" : "You Are Not Available For Hire"} `);
// }




// // Needed Output
// // checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// // checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// // checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// // checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// //=============================


// // 05 // 
// function createSelectBox(startYear, endYear) {

//   // Your Code Here
  
//   document.write(`<select>`)
//   for(let i = startYear ; i <= endYear ; i++ )
//   {
//     document.write(`
  
//     <option value="${i}">${i}</option>
  
// `);

//   }

//   document.write(`</select>`)
// }



// createSelectBox(2000, 2021);
// createSelectBox(1999, 2026);


// ===============================

// 6 //

function multiply(...nums){

  let res = 1 ;

  for (let i = 0 ; i <nums.length ; i++){

      if (typeof nums[i] === "number"){
      
        res = res * parseInt(nums[i])
        


      } else if(typeof nums[i] === "string") {

        continue;

      }

  };
    console.log(res)

  };

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000














  