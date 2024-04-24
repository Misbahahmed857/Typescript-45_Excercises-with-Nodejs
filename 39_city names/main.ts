// Q 39
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value that’s returned

//calling a function with parameters which returns a value in string

function city_country(city:string, country:string):string{

    return `${city}, ${country}`;

}

//print the returned value

console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Berlin", "Germany"));

console.log(city_country("Paris", "France"));

console.log(city_country("Tokyo", "Japan"));