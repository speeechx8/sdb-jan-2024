let arr = ["hello!", 7, ["good morning", "goodnight"]];
console.log(arr);

console.log(arr[2][1]);
console.log(arr[0][1]);
console.log(arr[1][1]);

console.log("\n-----------\n");

// for..of loops are used on indexes
let fruits = ["apple", "banana", "cherry", "strawberry", "pineapple"];
console.log("\n---for...of---");
for(f of fruits) {
    console.log(`I like ${f}!`);
}

console.log("\n---forEach---");
fruits.forEach((element) => {
    console.log(`I like ${element}!!`);
});

// Find returns first matching element
console.log("\n---find---");
console.log(fruits.find((element) => {
    return element[0] === "b";
}));

// Filter returns new array of all matching elements
console.log("\n---filter---");
console.log(fruits.filter((element) => {
    return element.slice(-1) === "y";
}));

// Map returns new array and does not mutate old array
console.log("\n---map---");
console.log(fruits.map((element) => {
    return `I like ${element}!`;
}));
console.log(fruits);

// Reduces array to single object. Makes you think about types
console.log("\n---reduce---");
console.log(fruits.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, "")); // Will error if array is empty without an initial value
console.log(fruits.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.length;
}, 0));

let nameList = ["Alice", "Bob", "Charlie", "Carol", "David"];
console.log(nameList.reduce((accumulator, current) => {
    return accumulator + current.length;
}, 0));