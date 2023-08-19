// const coffeeStock = require('./state');

// // console.log(coffeeStock);

// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams){
//         console.log('Kopi berhasil dibuat!');
//     }else{
//         console.log('Biji kopi habis!');
//     }
// }

// makeCoffee("robusta", 300)



// const {coffeeStock, isCoffeeMachineReady} = require('./state');

// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);



// import stock from "./state.js";

// const displayStock = stock => {
//     for (const type in stock){
//         console.log(type);
//     }
// }

// displayStock(stock);



import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';
 
console.log(stock);
console.log(isCoffeeMachineReady);
 