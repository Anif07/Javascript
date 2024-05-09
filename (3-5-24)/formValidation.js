let popup = document.querySelector(".popup");
function openPopup() {
  popup.id = "popup";

  overlay.style.display = "block";
}
let submit = document.querySelector(".submit");
function closePopup() {
  popup.id = "";
}

let overlay = document.getElementById("overlay");

overlay.classList = "active";
