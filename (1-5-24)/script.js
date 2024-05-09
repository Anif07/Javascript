function demoMethod() {
  document.getElementById("classes").innerHTML = "DOM classes";
  document.getElementById("classes").style.color = "red";
}

//getElementById()
let d = document.getElementById("h2");
console.log(d);
document.getElementById("h2").style.backgroundColor = "red";

//getElementByClass()
var elements = document.getElementsByClassName("class_selector"); //returns the collection of elements, so you need to specify which element in the collection you want to style
console.log(elements);
for (var i = 0; i < elements.length; i++) {
  if (i % 2 == 0) {
    elements[i].style.backgroundColor = "green";
    elements[i].style.color = "yellow";
  }
}

//GetElementByTagName()
var ele = document.getElementsByTagName("h3");
ele[0].style.color = "blue"; //to apply for all h3 elements we have to use loop

// GetElementByName
var elements = document.getElementsByName("fname");
console.log(elements);
for (var i of elements) {
  i.style.border = "3px solid";
}
var elements = document.getElementsByName("Animal");
elements[0].style.backgroundColor = "blue";
console.log(ele);

//queryselector()
document.querySelector(
  "#para1"
).innerHTML = `<h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia amet
quos voluptatum pariatur veniam debitis blanditiis harum sunt delectus a
minus, nobis aliquid. Reiciendis perferendis dicta nisi non incidunt
dolor.</h3>`;
document.querySelector("#para1").style.color = "maroon";

//class
document.querySelector(".para").style.color = "orange"; // it will only select first occurance
document.querySelector(".para").innerText = "Lorem Ipsum Anif";
document.querySelector(".para").innerHTML = "<h2>Lorem Ipsum Anif</h2>";
