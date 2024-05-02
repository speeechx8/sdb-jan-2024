//HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

//HINT: That's not the only function you'll need

//HINT: You'll need a loop, and an if statement, MAYBE MORE

function funkyString (string) {
    // Checking to make sure argument is a string
    if (typeof string !== "string") {
        // Not a string
        console.log("Wrong argument recieved!");
    }
    // Is a string
    else {
        // Declaring a temp variable because we can't directly change the argument
        let tempStr = "";
        // Looping through each index of the string
        for (i = 0; i < string.length; i++) {
            // Checking if space
            if (string.charAt(i) == " ") {
                // add space to tempStr
                tempStr += string.charAt(i);
            }
            // Checking if odd placement
            else if((i % 2) === 0) {
                // change character to upper case and add to tempStr
                tempStr += string.charAt(i).toUpperCase();
            }
            // checking if even placement
            else {
                // change to lower case and add to tempStr
                tempStr += string.charAt(i).toLowerCase();
            }
        }
        // Return new string
        return tempStr;
    }
}

console.log(funkyString("This is a funky string."));