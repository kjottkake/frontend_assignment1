//initializing variables
let notAFanTemp = 'I am not a fan of ';
let animals = ['dogs', 'cats', 'elephants', 'moose', 'ducks', 'cows', 'sheep'];
let vehicles = ['cars', 'trains', 'planes', 'boats', 'helicopters'];
let words = ['words', 'sentences', 'adjectives', 'pronouns', 'participles'];
let concepts = ['concepts', 'diversions', 'particularities', 'permiance'];

let display = document.getElementById("display");

//arrow function for selecting random array element.
let selectRandArray = (arr) => {
    let arrSize = arr.length; 
    return Math.floor(Math.random() * arrSize);
}


//initalizing quote variable with concatenation of notAFanTemp and fanSubject
let genQuote = (arr) => {
    let quote = notAFanTemp + arr[selectRandArray(arr)];
    display.innerHTML = quote;
    console.log(quote)
    return quote;
}

