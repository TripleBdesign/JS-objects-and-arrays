// Deel 1
/*
let person = {
    name: 'Bianca',
    age: 46
};

console.log (person);
console.log (person.name);
console.log (person.age);
*/

/* Dot Notation
let person = {
    name: 'Bianca',
    age: 46
};

    person.name = 'Hans';
    person.age = 49;

console.log (person.name);
console.log (person.age);
*/

/* Bracket Notation
let person = {
    name: 'Bianca',
    age: 46
};
    person ['name'] = 'Hans';
    person ['age'] = 49;

console.log (person.name);
console.log (person.age);
*/

// Bij de console.log moet je kiezen uit een van de 2, bij 2 stuks pakt hij alleen de laatste.


/* Opdracht 7 - 3e key-value pair (=propertie)
let person = {
    name: 'Bianca',
    age: 46,
    evaluations: [7, 10, 9]
};

console.log (person.evaluations);
*/
// De oplossing is [7, 10, 9]

//Deel 2 Arrays
/*let kleuren = ['groen', 'blauw', 'rood'];
console.log (kleuren);
*/

/*
//opdracht 4 log lengte van je array
let kleuren = ['groen', 'blauw', 'rood'];
console.log (kleuren.length);
*/

/*
//Opdracht 5 log 1e element
let kleuren = ['groen', 'blauw', 'rood'];
console.log (kleuren [0]);
*/

/*
//Opdracht 6 log laatste element
let kleuren = ['groen', 'blauw', 'rood'];
console.log (kleuren [kleuren.length -1]);
*/

//Opdracht 7 een 4e element met push
/*
let kleuren = ['groen', 'blauw', 'rood'];
kleuren.push ('geel');
console.log (kleuren);
*/

//Opdracht 8 cijfer toevoegen
/* 
let kleuren = ['groen', 'blauw', 'rood'];
kleuren.push ('geel');
kleuren.push (5);
console.log (kleuren);
*/

//Opdracht 9 voeg object toe aan array met push
/* 
let kleuren = ['groen', 'blauw', 'rood'];
kleuren.push ('geel');
kleuren.push (5);
kleuren.push ({greeting: "hi ik ben een object"});
console.log (kleuren);
*/

//Opdracht 10 log alleen begroeting van het object (= laatste element)
/* 
let kleuren = ['groen', 'blauw', 'rood'];
kleuren.push ('geel');
kleuren.push (5);
kleuren.push ({greeting: "hi ik ben een object"});
console.log (kleuren [kleuren.length -1]);
*/

//Deel 3 bekijk een real-life object
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
                food: {
                        favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
        {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
                        favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
        {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
                        favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]
/* Gebruik bij elke stap een console.log ("omschrijving van het object", hierjouwoplossing), bijv.
console.log ("Herkomst kat 1:", catBreeds[0].origin);
*/

//Opdracht 1 log de naam van laatse kattenras --> Amarican Bobtail Er zijn 3 soorten en de eerste is 0, de 2e is 1 en de 3e is 2.
console.log ("Laatste kattenras:", catBreeds[2].name);

//Opdracht 2 log de energy levels van de eerste kat --> 5
console.log ("Energielevel eerste kat:", catBreeds[0].energy_level);

//Opdracht 3 log het eerste temperament van de temperamenten van de 2e kat -->affectionate
console.log ("1e temperament van 2e kat:", catBreeds[1].temperament[0]);

//Opdracht 4 log het laatste temperament van de temperamenten van de 3e kat --> sensitive
console.log ("Laatste temperament van 3e kat:", catBreeds[2].temperament[4]);

//Opdracht 5 Log het favoriete voedsel van de 3e kat --> meaty things
console.log ("Favoriete voedsel van 3e kat:", catBreeds[2].food.favourite_food);
