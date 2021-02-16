//author: elijah solow-Ohashi
//date: 11-2-21
//license: MIT

//function that takes the input from a field and rearranges the given characters
function sortName(){
  //refers to an element in the HTML called user-name
  var name = document.getElementById("user-name").value;
  //rearranges characters from input field
  name = name.split('').sort().join();
  //assigns the name function to the output element
  document.getElementById("output").innerHTML = name;
  //returns the function
  return name;
}

//runs function when button is clicked
document.getElementById("my-button").addEventListener("click", sortName);
