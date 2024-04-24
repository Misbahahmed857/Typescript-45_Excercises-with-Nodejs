// took a program from assignment 14

//make a list of people you'd like to invite  to dinner.
let guestlist :string[]= ["Misbah","Amna","Fatima", "zohra"];

//print msg to each person, inviting them to dinner.

//guestlist.forEach(oneguest => console.log(`Hello ${oneguest}, Would you like to have dinner with me?`))

let lengthguestlist: number = guestlist.length;

//print a msg indicating the number of guest invited to dinner.
console.log(`we are inviting total ${lengthguestlist} guests.`);