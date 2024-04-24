//creating a guest list array
var guestlist = ["Misbah", "Amna", "Fatima", "zohra"];
//making variable for those guest who cn not come
var notcoming = guestlist[1];
//print tha name of guest who can not come
console.log(notcoming, "can not come.");
//add or remove values from guest list array
guestlist.splice(1, 1, "zulfiqar");
//print mesage for bigger table
console.log("Good new!We have found a bigger table.");
//adding a new guest at starting index of array
guestlist.unshift("Anshara");
//adding a new guest at ending index of array
guestlist.push("Tehmina");
//making a variable for storing a middle index of guest list
var middleIndex = Math.floor(guestlist.length / 2);
// adding new guest to middle index of an array
guestlist.splice(middleIndex, 0, "Basil");
//print updated list
console.log("Updated list of our Guests");
//send invitations
guestlist.forEach(function (guest) { return console.log("Hello ".concat(guest, ", would you like to have dinner with me?")); });
