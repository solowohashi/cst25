console.log("javascript loaded");
var num = 5;
console.log(num);
var num = 30;
console.log(num);

function firstFunction(){
  console.log("the first step");
}

firstFunction();

function numCompar(num1,num2){
  console.log(num1,num2);
  console.log("the first number is greater than the second number: " + (num1>num2));
}

numCompar(2,3);
