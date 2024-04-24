//make a list
var guestlist = ["Misbah", "Amna", "Fatima", "zohra"];
//one guest can't make it to the dinner.
var unableToAttend = guestlist[1];
//print msg of which guest can't come.
console.log(unableToAttend, "can not come.");
//replace the guest.
guestlist.splice(1, 1, "zulfiqar");
//new invitation
guestlist.forEach(function (guest) { return console.log("Hello ".concat(guest, ", would you like to have dinner with me?")); });
