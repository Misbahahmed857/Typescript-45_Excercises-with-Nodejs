// creating a guest list array
let guestlist: string[] = ["Misbah", "Amna", "Fatima", "zohra"];
// making variable for those guest who cn not come
let notcoming = guestlist[1];
// print tha name of guest who can not come
console.log(notcoming, "can not come.");
// add or remove values from guest list array
guestlist.splice(1, 1, "zulfiqar");
// print mesage for bigger table
console.log("\nGood new! We have found a bigger table\n.");
// adding a new guest at starting index of array
guestlist.unshift("Anshara");
// adding a new guest at ending index of array
guestlist.push("Tehmina");
// making a variable for storing a middle index of guest list
let middleIndex = Math.floor(guestlist.length / 2);
// adding new guest to middle index of an array
guestlist.splice(middleIndex, 0, "Basil");
// print updated list
console.log("\nUpdated list of our Guests\n");
// send invitations
guestlist.forEach((guest) => {
  console.log(`Hello ${guest}, would you like to have dinner with me?`);
});
// print message can invite only 2 
console.log("\nUnfortunately, the new dinner table not arrive on time, so, I can invite only two guest to dinner with me.\n");
// using while loop to remove guests form an array only two names will remain
while (guestlist.length > 2) {
  let removeGuest = guestlist.pop();
  if (removeGuest) {
    console.log(`Sorry, ${removeGuest} I can't invite you to dinner`);
  }
}
// sending invitations to last two guests
console.log("\nInvitations to the last 2 guests\n");
guestlist.forEach((lasttwo) => {
  console.log(`Luckly ${lasttwo}, you are still invited to dinner.`);
});
// removeing last two guest
guestlist.pop();
guestlist.pop();
console.log("\nEmpty List: \n", guestlist);