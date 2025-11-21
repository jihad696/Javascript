// // how to study javascript
// // 1. if there is a problem in your life throw it aWay and study well
// // 2. always search 
// // 3. Ask How To Fix Not Fix
// // 4. if there is a problem you cannot solve know what is concepts should you learn to solve it
// // 5. Start Idea
// // 6. js case-sensitive
// //===================================================
// //Console Methids
// // log
// // error
// // table 

// // web API

// // styling coursing 
// // Directive %c

// //==============================
// //ecma : put standards for developers data
// // ecmascript6 

// //===============================================

// // console.log(typeof "Gehad Baleegh")
// // console.log(typeof 2000)
// // loosely type not necessary to write its type
// //==================================
// // var user = "gehad",
// // age = 37;
// // console.log(user)
// // console.log(age)
// // hi.innerHTML= "Option"; 
// // ================================================

// /*

// var 
//     -Redeclare(yes)
//     - Access Before Declare
//     - Variable Scope Drama [Added To Window] ()
//     - Block or Function Scope


// Let 
//     -Redeclare(no => error)
//     - Access Before Declare
//     - Variable Scope Drama [Added To Window] ()
//     - Block or Function Scope

// const
//     -Redeclare(no => error)
//     - Access Before Declare
//     - Variable Scope Drama [Added To Window] ()
//     - Block or Function Scope
// */

// //===================================

// /**
//  * String Syntax + characher Escape Sequence
//  * \ Escape + Line Continue
//  * \n
//  */

// // console.log('hello"hi"')
// // console.log('hello"hi"')
// // console.log('hello\'hi\'')
// // console.log('\\hello\'hi\'')
// // console.log('Elzero \
// //     \ web\
// //     hiiiiiii')

// //     console.log("Hello \n Javascript")

// //=================
// ////////////////// Template Literals (Template) //////////////
// // let a = "We Love";
// // let b = "Python ";
// // let c = "And ";
// // let d = "Programming ";
// // document.write(a + b + c + d)
// // document.write(`${a} ${b} ${c} ${d}`)

// // let markup = `
// // <div class = "card">
// //    <div class = "child">
// //       <h2>Title</h2>
// //       <p>Paragraph</p>
// //    </div>
// // </div>
// // `;

// // document.write(markup)

// // let title = "Helloo"
// // let desc = "Hello from the other land"

// // let markupp = `
// // <div class = "card">
// //    <div class = "child">
// //       <h2>${title}</h2>
// //       <p>${desc}</p>
// //    </div>
// // </div>
// // `;

// // document.write(markupp)

// //====================================================
// // let TheTitle = "Elzero",TheDesc = "Elzero Web School",
// // Date = "25/10";

// // // // ALL In One Statement

// // let mymarkup = `
// // <div>
// //     <h3>${TheTitle}</h3>
// //     <p>${TheDesc}</p>
// //     <span>${Date}</span>

// // </div>

// // ` 

// //  document.write(mymarkup.repeat(4));
// //=======================================================

// /*
// Arithmetic Operators
// +       -         /       *         **      %
// ++  n++ , ++n
// --  n--,--n


// */
// // console.log(typeof(NaN))
// // console.log(10 + 20);
// // console.log(10 + "Osama");
// // console.log(10-20)

// //=========================================================
// /*
//   - + Unary Plus [Return Number If Its Not Number]
//   - - Unary Negation [Return Number If Its Not Number + Negates It]
//   Tests
//   - Normal Number
//   - String Number
//   - String Negative Number
//   - String Text
//   - Float
//   - Hexadecimal Numeral System => 0xFF
//   - null
//   - false
//   - true
// */

// // console.log(+100);
// // console.log(+"100");
// // console.log(+"-100");
// // console.log(+"Osama");
// // console.log(+"15.5");
// // console.log(+0xff);
// // console.log(+null);
// // console.log(+false);
// // console.log(+true);

// // console.log(-100);
// // console.log(-"100");
// // console.log(-"-100");
// // console.log(-"Osama");
// // console.log(-"15.5");
// // console.log(-0xff);
// // console.log(-null);
// // console.log(-false);
// // console.log(-true);

// // console.log(Number("100"));

// //=========================================================

// /*
//   Type Coercion (Type Casting)
//   - +
//   - -
//   - "" - 2
//   - false - true
// */

// let a = "100";
// let b = 20;
// let c = true;

// console.log(+a + b + c);


// //=========================================
// // assignment operator

// var a =10;
// a=a+20;
// a=a+70;
// a+=2;
// a-=20;
// a/=6;

// //================================================
// /*
//   Challenge 1
// */

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// /*
//   [++a] [+]
//   [++a]
//   - Value:
//   - Explain:
//   [+]
//   - Explain:
// */

// /*
//   Challenge 2
// */

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// // Only Use Variables Value
// // Do Not Use Variable Twice

// console.log(); // 2000
// console.log(); // 173
// //=======================================
// /*
//   Number
//   - Double Precision
//   - Syntactic Sugar "_"
//   - e
//   - **
//   - With Decimal
//   - Number + BigInt
//   - Number Min Value
//   - Number Max Value
// */

// console.log(1000000);
// console.log(1_000_000);
// console.log(1e6);
// console.log(10 ** 6);
// console.log(10 * 10 * 10 * 10 * 10 * 10);
// console.log(1000000.0);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE + 23434343434);
// //==========================================>

//     /*
//     Number Method  

//     // - Two dots to call a method
//     //  - toString() ==> return string
//     toFixed() ==> return string
//     ParseInt() ==> return int "100 Osama" --> 100
//     ParseFloat ==>  return float "100.6 Osama" --> 100.6
//     isInteger()[ES6] ==> Does this number is the type integer --> true or false
//     isNaN()  ===> NaN(not a number) does this not a number? yes
//     */
//    console.log((100).toString());
// console.log(100.10.toString());

// console.log(100.554555.toFixed(2));

// console.log(Number("100 Osama"));
// console.log(+"100 Osama");
// console.log(parseInt("100 Osama"));
// console.log(parseInt("Osama 100 Osama"));
// console.log(parseInt("100.500 Osama"));
// console.log(parseFloat("100.500 Osama"));

// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.500));
// console.log(Number.isInteger(100));

// console.log(Number.isNaN("Osama" / 20));
// // =====================================================
/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/
// console.log(Math.round(99.2));
// console.log(Math.round(99.5));
// console.log(Math.ceil(99.2))
// console.log(Math.floor(99.9))
// console.log(Math.min(10,20,100,-100,90));
// console.log(Math.min(10,20,100,-100,90));
//================================================>
    // #027
//chatAt(1) what element position 1
// //chain method
// var theName = "Hello from the other landd"
// console.log(theName.trim().charAt(2).toUpperCase());
//================================================>
/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0) // Mand --> mandatory
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

// let a = "Elzero web school";
// console.log(a.indexOf("web")) //lazem ta5od value btdwr 3la klmt web ya3ni (looking for index of "web" word)
// console.log(a.indexOf("web",8)) 
// console.log(a.indexOf("web",8))
// console.log(a.indexOf("web"))

// slicing 

// console.log(a.slice(0));
// console.log(a.slice(2,3));

// repeat()
// console.log(a.split(" ",2)) // return array

//=====================================================>
// #029
// let a = "Elzero web School";

// console.log(a.substring(2,6));
// console.log(a.substring(6,2));
// console.log(a.substring(-10,6))// 0 - 6
// console.log(a.substring(a.length - 5,a.length - 3));

// console.log(a.substr(0,6));
// console.log(a.substr(17));
// console.log(a.substr(-3))// 0 - 6
// console.log(a.substr(- 5,- 3)); //substr(Start [Mand], Characters To Extract length)ابدأ من المكان ده وطلعلي طول معيّن

// console.log(a.includes("web"));
// console.log(a.includes("web",8));
// ليه الثانية false؟
// // لأن كلمة "web" موجودة عند index 6،
// // فلما أقول له ابدأ من 8 → الكلمة هتكون قبل نقطة البداية، وبالتالي مش هيلقيها.

// // console.log(a.startsWith("E"));

// // =====================================================================================>
//     /*
//   String Challenge
//   All Solutions Must Be In One Chain
//   You Can Use Concatenate
// */

// // let a = "Elzero Web School";

// // // Include This Method In Your Solution [slice, charAt]
// // console.log(); // Zero

// // // 8 H
// // console.log(); // HHHHHHHH

// // // Return Array
// // console.log(); // ["Elzero"]

// // // Use Only "substr" Method + Template Literals In Your Solution
// // console.log(); // Elzero School

// // // Solution Must Be Dynamic Because String May Changes
// // console.log(); // eLZERO WEB SCHOOl


// //==================================================>

//     // console.log(10 == "10")
//     // console.log(100 != "100")
//     // console.log(10 == "200")
//     // console.log(10 === "200") // compare value and type

//     // console.log(10 >= 10)

//     // console.log("Osama" === "Mohamed") // false
//     // console.log("Osama" !== "Mohamed") // true


//     /**
//      * Logical Operators
//      * ! not
//      * && And
//      * || ork
//      */

//     // =========================================>

//     /*
//     Conditional (Ternary) Operator
//     */

// //     let theName = "Mona";
// //     let theGender = "Female";
// //     let theAge = 30;

// //     if (theGender === "Male") {
// //     console.log("Mr");
// //     } else {
// //     console.log("Mrs");
// //     }

// // // Condition ? If True : If False 

// // // theGender == "Male" ? console.log("Mr") : console.log("Mrs");

// // let result = theGender === "Male" ? "Mr" : "Mrs";
// // document.write(result);

// // console.log(theGender === "Male" ? "Mr" : "Mrs");

// // console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"}`);

// // theAge<20?console.log(20):theAge > 20 
// // && theAge < 60 ? console.log("20 To 60") 
// // :theAge>60 ? console.log("Larger Than 60")
// // :console.log("Unknown");

// //==============================================================>

// // console.log(Boolean)
// // let price ="";
// // console.log(`The Price Is ${price || 200}`);

// //==============================
// /*
//   Switch Statement
//   switch(expression) {
//     Case 1:
//       // Code Block
//       break;
//     Case 2:
//       // Code Block
//       break;
//     Default:
//       // Code Block
//   }
//   - Default Ordering
//   - Multiple Match
//   - ===
// */

// // let day = 1;

// // switch (day){
// //     case 0:
// //         console.log("Saturday");
// //         break;
// //     case 1:
// //         console.log("Sunday");
      
// //     case 2 :
// //         console.log("Monday");
// //         break;
// //     default:
// //         console.log("Unkown day")
// //         break; // if u put default in first place don't forget the break
// // }
   

// // ===============================>/

// // let job = "Developer";
// // let salary = 0;

// // switch(job){
// //     case "Manager":
// //         salary = 8000
// //         console.log(`your salary is ${salary}`)

// //         break;
// //     case "IT":
// //     case "Support":
// //         salary = 6000
// //         console.log(`your salary is ${salary}`)
// //         break;
// //     case "Developer":
// //     case "Designer":
// //         salary = 7000
// //         console.log(`your salary is ${salary}`)
// //         break;
// //     default:
// //         salary= 4000
    
// // }

// // ===============================>/
// // let myFriends = ["Heba","Tamer","Amira"];
// // console.log(myFriends.length) // 3 the length is three because the index = length - 1
// // myFriends[myFriends.length] = "Gamal"; // = myFriends[3] -> better dynamic way
// // myFriends[myFriends.length - 1] = "Gamal"; // = myFriends[3] -> better dynamic way  always update the elemnt before the last index

// // console.log(myFriends.length); // 4
// // myFriends[5] = "Hany";
// // console.log(myFriends); // 4
// // console.log(myFriends.length); // 4
// // myFriends.length = 2   // control array length
// // console.log(myFriends) // ["Heba" , "Tamer"]
// // //

// // // .unshift() ===> elements i want to add in start of array
// // // .push() ===> elements i want to add in end of array
// // // .shift() ===> delete the first element of array and return it

// // myFriends.unshift("Ahmed","khaled")
// // console.log(myFriends) // 

// // myFriends.push("Huda")
// // console.log(myFriends) // 

// // myFriends.shift("Khaled")
// // console.log(myFriends) //
// // let first = myFriends.shift("Huda")
// // console.log(first) // return first
// // let pop = myFriends.pop() // remove the last element
// // console.log(pop)


// // let myFriends = ["Heba","Tamer","Amira","Tamer","Amr"];
// // console.log(myFriends.indexOf("Tamer"))
// // console.log(myFriends.indexOf("Tamer",2)) // ==> start searching from the index 2
// // console.log(myFriends.lastIndexOf("Amr")) // search from the last to start but it still use normal index
// // console.log(myFriends.lastIndexOf("Amr",-2)) // search from the last to start but it still use normal index
// // console.log(myFriends.includes("Amr")) //ask if exists or not

// // let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
// // console.log(myFriends);
// // console.log(myFriends.sort().reverse());

// let myFriends = ["Heba","Tamer","Amira","Tamer","Amr"];
// // console.log(myFriends)
// //=============================//
// // slice() => retrun new array
// // .splice(0,) =>(startIndex , delete_count(number Of Elements i want delete),elements you will add in array)
// myFriends.splice(0,0,"Tota","BlaBla"); // add them in index zero won't delete any elements
// console.log(myFriends)

// myFriends.splice(0,2,"Nano","Bob"); // add them in index zero delete two elements add them at strat
// console.log(myFriends)

// //==========================//
// // let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// // let myNewFriends = ["Samar", "Sameh"];
// // let schoolFriends = ["Haytham", "Shady"];

// // let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

// // console.log(allFriends);

// // console.log(allFriends.join());
// // console.log(allFriends.join(""));
// // console.log(allFriends.join(" @ "));
// // console.log(allFriends.join("|"));
// // console.log(allFriends.join("|").toUpperCase());
// if (myFriends.lastIndexOf("Osama") === -1) {
//   console.log("Not Found");
// }

// ================================================
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }


// let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

// let OnlyString = []

// for (let i =0 ; i < myFriends.length ; i++){
//   if (typeof myFriends[i] === "string")
//        OnlyString.push(myFriends[i])
 
// }

// console.log(OnlyString)
// ====================================
// let products = ["Keyboard","Mouse","Pen","Pad","Monitor"];
// let colors = ["Red","Green","Black"];
// let models = [2020,2021]


// for (let i = 0 ; i < products.length; i++)
// {
//   console.log("#".repeat(15))
//   console.log(products[i])
//   console.log("#".repeat(15))
//   console.log("-  Colors : ")
//   for (j = 0 ; j < colors.length ; j++)
//   {
    
//     console.log(`# ${colors[j]}`)
//   }
//     console.log("- Models : ")
//     for (k = 0 ; k < models.length ; k++)
//   {
 
//     console.log(`# ${models[k]}`)
//   }


// }

// =====================================

// let products = ["Keyboard","Mouse","Pen","Pad","Monitor"];
// let colors = ["Red","Green","Black"];
// let models = [2020,2021]

// for (let i = 0; i < products.length ; i++){
//   if (products[i] === "Mouse"){
//     // continue; // Skip "Mouse," don't print it and continue the rest of the code!
//     break; // stop the program execution

//   }
//   console.log(products[i])
// }


// let products = ["Keyboard","Mouse","Pen","Pad","Monitor"];
// let colors = ["Red","Green","Black"];
// let models = [2020,2021]

// mainLoop:
// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);

//   nestedLoop:  // valled Label
//   for (let j = 0; j < colors.length; j++) {
//     console.log(colors[j]);

//     if (colors[j] === "Green") {
//       continue mainLoop;
//     }
//   }
// }


//===========================================

/**
 * Loop for Advanced Example
 */

// let products = ["Keyboard","Mouse","Pen","Pad","Monitor"];
// let i = 0;

// for (;;){
//   console.log(products[i])
//   i += 2
//   if (i === products.length) break;
// }

//================================================

// function generateYears(start, end, exclude) {
//   for (let i = start; i <= end; i++) {
//     if (i === exclude) {
//       continue;
//     }
//     console.log(i);
//   }
// }

// generateYears(2001, 2024, 2005);

// //================================================


// function calc(x,y){
//   return x + y ;
// }


// let result = calc(6,8)
// console.log(result)

//================================================
/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h2>Welcome, ${us}</h2>`);
//   document.write(`<p>Age: ${ag}</p>`);
//   document.write(`<p>Hour Rate: $${rt}</p>`);
//   if (show === "Yes") {
//     if (sk.length > 0) {
//       document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
//     } else {
//       document.write(`<p>Skills: No Skills</p>`);
//     }
//   } else {
//     document.write(`<p>Skills Is Hidden</p>`);
//   }
//   document.write(`</div>`);
// }

// showInfo("Osama", 38, 20, "No", "Html", "CSS");

//=====================================


// Functions 

// // Any 
// let concatName  = function (fName , LName){
//   return `${fName} ${LName}`
// }

// console.log(concatName("Gehad","Baleegh"))

// Arrow

// let print = (num1,num2) => `${num1 + num2}`


// console.log(print(1,8))


/*
  Scope
  - Global And Local Scope
*/

var a = 1;
let b = 2;

function showText() {
  var a = 10;
  let b = 20;
  console.log(`Function - From Local ${a}`);
  console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();