/**
* Author: Elijah Solow-Ohashi
* Created: 2.1.2021
* License: Public Domain
*/

// Transport Array
var myTransport = ["bike",
                  "skateboard",
                  "bus"];

// Main Ride Object
var myMainRide = {year: 1995,
                  model: "ascent ex",
                  make: "diamondback",
                  color: "white"};

//Array Output
document.writeln(myTransport);

//Object Output
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
