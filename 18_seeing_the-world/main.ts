//
let favPlacestovisit: string[] = ["Finland","South korea","Argentina","Canada" ];

// print array in its original order
console.log("Original order: ",favPlacestovisit );

//print array in alphabetical order without modifying the actual list

console.log("Alphabetical order: ",favPlacestovisit.slice().sort());

//show array is still in its original order by printing it.

console.log("Still in its Original order: ",favPlacestovisit );

// print array in reverse alphabetical order without changing the order of the original list.

console.log("Reverse alphabetical order: ",favPlacestovisit.slice().sort().reverse());

//show array is still in its original order by printing it again.

console.log("Still in its Original order: ",favPlacestovisit );

// reverse the order of list and print the array to show that its order has changed.

console.log("Reverse original order: ",favPlacestovisit.reverse());

// reverse the order of list again  and print the list to show it's back to its original order.

console.log("Back to its original order: ",favPlacestovisit.reverse());

// sort the array so it is stored in reverse alphabetical order and  print the list to show that its order has been changed.

console.log("sorted in alphabetical order: ", favPlacestovisit.sort());

// sort to change the array so it is stored in reverse alphabetical order and  print the list to show that its order has changed.

console.log("sorted in reverse alphabetical order: ", favPlacestovisit.reverse());