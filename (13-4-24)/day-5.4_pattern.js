//printing number pattern using for loop
console.log("patterns ");
var str = "";
for (var i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    str += " " + j;
  }
  str += "\n";
}
console.log(str);
console.log(" ");

for (var i = 1; i <= 5; i++) {
  var str = "";
  for (j = 1; j <= i; j++) {
    str += " " + j;
  }
  console.log(str);
}
console.log(" ");

//printing star pattern using for loop
for (var i = 1; i <= 5; i++) {
  str = "";
  for (j = 1; j <= i; j++) {
    str += " " + "*";
  }
  console.log(str);
}
console.log(" ");

// Reverse order from big to small
for (var i = 6; i > 0; i--) {
  var str = "";
  for (var j = 1; j <= i; j++) {
    str += " " + j;
  }
  console.log(str);
}
console.log(" ");

for (var i = 5; i > 0; i--) {
  var str = "";
  for (var j = 1; j <= i; j++) {
    str += " " + "*";
  }
  console.log(str);
}
