"use strict";
//this function prints numbers from 1 to 5 using a loop
function printNumberwithLet() {
    //using "let" for loop variable "i"
    for (let i = 1; i <= 5; i++) {
        //log numbers 1 to 5  
        console.log(i);
    }
    //"i" is not accessible here, outside the loop, because it is defined with "let"
}
//this shows that "let" limit "i" to the loop,preventing errors from using 'i' where it is not intented.
printNumberwithLet();
