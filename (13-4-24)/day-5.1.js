console.log("Switch statements.....");
var day=6;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("give number between 1 to 7 to display week");
    
}

console.log("------ For loop ------");

for (var i=1; i<101; i++){
    console.log(i);
}


console.log("---- for loop side by side -----");
var str="";
for(var j=1; j<101; j++){
    str+=" "+j
}
console.log(str);
console.log("");

// While loops
console.log("---- While loop ----");
var a=1;
while (a<6){
    console.log(a);
    a++;
}

console.log("-----Do While-----");
var k=1;
do{
    console.log(k);
    k++;
}while(k<5);
