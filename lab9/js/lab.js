//author: Elijah Solow-ohashi
//date: 10 February 2021
//license: MIT

//console log test
console.log("fucking christ");

//referring to div in HTML
var outputEl =
  document.getElementById("lab9content");

//creates element
var new1El =
  document.createElement("p");
  new1El.innerHTML = "something new";

//creates element
var new2El =
  document.createElement("p");
  new2El.innerHTML = "something else";

//creates element
var new3El =
  document.createElement("p");
  new3El.innerHTML = "something good";

//links elements together
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//prepends element
outputEl.prepend(new3El);
