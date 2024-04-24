//Q 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
 let current_users = ["Misbah", "Bilal", "Ali", "Asad", "Ahsan", "Daud",  "Naveed"];

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
 let new_users = ["Jhon", "Peter", "Ahsan", "Daud", "George", "Levine", "Zack", "Naveed"];

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

 new_users.forEach(new_one_user => { 
   // make a condition for username that is already taken and save in a variable of our_condition.
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // by using if else statement print the msg.
    if (our_condition) {
        console.log(`Sorry! ${new_one_user} is already taken! you need to enter a new username. `)
    }
     else {
        console.log(`${new_one_user} username is available.`)
    }

});
