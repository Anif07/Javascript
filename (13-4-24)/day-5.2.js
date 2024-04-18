console.log("1-100 num using for loop");
str=""
for (var i=1;i<101;i++){
    str+=" "+i
}
console.log(str);

console.log("");
console.log("1-100 num using while loop");
j=1;
str2=""
while(j<101){
str2+=" "+j
j++
}
console.log(str2);

console.log("");
console.log("1-100 num using DO while loop");

k=1
str3=""
do{
    str3+=" "+k;
    k++
}while(k<101)
console.log(str3);


console.log("");
console.log("1-100 even number only with for loop");
str4=""
for (var m=1;m<101;m++){
    if (m%2===0){
        str4+=" "+m
    }
}
console.log(str4);


console.log("");
console.log("first 100 even number only with specifying exit number like 200");
str4=""
for (var m=1,c=0;m<201;m++){
    if (m%2===0){
        str4+=" "+m
        c++
    }
}
console.log(str4);
console.log(c);

console.log("");
console.log("first 100 even number without specifying exit number like 200");
str4=""
for (var m=1,c=0;c<100;m++){
    if (m%2===0){
        str4+=" "+m
        c++
    }
}
console.log(str4);
console.log(c);



