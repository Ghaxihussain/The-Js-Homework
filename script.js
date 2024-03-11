// In this assignment, you are going to loop over an array of names and print out either a hello or goodbye to 
// that name to the browser console. If the name starts with a letter j or J, you are to print out Goodbye 
// JSomeName. If the name starts with any other letter, you are to print out Hello SomeName. use js


var names = ["Ghazi", "Ali", "Musa", "Rehman", "Jamal","jasim"];
var greet = function(names) {
    for (var i = 0; i < names.length; i++) {
          if (names[i][0].toUpperCase() == "J") {
                 console.log("Goodbye! " + names[i]);
        }
        else {
                console.log("Hello! " + names[i])};
     }
 }
 greet(names);
