//initalizing const variables
const STEMPLAYER = 200;

//initializing variables
let notAFanTemp = 'I am not a fan of ';
let animals = ['dogs', 'cats', 'elephants', 'moose', 'ducks', 'cows', 'sheep'];
let vehicles = ['cars', 'trains', 'planes', 'boats', 'helicopters'];
let words = ['words', 'sentences', 'adjectives', 'pronouns', 'participles'];
let concepts = ['concepts', 'diversions', 'particularities', 'permiance'];

//selecting various DOM elements
let display = document.getElementById("display");
let us = document.getElementById("us");
let no = document.getElementById("no");
let uk = document.getElementById("uk");
let se = document.getElementById("se");
let dk = document.getElementById("dk");

//simple math conversions are applied to various currencies
us.innerHTML = STEMPLAYER + " USD" 
no.innerHTML = STEMPLAYER * 9 + " NOK" 
uk.innerHTML = (STEMPLAYER/1.5).toFixed(2) + " GBP" 
dk.innerHTML = STEMPLAYER * 8 + " DKK" 
se.innerHTML = STEMPLAYER * 10 + " SEK" 

//function for selecting random array element.
let selectRandArray = (arr) => {
    let arrSize = arr.length; 
    return Math.floor(Math.random() * arrSize);
}


//function which calls on random array element to generate a new sentence.
let genQuote = (arr) => {
    //concatenates sentence with ending
    let quote = '"' + notAFanTemp + arr[selectRandArray(arr)] + '."';
    //displays using DOM element
    display.innerHTML = quote;
    //console log for testing purposes.
    console.log(quote)
    return quote;
}

