/* 
    Variables
        containers that store information
        have a name that is stored seperately from the value
            name POINTS to the value
        initialize: (a) (b) (c)* (d)*
            (a): keyword (let, var, const) -> default to using let
            (b): name of the variable

            *Optional*
            (c): assignment operator (=)
            (d): value of the variable
*/

let str; // Undefined
console.log(str);

str = "string"; // Assigning variable
console.log(str);

const CONSTSTR = "string2"; // Has to be assigned when made.
console.log(CONSTSTR);
//CONSTSTR = "string2"; | Const cannot be reassigned.

if(CONSTSTR === "string2"){
    let innerVar = "hi!";
    console.log(innerVar);
    console.log(str);
}