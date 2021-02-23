//author: elijah solow-ohashi
//date: 22 february 2021
//license: public license

function sortingHat(str){
  var length = str.length;
  var mod = length % 4;
  if (mod == 0)
  {
    return "Gryffindor";
  }
  else if (mod == 1)
  {
    return  "Ravenclaw";
  }
  else if (mod == 2)
  {
    return "Huffelpuff";
  }
  else if (mod == 3){
    return "Slytherin";
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById('input').value;
  var house = sortingHat(name);
  newText ="<p>The Sorting Hat has assigned you to " + house + "</p>";
  document.getElementById('output').innerHTML = newText;
})
