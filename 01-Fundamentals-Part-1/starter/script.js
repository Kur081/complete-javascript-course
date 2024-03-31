//Values and Variables
//Data Types
//let, const and var
//Basic operators
//Strings and Template Literals
//Taking Decisions: If/Else statements
//Type conversion and coercion
//Equality Operators: == vs ===
//Logical Operators
//Switch

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

/*
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


const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders')
}

*/

let shouldLive = language === 'English' && population < 50 && !isIsland;

if (shouldLive) {
    console.log('You should live in Australia :)');
} else {
    console.log('Australia does not meet your criteria :(');
}

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

console.log(population > 33 ? `${country}'s population is above average` : `${country}'s population is below average`);