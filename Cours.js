"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log("--------FOR OF--------");
// // for of method

// for (const movement of movements) {
//     if (movement > 0) {
//         console.log(`Vous avez déposé ${movement}`);
//     } else {
//         console.log(`Vous avez retiré ${Math.abs(movement)}`); // .abs = valeur absolue, retire le signe "-"
//     }
// }

// console.log("--------FOREACH--------");
// // forEach method
// // On ne peut pas break ou continue dans le ForEach

// // le premier argument doit forcement etre l'élément courant, le deuxieme est l'index et le troisième est le tableau dans lequel on boucle
// movements.forEach(function (movement, index, array) {
//     movement > 0
//         ? console.log(`Transaction ${index + 1}: Vous avez déposé ${movement}`)
//         : console.log(
//               `Transaction ${index + 1}: Vous avez retiré ${Math.abs(movement)}`
//           );
// });

// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ...

/////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// // "-" dans le slice permet de partir de la fin du tableau
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// // SPLICE
// // SPLICE extrait les éléments du vrai tableau

// console.log(arr.splice(2));
// // Affiche ['c', 'd', 'e']
// console.log(arr);
// // Affiche ['a', 'b']
// console.log(arr.splice(-1));
// // Affiche ['b']
// console.log(arr);
// // Afficher ['a']

// // REVERSE
// // Inverse le tableau et change le tableau d'origine par la meme occasion

// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCATENER
// // Ajouter le tableau a l'autre sans modifier l'original

// const letters = arr.concat(arr2);
// console.log(letters);

// // JOIN
// // Les lie avec la méthode de liaison entre parenthese

// console.log(letters.join("-"));

// /////////////

// // The .at() méthod

// const arr3 = [23,11,64]
// console.log(arr3.at(0));

// console.log(arr3.at(-1));

// Coding challenge #1

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

function checkDogs(arr) {
    bothArr.forEach(function (el, i, arr) {
        el >= 3
            ? console.log(
                  `Dog number ${i + 1} is an adult, and is ${el} years old`
              )
            : console.log(`Dog number ${i + 1} is still a puppy`);
    });
}

// 1.

const julia2 = julia.slice(1, 3);
console.log(julia);
console.log(julia2);

// 2.

const bothArr = julia2.concat(kate);
console.log(bothArr);

// 3.

// bothArr.forEach(function (el, i, arr) {
//     el >= 3
//         ? console.log(`Dog number ${i + 1} is an adult, and is ${el} years old`) : console.log(`Dog number ${i + 1} is still a puppy"`);
// });

// 4.
checkDogs(bothArr);

// Coding Challenge #3

// DATA
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function(ages){
    // 1. Calcule l'âge humain de chaque chien en utilisant la formule donnée
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + (age * 4));
    // 2. Garde uniquement les chiens âgés de 18 ans ou plus
    const adultAges = humanAges.filter(age => age >= 18);
    // 3. Calcule la moyenne de l'âge humain des chiens adultes
    const averageAge = adultAges.reduce((acc, age) => acc + age, 0) / adultAges.length;
    // Retourne la moyenne de l'âge humain des chiens adultes
    return averageAge;
}

// Teste la fonction avec les deux jeux de données
console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));