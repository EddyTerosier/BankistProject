"use strict";

// BANKIST APP

// Data

// Objet représentant un compte bancaire avec son propriétaire, ses mouvements, son taux d'intérêt et son code PIN
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

// Tableau contenant tous les comptes
const accounts = [account1, account2, account3, account4];

// Éléments de la page web
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

// Fonction qui affiche les mouvements du compte sur la page web
const displayMovements = function (movements) {
    containerMovements.innerHTML = ""; // InnerHTML Comme SETTER ( il remplace tout le contenu par une chaine de caractere vide )

    movements.forEach(function (mov, i) {
        // C'est comme le GETTER ( il va chercher les infos et les imbriquent )
        const type = mov > 0 ? "deposit" : "withdrawal";
        const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
      `;
        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};

displayMovements(account1.movements);

// Fonction qui crée des noms d'utilisateur à partir des noms de propriétaire de compte
const createUsernames = function (accounts) {
    // Pour chaque compte, on ajoute un nouveau champ "username" qui est la première lettre de chaque mot du nom du propriétaire, tout en minuscule, et qui sont concaténées
    accounts.forEach(function (account) {
        account.username = account.owner
            .toLowerCase()
            .split(" ")
            .map((name) => name[0])
            .join("");
    });
};
// createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Map object qui stocke des informations sur différentes devises
const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);

// Tableau de mouvements bancaires
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////////////////////////////////////////////////

// Taux de conversion de l'euro en dollar
const euroToUSD = 1.07;

// Méthode ".map" qui crée un nouveau tableau avec les mouvements du compte en dollars
const movementUSD = movements.map(function (mov) {
    return mov * euroToUSD;
});

// Et en fonction fléchée ça donne ça
const movementUSD2 = movements.map((mov) => mov * euroToUSD);

// Tableau avec une description de chaque mouvement du compte
const movementsDescriptions = movements.map((mov, i, arr) => {
    if (mov > 0) {
        // Si c'est un dépôt
        return `Movement ${i + 1}: You deposited ${mov}`;
    }
    // Si c'est un retrait 
    else {
        return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
    }
});

// Tableau avec seulement les dépôts
const deposits = movements.filter(function (mov) {
    return mov > 0;
});

// Tableau avec seulement les retraits
const withdrawals = movements.filter(function (mov) {
    return mov < 0;
});

// // méthode for ofv
// const depositFor = [];
// for (const mov of movements ) if (mov>0) depositFor.push(mov);

