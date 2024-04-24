"use strict";
//Q 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
let myFavoriteFruits = ["apple", "orange", "Banana", "Grapes", "Mango"];
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (myFavoriteFruits.includes("apple")) {
    console.log("I really like apple!");
}
if (myFavoriteFruits.includes("orange")) {
    console.log("I really like orange!");
}
if (myFavoriteFruits.includes("Banana")) {
    console.log("I really like bananas!");
}
if (myFavoriteFruits.includes("Grapes")) {
    console.log("I really like grapes!");
}
if (myFavoriteFruits.includes("Mango")) {
    console.log("I really like mango!");
}
