 
 /*
    Javascript
        client-side language
        interpreted language (not compiled)
        object oriented
        weakly typed (duck typing)
        ECMAScript (orginazation that sets standards for JS)
 */

/*
    Comments
        blocks of code that are being ignored
        // for single line
        /* for multiple lines

        used for devs to understand what the code is doing
        as a learner it helps with notetaking
        helps others understand what our code does

        ctrl + / for single line comments
        alt + shift + a for multi-line comments
*/

/* 
    Console
        gives us access to browser (or node) for reading output
        in VSCode us ctrl + ` to open console
        is an object
        is for devs, not users
*/

// runs but doesn't show in console
2 + 2;
// shows in console
console.log(2+2);

/* 
    JS Datatypes
        Primitives
            lowest level
            built into language that might have methods but are not objects
            can't be changed - immutable
            are native
            Ex: string, number, bigint, boolean, undefined, symbol, null, NaN (Not a Number)
        Objects
            contain other objects or primitives
            can be changed - mutable
            Ex: everything else not listed above
*/

/* 
    Strings
        data type that represents text
    	enclosed in '', "", ``
*/

"this is a string";
console.log("this is a string");
console.log("2024");
console.log(2024);
console.log("It is the year 2024");
console.log("It is the year " + 2024); // Strings can be concatenated

let str = "This is a variable"
console.log(str);

// Strings can be indexed
console.log(str[0]);

// Strings also have methods
console.log(str.length);

console.log(str[str.length]); // Fencepost error
console.log(str[str.length - 1]);

console.log(`this is a tmeplate literal`);
console.log(`This is the length of "str": ${str.length}`);
// console.log("This is also the length os a "str": " + ${str.length}) <-- ERROR!
console.log("This is also the length of a 'str': " + str.length);

// Strings can be sliced
console.log(str.slice(0, 4)); // This

/* 
 	Booleans
 		booleans are yes or no
		things that aren't booleans still have boolean values (true-y or false-y)
*/

console.log(true);
console.log(false);
console.log(2 == 2);
console.log(2 == 5);

let comp = "string to compare";
console.log(str = comp) // ERROR! Make sure to use == for comparison

console.log(2 == "2"); // Not as strict of a comparison | true
console.log(2 === "2"); // Strictly equals | false

console.log(typeof "2"); // Get type of object

/* 
 	Type Coercion
 		because JS is duck-typed, it infers what the type should be
		comparison (==) doesn't care about the type
		strict comparison (===) DOES care about the type
*/