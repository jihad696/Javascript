// let start = 10;
// let end = 100;
// let exclude = 40;

// for(let i = start; i <= end; i += start) {
//     if(i === exclude) continue; 
//     console.log(i);
// }

//==============================================

// Assign 2 

// let start = 10 ;
// let end = 0;
// let stop= 3;

// for (let i = start; i > end ; i--){
//     if(i < start ){
//         console.log(`0${i}`)

//     }
//     else
//     {
//         console.log(`${i}`)

//     }

//     if(i === stop) break;
// }


//==============================================

// let start = 1;
// let end = 6;
// let breaker = 2;

// for(let i = start ; i <= end; i++)
// {
// document.write(i + "<br>"); 
// document.write(`<pre>-- ${breaker}\n-- ${end - breaker}</pre>`);
// }

//=================================================

// let index = 10;
// let jump = 2;

// for (;;) {
//   // Write Your Code Here
//   console.log(index)
//   index -= jump
//   if (index === jump) break;

// }

// Output
// 10
// 8
// 6
// 4

//=================================================

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Samah","Hady","Amr"];
// let letter = "a";


// console.log(letter.length - letter.length)
// let counter = letter.length
// for (let i = letter.length - letter.length; i< friends.length; i++){

//   if(friends[i][letter.length - letter.length] === letter.toUpperCase())     
//     continue ;
//   console.log(`\" ${counter++ } =>  ${friends[i]} \" `)

// ;
// }

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Samah"
//=================================================

// let start = 0;
// let swappedName = "elZerO";
// let result = ""; 

// for (let i = start; i < swappedName.length; i++) {
//   if (swappedName[i] === swappedName[i].toLowerCase()) {
//     result += swappedName[i].toUpperCase();
//   } else if (swappedName[i] === swappedName[i].toUpperCase()) {
//     result += swappedName[i].toLowerCase();
//   }
// }

// console.log(result); // prints all letters in one line


// another solution 

// let swappedName = "elZerO";

// console.log([...swappedName].map(c => c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()).join(''));


// Output
// "ELzERo"

//=================================================

// let start = 0;

// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (i = start; i < mix.length ; i++){
 
//   if(typeof mix[i] === "string" ) continue ;
//   if(mix[i] === mix[start]) continue ;

//   console.log(mix[i]) 
// }


// we can make the solution more dynamic 
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

let firstNumberSkipped = false;

for (let i = start; i < mix.length; i++) {

  if (typeof mix[i] === "string") continue;

  if (!firstNumberSkipped) {
    firstNumberSkipped = true;
    continue;
  }

  console.log(mix[i]);
}





