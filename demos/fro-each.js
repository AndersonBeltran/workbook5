"use strict";

let kids = [
  { first: "Natalie", last: "Plyers" },
  { first: "Brittany", last: "Ray" },
  { first: "Zachary", last: "Westly" },
];

//anonymous function as callback function passed to forEach function
kids.forEach(function (kid) {
  console.log(kid.first);
});

//arrow function as callback function passed to forEach function
kids.forEach((kid) => console.log(kid.first));