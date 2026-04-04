let add_field = document.getElementsByClassName('classes-to-add')[0]
let remove_field = document.getElementsByClassName('classes-to-remove')[1]
let targetDiv = document.querySelector(".classes-list div");
let mySpan = document.createElement("span");

targetDiv.appendChild(mySpan)
document.addEventListener('click', function (e) {
  if (!add_field.contains(e.target) && add_field.value.trim() !== "") {

    let arr_name = add_field.value.trim().toLowerCase().split(' ').sort();

    for (let i = 0; i < arr_name.length; i++) {

      // check before adding
      if (!targetDiv.textContent.includes(arr_name[i])) {

        let mySpan = document.createElement("span");
        mySpan.textContent = arr_name[i];
        targetDiv.appendChild(mySpan);

      }

    }

    // SORTING
    let spans = Array.from(targetDiv.children);

    spans.sort((a, b) =>
      a.textContent.localeCompare(b.textContent)
    );

    targetDiv.innerHTML = "";

    spans.forEach(span => targetDiv.appendChild(span));


    add_field.value = "";

  }
});


document.addEventListener('click', function (e) {
  if (!remove_field.contains(e.target) && remove_field.value.trim() !== "") {

    let arr_remove = remove_field.value.trim().toLowerCase().split(' ');

    for (let i = 0; i < arr_remove.length; i++) {


      let spans = Array.from(targetDiv.children);

      spans.forEach(span => {
        if (span.textContent === arr_remove[i]) {
          targetDiv.removeChild(span);
        }
      });

    }


    remove_field.value = "";
  }
});