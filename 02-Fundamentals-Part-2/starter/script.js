'use strict';
//Functions
//Function Declarations vs. Expressions
//Arrow Functions
//Functions calling other functions
// introduction to Arrays
//Basic Array Operations (Methods)
//introduction to objects
// Dot vs bracket notation
//Object methods
//Iteration: the for loop
//looping arrays, breaking and continuing
//Looping backwards and loops in loops

function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} million people and its capital city is ${capitalCity}.`);
}

describeCountry('America', 22, 'Washington');
describeCountry('UK', 43, 'London');
describeCountry('Australia', 65, 'Canberra');

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percentageOfWorld3 = population => (population / 7900) * 100;

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld2(1441);
const percUSA1 = percentageOfWorld3(332);

console.log(percPortugal1, percChina1, percUSA1);

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
}

describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);


const populations = [10, 1441, 332, 83];

console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld2(populations[1]),
    percentageOfWorld3(populations[2]),
    percentageOfWorld2(populations[3])
];

console.log(percentages);


const neighbours = ['Norway', 'Sweden', 'Russia'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden;';
console.log(neighbours);

const myCountry = {
    country: 'Australia',
    capital: 'Canberra',
    language: 'English',
    population: '18',
    neighbours: ['New Zealand', 'Papua New Ginnea', 'Indonesia'],
    describe: function () {
        console.log(
            `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries, and a Capital called ${myCountry.capital}.`
        );
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length == 0 ? true : false;
    }
};

console.log(myCountry);

console.log(

);

myCountry.population += 2;

console.log(myCountry.population);

myCountry['population'] -= 2;

console.log(myCountry.population);

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting.`)
}

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}

console.log(percentages2);

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'],
['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour : ${listOfNeighbours[i][y]}`);
    }
}

const percentages3 = [];

while (i < populations.length) {
    const perc = percentageOfWorld3(populations[i]);
    percentages3.push(perc);
    i++;
}

console.log(percentages3);