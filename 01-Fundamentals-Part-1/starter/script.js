//Values and Variables
//Data Types
//let, const and var
//Basic operators
//Strings and Template Literals
const country = 'Australia';
const continent = 'Australia';
let population = 27;
const isIsland = false;
const language = 'English';

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);

console.log(population / 2);

population++;
console.log(population);

console.log(population > 6);

console.log(population < 33);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is below average`)
};


//4
//23
//617
//false
//1143

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 23
console.log('19' - '13' + 17); // -> 617
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
