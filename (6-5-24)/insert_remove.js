const divElement = document.getElementById("divElement");
let c = 1;
const insertHandler = function () {
  const para = document.createElement("p");
  para.id = `para${c + 1}`;
  para.innerText = `paragraph ${c + 1}`;
  divElement.append(para);
  c++;
};
const removeHandler = function () {
  const removeElement = document.getElementById("para" + c);
  if (removeElement) {
    removeElement.remove();
    c--;
  } else {
    alert("No element Found");
  }
};
const clearHandler = function () {
  for (var i = c; i > 0; i--) {
    const elem = document.getElementById(`para${i}`);
    elem.remove();
    c--;
  }
};
