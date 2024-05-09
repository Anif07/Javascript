// EventListener
// addEventListner() method
const Event = document.getElementById("Event");
Event.addEventListener("click", () => {
  alert("you clicked on me");
});

//removeEventListner() method
//   Event.removeEventListner("click");

//propogation
// bubbling and capturing

const elemets = document.querySelectorAll("*");

// elemets.forEach(function (elemet) {
//   elemet.addEventListener("click", () => alert(elemet.tagName), true); //true means capturing true
// });

// to stop this capturing and bubbling we can use stop propogation
//stopPropogation()
elemets.forEach(function (elemet) {
  elemet.addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      alert(elemet.tagName, e.type);
    },
    false
  );
});
