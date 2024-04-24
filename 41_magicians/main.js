"use strict";
//Q 41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//define a function to print each magician name from an array
function show_magician(magician) {
    magician.forEach(name => console.log(name));
}
//define an array of magician names
let magician_names = ["wandy potter", "Harry potter", "hermione potter"];
// call the function to print each magician name
show_magician(magician_names);
