

//initializing variables
let notAFanTemp = 'I am not a fan of ';
let fanSubject = ['dogs', 'cats', 'books', 'cars', 'trains', 'planes', 'words', 'javascript']

//arrow function for selecting random array element.
let selectRandArray = (arr) => {
    let arrSize = arr.length; 
    return Math.floor(Math.random() * arrSize);
}


//initalizing quote variable with concatenation of notAFanTemp and fanSubject
let quote = notAFanTemp + fanSubject[selectRandArray(fanSubject)];