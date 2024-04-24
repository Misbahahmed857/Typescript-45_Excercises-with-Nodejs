"use strict";
//Q-23 
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
Object.defineProperty(exports, "__esModule", { value: true });
let car = `subaru`;
//test 1: equality comparison
console.log("\n1.is car == `subaru`? i predict true.");
console.log(car == `subaru`);
//test 2: strict equality comparison
console.log("\n2.is car === `subaru`? i predict true.");
console.log(car === `subaru`);
//test 3: inequality comparison
console.log("\n3.is car != `subaru`? i predict false. ");
console.log(car != `subaru`);
//test 4: strict inequality test
console.log("\n4.is car !== `subaru`? i predict false. ");
console.log(car !== `subaru`);
//test 5:less than comparison
console.log("\n5.is car < `subaru`? i predict false. ");
console.log(car < `subaru`);
//test 6:greater than comparison
console.log("\n6.is car > `subaru`? i predict false. ");
console.log(car > `subaru`);
//test 7:less than or equals to comparison
console.log("\n7.is car <= `subaru`? i predict true. ");
console.log(car <= `subaru`);
//test 8:greater than or equals to comparison
console.log("\n8.is car >= `subaru`? i predict true. ");
console.log(car >= `subaru`);
//test 9:cheaking thruthness
console.log("\n9.is car? i predict true. ");
console.log(Boolean(car));
//test 10:cheaking falseness
console.log("\n10.is !car? i predict false. ");
console.log(!car);
