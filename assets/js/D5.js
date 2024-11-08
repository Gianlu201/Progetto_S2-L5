/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];

console.log('ESERCIZIO 1');

function showArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

showArray(pets);

console.log('____________________');

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log('ESERCIZIO 2');

const newPets = pets.sort();
console.log(newPets);

console.log('____________________');

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log('ESERCIZIO 3');

function showReverseArray(arr) {
  arr = arr.reverse();
  showArray(arr);
  return;
}

console.log('Reverse of pets (Z to A)');
showReverseArray(newPets);

console.log('____________________');

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log('ESERCIZIO 4');

// const modPets = [];

function fromStartToEnd(arr) {
  const myArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    myArray[i] = arr[i + 1];
  }
  myArray.push(arr[0]);

  return myArray;
}

console.log('Before:');
console.log(pets);

console.log('After:');
console.log(fromStartToEnd(pets));

console.log('____________________');

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
];

console.log('ESERCIZIO 5');

const licensePlateNumbers = 6;

function createLicensePlate(n) {
  let myLicensePlate = Math.floor(Math.random() * 10 ** n);
  return myLicensePlate;
}

function addLicensePlate(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].licensePlate = createLicensePlate(licensePlateNumbers);
  }
  return;
}

addLicensePlate(cars);
console.log(cars);

console.log('____________________');

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log('ESERCIZIO 6');

const myCar = {
  brand: 'Nissan',
  model: 'Skyline',
  color: 'blue',
  trims: ['GT-R', 'sport', 'bi-turbo'],
  licensePlate: createLicensePlate(licensePlateNumbers),
};

function addCarTo(arr, car) {
  arr.push(car);
  return console.log('La tua auto è stata aggiunta');
}

addCarTo(cars, myCar);
console.log(cars);

console.log('____________________');

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

console.log('ESERCIZIO 7');

function saveFirstTrim(arr) {
  for (let i = 0; i < arr.length; i++) {
    justTrims.push(arr[i].trims[0]);
  }
}

saveFirstTrim(cars);
console.log(justTrims);

console.log('____________________');

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log('ESERCIZIO 8');

function crazyName(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].color.charAt(0) === 'b') {
      console.log('Fizz', '-> ' + arr[i].color);
    } else {
      console.log('Buzz', '-> ' + arr[i].color);
    }
  }
  return;
}

crazyName(cars);

console.log('____________________');

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

console.log('ESERCIZIO 9');

const stopNum = 32;

function startCount(arr, x) {
  let counter = 0;
  while (!(arr[counter] === x)) {
    console.log(arr[counter]);
    counter++;
  }
  console.log(x);
  return;
}

// In questo caso con il ciclo DO-WHILE avrei potuto ottenere lo stesso risultato evitando di inserire il console.log(x);

console.log('Conta finchè non trovi il numero: ' + stopNum);
startCount(numericArray, stopNum);

console.log('____________________');

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];

console.log('ESERCIZIO 10');

// VERSIONE LUNGA
console.log('VERSIONE LUNGA');

const numbersArray = [];

function fromLetterToNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'a':
        numbersArray.push(1);
        break;
      case 'b':
        numbersArray.push(2);
        break;
      case 'c':
        numbersArray.push(3);
        break;
      case 'd':
        numbersArray.push(4);
        break;
      case 'e':
        numbersArray.push(5);
        break;
      case 'f':
        numbersArray.push(6);
        break;
      case 'g':
        numbersArray.push(7);
        break;
      case 'h':
        numbersArray.push(8);
        break;
      case 'i':
        numbersArray.push(9);
        break;
      case 'l':
        numbersArray.push(10);
        break;
      case 'm':
        numbersArray.push(11);
        break;
      case 'n':
        numbersArray.push(12);
        break;
      case 'o':
        numbersArray.push(13);
        break;
      case 'p':
        numbersArray.push(14);
        break;
      case 'q':
        numbersArray.push(15);
        break;
      case 'r':
        numbersArray.push(16);
        break;
      case 's':
        numbersArray.push(17);
        break;
      case 't':
        numbersArray.push(18);
        break;
      case 'u':
        numbersArray.push(19);
        break;
      case 'v':
        numbersArray.push(20);
        break;
      case 'z':
        numbersArray.push(21);
        break;
      default:
        break;
    }
  }
}

console.log('Before:');
console.log(charactersArray);

fromLetterToNumber(charactersArray);

console.log('After:');
console.log(numbersArray);

// VERSIONE CORTA
console.log('VERSIONE CORTA');

const italianAlphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'z',
];

const numbersArray2 = [];

function fromLetterToNumberShort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < italianAlphabet.length; j++) {
      switch (true) {
        case arr[i] === italianAlphabet[j]:
          numbersArray2.push(j + 1);
          break;
        default:
          break;
      }
    }
  }
}

fromLetterToNumberShort(charactersArray);
console.log(numbersArray2);

console.log('____________________');
