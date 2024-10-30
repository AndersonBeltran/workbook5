"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
];
// Which candies costs less than $4.00?
// Which candies has "M&M" its name?
// Do we carry "Swedish Fish"?

let candiesUnderFour = products.filter((products) => products.price < 4.0);
console.log(candiesUnderFour);

// let candiesWithMM = products.filter((product) => product.product.includes("M&M"));
// console.log(candiesWithMM);

// let candiesWithSwedishFish = products.filter((product) => product.product.includes("Swedish Fish"));
// console.log(candiesWithSwedishFish);
let num = [1, 100, 5, 99, 33, 22, 4];
num.sort((a, b) => a - b);

console.log(num);
