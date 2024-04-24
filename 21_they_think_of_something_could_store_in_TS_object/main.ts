//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

//  Create an object that represents your favourite coffee. It should have the following properties

interface favCoffee{

    coffeeName: string;
    coffeeType: string;
    coffeeOrigin: string;
    coffeePrice: number;
}

let myFavCoffee =   {
    coffeeName: "Coffee" ,
    coffeeType: "Espresso",
    coffeeOrigin: "Italy",
    coffeePrice:  2.50
}  

let myCoffee =   {
    coffeeName:"Coffee",
    coffeeType: "Cappuccino",
    coffeeOrigin: "UK",
    coffeePrice: 3.50

}  

console.log(myFavCoffee);

console.log(myCoffee);