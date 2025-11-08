// 2
window.onload = function () {
    let el = document.getElementById("el");

    el.style.color = "blue";
    el.style.fontWeight = "bold";
    el.style.fontSize = "80px";
    el.style.fontFamily = "Arial";
};

// another sol

window.onload = function () {
    let el = document.getElementById("el");
    el.style.color = "blue";
    el.style.fontWeight = "bold";
    el.style.fontSize = "80px";
    el.style.fontFamily = "Arial";
};


// 3

console.log(
  "%cElzero %cWeb %cSchool",
  "color:red;font-size:40px",
  "color:green;font-size:40px;font-weight:bold",
  "color:white;font-size:40px;background:blue;"
);


4
console.group("Group 1")
console.log("Message One")
console.log("Message Two")
console.group("Cild Message")
console.log("One ")
console.log("Two")
console.group("Grand Child Group")
console.log("Message One")
console.log("Message Two")
console.groupEnd()
console.groupEnd()
console.groupEnd()
console.group("Group 2")
console.log("Message One")
console.log("Message Two")
console.groupEnd()


// 5 
let Names = [
    {"value":"Elzero"},
    {"value":"Mona"},
    {"value":"Gehad"},
    {"value":"Aya"},
    {"value":"Hatem"},

]
console.table(Names);





// 6 
// console.log("Iam In Console");
// document.write("Iam In Page");   // comment the code it'll stop execution


