let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

// Adds element to end of array
fruits.push("strawberry");
console.log(fruits);

console.log(fruits.push("nectarine", "pineapple"));
console.log(fruits);

// Removes last element from array
let lastFruit = fruits.pop();
console.log(fruits);
console.log(lastFruit);

// Splits apart an array. Does not mutate original array
let newFruits = fruits.slice(1, 3);
console.log(newFruits);
console.log(fruits);

console.log(fruits.slice(0, -1));