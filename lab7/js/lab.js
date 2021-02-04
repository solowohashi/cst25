/**
* Author: Elijah Solow-Ohashi
* Created: 2.2.2021
* License: Public Domain
*/

//Name Sorting Function
function sortName(){
  //prompt the user to enter name
  var userName = window.prompt("Enter first name to access nuclear codes:");
  //returns the prompt input with alterations
  return userName.toLowerCase().split('').sort();
  
}

//writes  function output on webpage
document.writeln("Nuclear codes:" + sortName());
