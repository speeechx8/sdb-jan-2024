// imagine like a black box. likely won't have access to see inner workings of function.
// returns a promise
// function first() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Delayed for 3 seconds.");
//         }, 3000);
//     })
// }

// this is typical structure on setting up async / await
async function myAsyncFunct() {
    // let msg = await first();
    // console.log(msg);

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const ditto = await response.json();
    return ditto.id;
}

console.log(1);
let pokemon = await myAsyncFunct();
console.log(pokemon);
console.log(2);