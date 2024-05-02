// While loop that counts from zero to nine
console.log("While loop 0-9");
let i = 0;
while (i < 10) {
    console.log(i);
    i++; // i = i + 1;
}

// For loop that counts zero to nine
console.log("\nFor loop 0-9");
for (let i = 0; i < 10; i++) { // for (<start>; <stop>; <step)
    console.log(i);
}

let str = "hello there!";
console.log("\nFor loop over string");
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// For Of loops over iterables
console.log("\nFor...of loop over string");
for (i of str) {
    console.log(i);
}

let arr = [1, 2, 3, 4, 5];
console.log("\nFor...of loop over array");
for (i of arr) {
    console.log(i);
}

let john = {
    age: 27,
    height: 5,
    weight: 150,
    allowed: null
}

// For In loops over objects (enumerables)
console.log("\nFor...in loop");
for (i in john) {
    console.log(`${i}: ${john[i]}`); // john.age, john.height, john.weight
}

// ternary -> condition ? exprIfTrue : exprIfFalse
console.log("\nTernary");
john.age < 18 ? console.log("John is not allowed.") : console.log("John is allowed.");
john.allowed = john.age < 18 ? "Not allowed!" : "Allowed!";
console.log(john);