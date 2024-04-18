console.log("factorial of number using for loop");
fact=1;
for (var x=4;x>0;x--){
    fact=fact*x
}
console.log(fact);

console.log("factorial of number using while loop");
factw=1
var num1=5;
while (num1>0){
    factw*=num1;
    num1--;
}
console.log(factw);

console.log("factorial of number using Do while loop");
var num2=6;
factd=1
do{
    factd*=num2;
    num2--;
}while(num2>0);
console.log(factd);

console.log(" ");
console.log("prime number");
var num3=9;
res=true
for (var i=2;i<num3;i++){
    if (num3%i===0){
        res=false
        break;
    }
    
}
if (res===true){
console.log(`${num3} is prime number`);
}else{
    console.log(`${num3} is not a prime number`);
}

console.log(" ");
console.log("prime number");
var num3=30;
res=true
for (var i=2;i<Math.sqrt(num3);i++){
    if (num3%i===0){
        res=false
        break;
    }
    
}
if (res===true){
console.log(`${num3} is prime number`);
}else{
    console.log(`${num3} is not a prime number`);
}


console.log(" ");
console.log("Fibinocci series");
var n1=0;
var n2=1;
var num=100;
console.log(n1);
console.log(n2);
for (var i=1;i<10;i++){
    res=n1+n2;
    console.log(res);
    n1=n2;
    n2=res;
}

console.log(" ");
console.log("Fibinocci series another way to print in single line");
var n1=0;
var n2=1;
var num=100;
str="0, 1"
for (var i=1;i<101;i++){
    res=n1+n2;
    str+=", "+res
    n1=n2;
    n2=res;
}
console.log(str);