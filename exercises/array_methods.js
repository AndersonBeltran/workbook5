"use strict";

let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];
// a. Write code that searches the courses array using the map()function to return
// only the item name and then use forEach() to display the list of items.

let itemName = cart.map((cart) => cart.item + " - " + cart.price + " - " + cart.quantity);
console.log(itemName);

itemName.forEach((itemName) => console.log(itemName));

// let cart2 = [
//   "Bread - 3.29 - 2",
//   "Milk - 4.09 - 1",
//   "T-Bone Steak - 12.99 - 2",
//   "Baking Potato - 1.89 - 6",
//   "Iceberg Lettuce - 2.06 - 1",
//   "Ice Cream - Vanilla - 6.81 - 1",
//   "Apples - 0.66 - 6",
// ];

// let test2 = cart2.forEach((cart) => console.log(cart));
