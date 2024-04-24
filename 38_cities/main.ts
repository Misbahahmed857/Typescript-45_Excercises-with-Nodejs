//q38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

// use function and the function should print a simple sentence.
function describe_city(city:string, country:string="Pakistan"){
    console.log(`${city} is in ${country}`)
}
//call the function for three different cities, at least one of which is not in the default country.

describe_city("Gujranwala");

describe_city("Faisalabad");

describe_city("New York","USA" );