/* "**************"
main method include in Script file
"****************" 
*/

var inp_as = document.querySelector("#arr_sz");
array_size = inp_as.value;
var inp_gen = document.querySelector("#newArray");
var inp_aspeed = document.querySelector("#speed_input");

var butts_algos = document.querySelectorAll(".algos button");
console.log(butts_algos);

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {
  cont.innerHTML = "";

  for (var i = 0; i < array_size; i++) {
    div_sizes[i] =
      Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style =
      " margin:0% " +
      margin_size +
      "%; background-color:blue; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      div_sizes[i] +
      "%;";
  }
}

function update_array_size() {
  array_size = inp_as.value;
  generate_array();
}

window.onload = update_array_size();

//Running the appropriate algorithm.
for (var i = 0; i < butts_algos.length; i++) {
  butts_algos[i].addEventListener("click", runalgo);
  console.log(butts_algos[i]);
}
function disable_buttons() {
  for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].classList = [];
    butts_algos[i].classList.add("butt_locked");

    butts_algos[i].disabled = true;
    inp_as.disabled = true;
    inp_gen.disabled = true;
    inp_aspeed.disabled = true;
  }
}

function runalgo() {
  disable_buttons();

  this.classList.add("butt_selected");
  console.log(this);
  switch (this.innerHTML) {
    case "Bubble ":
      Bubble();
      break;
    case "Selection ":
      Selection_sort();
      break;
    case "Insertion ":
      Insertion();
      break;
    case "Merge ":
      Merge();
      break;
    case "Quick ":
      Quick();
      break;
  }
}
