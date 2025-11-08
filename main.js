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
// لأن كلمة "web" موجودة عند index 6،
// فلما أقول له ابدأ من 8 → الكلمة هتكون قبل نقطة البداية، وبالتالي مش هيلقيها.

// console.log(a.startsWith("E"));

// =====================================================================================>
    /*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

// let a = "Elzero Web School";

// // Include This Method In Your Solution [slice, charAt]
// console.log(); // Zero

// // 8 H
// console.log(); // HHHHHHHH

// // Return Array
// console.log(); // ["Elzero"]

// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(); // Elzero School

// // Solution Must Be Dynamic Because String May Changes
// console.log(); // eLZERO WEB SCHOOl


//==================================================>

    // console.log(10 == "10")
    // console.log(100 != "100")
    // console.log(10 == "200")
    // console.log(10 === "200") // compare value and type

    // console.log(10 >= 10)

    // console.log("Osama" === "Mohamed") // false
    // console.log("Osama" !== "Mohamed") // true


    /**
     * Logical Operators
     * ! not
     * && And
     * || ork
     */

    // =========================================>

    /*
    Conditional (Ternary) Operator
    */

//     let theName = "Mona";
//     let theGender = "Female";
//     let theAge = 30;

//     if (theGender === "Male") {
//     console.log("Mr");
//     } else {
//     console.log("Mrs");
//     }

// // Condition ? If True : If False 

// // theGender == "Male" ? console.log("Mr") : console.log("Mrs");

// let result = theGender === "Male" ? "Mr" : "Mrs";
// document.write(result);

// console.log(theGender === "Male" ? "Mr" : "Mrs");

// console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"}`);

// theAge<20?console.log(20):theAge > 20 
// && theAge < 60 ? console.log("20 To 60") 
// :theAge>60 ? console.log("Larger Than 60")
// :console.log("Unknown");

//==============================================================>

// console.log(Boolean)
// let price ="";
// console.log(`The Price Is ${price || 200}`);

//==============================
/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

// let day = 1;

// switch (day){
//     case 0:
//         console.log("Saturday");
//         break;
//     case 1:
//         console.log("Sunday");
      
//     case 2 :
//         console.log("Monday");
//         break;
//     default:
//         console.log("Unkown day")
//         break; // if u put default in first place don't forget the break
// }
   

// ===============================>/

let job = "Developer";
let salary = 0;

switch(job){
    case "Manager":
        salary = 8000
        console.log(`your salary is ${salary}`)

        break;
    case "IT":
    case "Support":
        salary = 6000
        console.log(`your salary is ${salary}`)
        break;
    case "Developer":
    case "Designer":
        salary = 7000
        console.log(`your salary is ${salary}`)
        break;
    default:
        salary= 4000
    
}

// ===============================>/

