var sweety="Sweety";
var cutie="Cutie;"

console.log("value before swap ");
console.log("Sweety",sweety);
console.log("Cutie",cutie);

var temp =sweety;

sweety=cutie;
cutie=temp;
temp=sweety;

console.log("value after swap ");
console.log("Sweety",sweety);
console.log("Cutie",cutie);


var num1=100, num2=200,num3=300;

console.log("=====value before swap======");

console.log("first value num1",num1);
console.log("Second value num2",num2);
console.log("Third value num3",num3);

var temp=num1;
num1=num2;
num2=num3;
num3=temp;

console.log("======value After swap======= ");

console.log("first value num1",num1);
console.log("Second value num2",num2);
console.log("Third value num3",num3);