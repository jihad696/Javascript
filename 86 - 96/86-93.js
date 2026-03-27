// document.getElementById("elzero")
// document.getElementsByClassName("element")[0]
// document.getElementsByTagName("div")[0]
// document.getElementsByName("js")
// document.querySelector(".element")
// document.querySelector("#elzero")
// document.querySelectorAll("div")
// document.querySelector("[name = js]")
// document.querySelectorAll("#elzero")[0];
// document.querySelectorAll(".element")[0];
// document.querySelectorAll("div")[0];
// document.querySelectorAll('[name="js"]')[0];
// document.body.firstElementChild;
// document.body.children[0]; 
// document.all.elzero; 


//================================================

// let images = document.querySelectorAll("img")

// document.body.style.backgroundColor = "lightblue";

// for(let i = 0; i < images.length ; i++)
// {
//     images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     images[i].alt = "Elzero Logo";
// }

//==============================================================
//   const input = document.querySelector('input[name="dollar"]');
//   const resultDiv = document.querySelector('.result');
//   const rate = 15.6;

// // input.addEventListener("input", function () {
// //   console.log(input.value); // shows the current value
  
// // });

//   input.addEventListener("input", function () {
//     let dollarValue = parseFloat(input.value) || 0;
//     let poundValue = (dollarValue * rate).toFixed(2); // max 2 decimals
//     resultDiv.textContent = `${dollarValue} USD Dollar = ${poundValue} Egyptian Pound`;
//   });


  //=============================================================

// const divOne = document.querySelector(".one");
// divOne.title = "one";
// divOne.textContent = "One";

// const divTwo = document.querySelector(".two");
// divTwo.setAttribute("title","two");
// divTwo.textContent = "Two 2"

// console.log(divTwo)


//================================================================
let images_five = document.getElementsByTagName("img")

// console.log(images_five.length)

for(let i = 0;i < images_five.length ; i++){
  if(images_five[i].hasAttribute("alt"))
  {
    images_five[i].alt = "Old";
    console.log(images_five[i])
  }
  else{
    images_five[i].setAttribute("alt","Elzero New")
  }
}

console.log(images_five)

//====================================================================
let num = document.querySelector("input[type=number]");
let text = document.querySelector("input[type=text]");
let DivResult = document.querySelector(".results");
let selection = document.querySelector("[name=type]");
let form = document.querySelector("form");

function updateDivs() {
  DivResult.innerHTML = ""; 
  let num_value = parseInt(num.value);

  for (let i = 1; i <= num_value; i++) {
    let child;

    if (selection.value === "Div") {
      child = document.createElement("div");
      child.innerHTML = text.value + " div";
    } else {
      child = document.createElement("section");
      child.innerHTML = text.value + "sec";
    }

    // add required attributes
    child.className = "box";
    child.title = "Element";
    child.id = `id-${i}`;

    DivResult.appendChild(child);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  updateDivs();
});




