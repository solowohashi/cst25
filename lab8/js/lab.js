/**
* Author: Elijah Solow-Ohashi
* Created: 2.6.2021
* License: Public Domain
*/

//first function
function firstThing(test){
  console.log("first " + test);
}

//second function
function secondThing(test){
  console.log("second " + test);
}

//third function
function thirdThing(test){
  console.log("third " + test);
}

firstThing("test 1 ");
secondThing("test 1 ");
thirdThing("test 1 ");

//functions in order
setTimeout(function(){
  firstThing("test 2");
}, 0);

setTimeout(function(){
  secondThing("test 2");
}, 0);

setTimeout(function(){
  thirdThing("test 2");
}, 0);

//in order of 2, 3, 1
setTimeout(function(){
  firstThing("test 3");
}, 3000);

setTimeout(function(){
  secondThing("test 3");
}, 1000);

setTimeout(function(){
  thirdThing("test 3");
}, 2000);
