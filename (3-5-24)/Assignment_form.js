const btn = document.getElementById("btn");
btn.addEventListener("click", submitHandler);
let password = document.getElementById("password");

function submitHandler(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  if (name.startsWith(" ")) {
    alert("Name cannot start with a space");
    return;
  }

  if (password.length < 8) {
    let label = document.getElementById("passwordLabel");
    label.innerText = "*password should contain 8 characters";
    label.style.color = "red";
    return;
  } else {
    let label = document.getElementById("passwordLabel");
    label.innerText = "";
    label.style.color = "";
  }
  document.getElementById("myForm").submit();
}
