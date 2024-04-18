//creating function for adding two numbers
function AddTwoNumbers(x, y) {
  res = x + y;
  return res;
}
console.log(AddTwoNumbers(20, 30));

//creating function for checking given num is prime or not
function isPrime(num) {
  res = true;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      res = false;
      break;
    }
  }
  if (res) {
    return `${num} is prime number`;
  } else {
    return `${num} is not a prime number`;
  }
}
console.log(isPrime(37));

//function for printing fibinocci series
function fib(num) {
  var n1 = 0;
  var n2 = 1;
  var str = "";
  for (var i = 1; i <= num; i++) {
    str += n1 + " ";
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
  return str;
}
res = fib(20);
console.log(res);

// console.log("palindrome function");
function isPalindrome(str) {
  len = str.length;
  str1 = "";
  for (var i = len - 1; i >= 0; i--) {
    str1 += str[i];
  }
  if (str === str1) {
    console.log(`${str} string is palindrome`);
  } else {
    console.log(`${str} string is not a palindrome`);
  }
}
isPalindrome("racecar");

// number palindrome
function numPalindrome(num) {
  a = num;
  var sum = 0;
  while (a > 0) {
    b = a % 10;
    sum = sum * 10 + b;
    a = parseInt(a / 10);
  }
  if (num === sum) {
    return `${num} is palindrome`;
  } else {
    return `${num} is not palindrome`;
  }
}
console.log(numPalindrome(45654));

// factorial of given number
function factorial(num) {
  fact = 1;
  for (var i = num; i > 0; i--) {
    fact *= i;
  }
  return `factorial of ${num} is ${fact}`;
}
console.log(factorial(6));

//square of given number
function square(base, power) {
  res = 1;
  for (var i = 1; i <= power; i++) {
    res *= base;
  }
  return res;
}
console.log(square(7, 3));

//square of given number by using recursive function
function square_r(base, power) {
  if (power === 1) {
    return base;
  } else {
    return base * square_r(base, power - 1); //5*square_r(5,2)--> 5*5*square_r(5,1)-->5*5*5
  }
}
console.log(square_r(5, 3));

//finding square root of given nuumber
var a = 64;
for (var i = a - 1; i > 1; i--) {
  if (a % i === 0 && i ** 2 == a) {
    console.log(i);
  }
}
//or
function sqrt(num) {
  res = 0;
  var srt = false;
  for (var i = 1; i < num; i++) {
    if (num % i == 0 && i * i == num) {
      res = i;
      srt = true;
    }
  }
  if (srt == false) {
    return "num is not perfect square";
  } else {
    return res;
  }
}
console.log(sqrt(81));

//finding lcm(least common multiple) of two numbers
function lcm(x, y) {
  r = 0;
  var i = 1;
  while (true) {
    if (i % x == 0 && i % y == 0) {
      r = i;
      break;
    }
    i++;
  }
  return r;
}
console.log(lcm(5, 8));
// 5=5,10,15,20,25,30,35,40,45
// 8=8,16,24,32,40

//finding GCM(greatest common measure) of two numbers
function gcd(x, y) {
  //hcf or gcd or gcm---->HIGHEST COMMON FACTOR (HCF) GREATEST COMMON DIVISOR(GCD) OR GREATEST COMMON MEASURE (GCM)
  if (x > y) {
    max = x;
  } else {
    max = y;
  }
  var r = 0;
  for (var i = 1; i <= max; i++) {
    if (x % i === 0 && y % i === 0) {
      r = i;
    }
  }
  return r;
}

console.log(gcd(24, 36));
//24-->2,4,6,12,24
//36-->2,3,4,6,9,12,18,36
