// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.

function sandwich(...items: string[]) {
    console.log(`\nYour sandwich will have ${items.length} items: \n`);

    items.forEach(singleItem => {console.log("-" + singleItem)    });
        console.log('\nEnjoy your sandwich!\n');


}
//Call the function three times, using a different number of arguments each time.

sandwich('ham', 'cheese', 'lettuce');
sandwich('ham', 'cheese', 'lettuce', 'tomato', 'mayo');
sandwich('ham', 'cheese', 'lettuce', 'tomato ', 'mayo', 'mustard', 'ketchup', 'onions', 'pickles', 'avocado', 'bacon');
