//author: Elijah Solow-ohashi
//date: 10 February 2021
//license: MIT

console.log("fucking christ");

var outputEl =
  document.getElementById("lab9content");

var new1El =
  document.createElement("p");
  new1El.innerHTML = "something new";

var new2El =
  document.createElement("p");
  new2El.innerHTML = "something else";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
