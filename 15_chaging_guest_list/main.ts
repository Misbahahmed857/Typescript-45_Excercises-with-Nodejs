//make a list
let guestlist = ["Misbah","Amna","Fatima", "zohra"];

//one guest can't make it to the dinner.
let unableToAttend = guestlist[1];

//print msg of which guest can't come.
console.log(unableToAttend, "can not come.");

//replace the guest.
guestlist.splice(1,1,"zulfiqar");

//new invitation
guestlist.forEach(guest => console.log(`Hello ${guest}, would you like to have dinner with me?`));
