//Q 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings

let apple = "apple";
let upperCaseApple = "APPLE";
let five = 5;
let ten = 10;

console.log("\n1. Is apple is equal to apple?");
console.log(apple=="apple");

console.log("\n1. Is apple is not equal to apple?");
console.log(apple!="apple");

//• Tests using the lower case function

console.log("\n2. Is APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase()=="apple");

console.log("\n2. Is APPLE is not equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase()!="apple");

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log("\n3. Is 10 greater than 5?");
console.log(10>5);

console.log("\n3. Is 10 less than 5?");
console.log(10<5);

console.log("\n3. Is 10 greater than or equal to 5?");
console.log(10>=5);

console.log("\n3. Is 10 less than or equal to 5?");
console.log(10<=5);

console.log("\n3. Is 10 equal to 10?");
console.log(10==10);

console.log("\n3. Is 10 not equal to 10?");
console.log(10!=10);

//• Tests using "and" and "or" operators

console.log("\n4. Is 10 greater than 5 and 10 less than 15?");
console.log(10>5 && 10<15);

console.log("\n4. Is 10 greater than 5 and 10 less than 5?");
console.log(10>5 && 10<5);


console.log("\n4. Is 10 greater than 5 or 10 less than 15?");
console.log(10>5 || 10<15);

console.log("\n4. Is 10 greater than 5 or 10 less than 5?");
console.log(10>5 || 10<5);

//• Test whether an item is in a array

console.log("\n5. Is 10 in the array [1,2,3,4,5,6,7,8,9,10]?");
console.log([1,2,3,4,5,6,7,8,9,10].includes(10));



//• Test whether an item is not in a array

console.log("\n5. Is 10 not in the array [1,2,3,4,5,6,7,8,9,10]?");
console.log([1,2,3,4,5,6,7,8,9,10].includes(11));





