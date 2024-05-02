console.log("----------------Section 1----------------");

if (false) {
    console.log("This is false.");
}
else {
    console.log("This is our else block!");
}

console.log("\n----------------Section 2----------------");

let john = {
    age: 27,
    height: 5,
    weight: 150
}
if (john.age === 27) {
    console.log("John is 27.");
}
if (john.age === 28) {
    console.log("John is 28.");
}
else {
    console.log("John is NOT 28!");
}

console.log("\n----------------Section 3----------------");

if (false) {
    console.log("This is false.");
}
console.log("This is outside of our else block!");

console.log("\n----------------Section 4----------------");

// This ride only allows people from the ages of 16-27 on
if (16 <= john.age <= 27) {
    console.log("John is allowed on the ride!")
}
else {
    console.log("John is not allowed on the ride!");
}

// This ride only allows people who are 18+ AND are also taller than 5.5
if (john.age >= 18 && john.height >= 5.5) {
    console.log("John is also allowed on the ride!");
}
else {
    console.log("John is not allowed on this ride!");
}

// This ride only allows people who are 18+ OR taller than 5.5
if (john.age >= 18 || john.height >= 5.5) {
    console.log("John is also allowed on the ride!");
}
else {
    console.log("John is not allowed on this ride either!");
}

// This ride only allows people younger than 18 AND people shorter than 5.5
// if (john.age < 18 && john.height < 5.5) <-- SAME AS BELOW
if (!(john.age >= 18 || john.height >= 5.5)) {
    console.log("John is also allowed on the ride!");
}
else {
    console.log("John is not allowed on this ride either!");
}

// This ride allows anyone who is taller than 5.5, older than 18, OR heavier than 120 
if (john.height >= 5.5) {
    console.log("Allowed.");
}
else if (john.age >= 18) {
        console.log("Also allowed.");
}
else if (john.weight >= 120) {
        console.log("Also also allowed!");
}
else {
    console.log("Definitely NOT allowed!");
}
