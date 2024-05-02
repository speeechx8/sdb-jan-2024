// keyword (expression) { code block } <-- format for conditionals
if (5 < 10) { // true
    console.log("5 is less than 10!");
}
if (5 > 10) { // false
    console.log("5 is greater than 10!");
}
if (5 <= 10) { // true
    console.log("5 is less than or equal to 10!");
}
if (5 <= 5) { // true
    console.log("5 is less than or equal to 5!");
}
if (5 < 5) { // false
    console.log("5 is less than 5!");
}
if (5 == 5) { // true
    console.log("5 is the same as 5!");
}
if (5 != 5) { // false
    console.log("5 is NOT the same as 5!");
}
if (5 != "5") { // false
    console.log("5 is NOT the same as \"5\"!");
}
if (5 === 5) { // true
    console.log("5 is EXACTLY the same as 5!");
}
if (5 !== "5") { // true
    console.log("5 is NOT EXACTLY the same as \"5\"!");
}

// we don't need a comparison operator at all!
if (true) {
    console.log("This is true!");
}
if (false) {
    console.log("This is false!");
}

// strings are truthy if it is not empty
if("true") { // true
    console.log("This is a true string!");
}
if("false") { // true
    console.log("This is a false string!");
}
if ("") { // false
    console.log("This is an empty string!");
}
if (" ") { // true <-- spaces are still characters!
    console.log("This is an space string!");
}

// numbers are truthy except for 0 and NaN
if (1) { // true
    console.log("This is the number 1!");
}
if (0) { // false
    console.log("This is the number 0!");
}
if (-1) { // true
    console.log("This is the number -1!");
}
if (0.00) { // false
    console.log("This is 0.00");
}
if (12345) { // true
    console.log("This is 12345");
}
if (NaN) { // false
    console.log("This is NaN");
}

// arrays are truthy except
let arr = [1, 2, 3, 4, 5];
console.log(arr[2]);
if (arr) { // true
    console.log("This is an array!");
}

let emptyArr = [];
if (emptyArr) { // true
    console.log("This is an empty array!");
}
if ({}) { // true
    console.log("This is an empty object!");
}
console.log(emptyArr.length);
if (emptyArr.length) { // false <-- length is 0, 0 is false!
    console.log("This is the length of emptyArr.");
}
// Empty array becomes false through type-coercion
// Elements of array are turned into strings when doing comparison
if (emptyArr == false) { // true
    console.log("This is emptyArr when comparred to false.");
}
// Type-cast to boolean
if(Boolean(emptyArr)) { // true
    console.log("This is emptyArr casted to a boolean.");
}