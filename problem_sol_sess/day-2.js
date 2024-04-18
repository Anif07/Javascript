//printing numbers from 1 to 100
num = 101;
for (var i = 1; !(i >= num); i++) {
  console.log(i);
}
console.log("");

//printing sum of even numbers
num = 50;
sum = 0;
for (var i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(`sum of even numbers from 1 to ${num} is ${sum}`);
console.log(" ");

//printing sum of odd numbers
num = 50;
sum = 0;
for (var i = 1; i <= num; i += 2) {
  sum += i;
}
console.log(`sum of odd numbers from 1 to ${num} is ${sum}`);
console.log(" ");

//printing diff b/w sum of even num and sum of odd num
num = 100;
even = 0;
odd = 0;
for (var i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    even += i;
  } else {
    odd += i;
  }
}
console.log(
  `diff b/w sum of even num and sum of odd from 1 to 100 is ${even - odd}`
);
