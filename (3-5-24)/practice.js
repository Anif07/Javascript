function paraChange() {
  document.getElementById("para1").innerText =
    "i am going to college to morning";
  console.log("one time clicked");
}
function paraChange2() {
  document.getElementById("para1").innerText =
    "We are going to college to night";
  console.log("double clicked");
}

function hover() {
  head = document.getElementById("heading1");
  head.style.backgroundColor = "red";
  head.innerText = "Thankyou";
}
function hoverout() {
  head = document.getElementById("heading1");
  head.style.backgroundColor = "";
  head.innerText = "Hover on Me";
}
function keydown() {
  console.log("down");
}
function keypress() {
  console.log("press");
}
function keyup() {
  console.log("up");
}
function focusHandler() {
  input = document.getElementById("fname");
  console.log("focus");
  input.style.backgroundColor = "gray";
  input.style.color = "white";
}
function blurHandler() {
  input = document.getElementById("fname");
  console.log("blur");
  input.style.backgroundColor = "";
  input.style.color = "";
}
var inputfield = document.getElementById("lname");
// var inputfield = document.getElementById("Lname");
console.log(inputfield);
function inputEvent(event) {
  inputfield.value = event.target.value.toUpperCase();
}
