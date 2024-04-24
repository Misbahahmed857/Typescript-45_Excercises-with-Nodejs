// Q35
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

//define variable
let animals :string[] =["cat" , "dog" , "horse" , "cow" , "sheep" , "goat" , "parrot"];

//loop through the array and print each animal with a message
for(let animal of animals)

{ //print the message
    console.log(`A ${animal} would make a great pet.`);
};

//print a final message
console.log("Any of these animal would make a great pet!");