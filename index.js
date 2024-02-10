// let marks = ['20','35', '60'];

// let result = marks.filter(checkResult);

// function checkResult(mark){
//     return mark<60;
// }

// console.log(result);

// var prompt = require('prompt-sync')();
// const age = prompt('Enter your age to get Disscount: ');

// if(age <= 18){
//     console.log('You Got 30% Disscount!');
// } else {
//     console.log('Yout got 20% Disscount!')
// }



// PROBLEM - 1 ------------------------------------------------------------------

var prompt = require('prompt-sync')();
// const age = prompt('Enter your Age: ');

// if(age < 18) {
//     console.log('You got a 20% Disscount');
// } else if(18 < 65) {
//     console.log('Normal ticket price applies.');
// } else(65 < age) 
//     console.log('you get a 30% senior disscount!');


// PROBLEM 2 --------------------------------------------------------------


// let length = prompt('Enter the length of Rectangle: ');
// let width = prompt('Enter the width of Rectangle: ');

// let area = length * width;
// console.log('Area: ' + area);

// PROBLEM 3 -----------------------------------------------------------------------------

// const products = [
//     {
//         name:  'Kurkure',
//         price: 30,
//         inStock: true,
//     },
//     {
//         name:  'Ponds Cream',
//         price: 10,
//         inStock: false,
//     },
//     {
//         name:  'IceCream',
//         price: 20,
//         inStock: true,
//     },
// ]

// console.log(products)

// ---------------------- PROBLEM 4 ------------------------------------------

let guestList = ['KC Sahoo', 'Dinesh', 'Rashmi', 'Johnsan', 'Ankit'];
// let check = guestList.filter(checkNames);

let checkNames = prompt('Check Names: ');

function checkNames(guestList){
     if(checkNames = guestList){
        console.log('Welcome to the Party: '+ guestList);
     } else {
        console.log('Sorry! uhh r not in the guest list');
     }
     return;
}

console.log(checkNames);