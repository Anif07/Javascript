const divElement = document.getElementById("divElement");
const elementAppend = document.createElement("h1");
elementAppend.innerText = "Appended element";
// elementAppend.id = "appendElement";
//Append
divElement.append(elementAppend);

//prepend
const elementPrepend = document.createElement("h1");
elementPrepend.innerHTML = "Prepended element";
divElement.prepend(elementPrepend);

//before,after
const divElement2 = document.getElementById("divElement2");
const beforeElement = document.createElement("h1");
beforeElement.innerText = "befor element";
divElement2.before(beforeElement);

//after
const afterElement = document.createElement("h1");
afterElement.innerText = "after element";
divElement2.after(afterElement);

//insertAdjacentHTML || Element || Text
const divElement3 = document.getElementById("divElement3");

divElement3.insertAdjacentHTML("beforebegin", "<h1>Before Begin</h1>");
divElement3.insertAdjacentHTML("afterend", "<h1>after end</h1>");
divElement3.insertAdjacentHTML("afterbegin", "<h1>after begin</h1>");
divElement3.insertAdjacentHTML(
  "beforeend",
  "<h1>before end by using insertAdjacentHTML</h1>"
);
divElement3.insertAdjacentText(
  "beforeend",
  "<h1>before end by using insertAdjacentText</h1>"
);
const elem = document.createElement("h1");
elem.innerText = "before end by using insertAdjacentElement";
divElement3.insertAdjacentElement("beforeend", elem);
