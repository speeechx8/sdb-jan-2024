import readline from "readline";

//function to ask questions
const rl = readline.createInterface(process.stdin, process.stdout);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

async function fetchPokemonNames() {
    //fetch all pokemon data from pokeapi
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const allPokemon = await response.json();
    return allPokemon.results.map((element) => element.name);
}


async function askFavoritePokemon() {
    const pokemonNames = await fetchPokemonNames();

    async function askQuestion() {
        for (;;) {
            const answer = await ask("What's your favorite Pokemon? ");

            if (pokemonNames.includes(answer.toLowerCase())) {
                console.log(`Your favorite Pokemon is ${answer}!`);
                break;
            }
            else {
                console.log(`${answer} isn't a Pokemon, try again!`);
            }
        }

        rl.close();
        process.emit();
    }

    askQuestion();
}

askFavoritePokemon();

//convert allPokemon.results from array of objects to array of names
// const pokemonNames = allPokemon.results.map((element) => element.name);

//your code here!
// function checkFavPokemon(input) {
//     for(let i = 0; i < pokemonNames.length; i++) {
//         if (input === pokemonNames[i]) {
//             isPokemon = true;
//             console.log(`Your favorite Pokemon is: ${input}!`);
//             break;
//         }
//         else {
//             isPokemon = false;
//         }
//     }
// }
// let answer = await ask("What's your favorite Pokemon?")
// let isPokemon;
// checkFavPokemon(answer);

// if(!isPokemon) {
//     console.log(`${answer} is not a Pokemon!`);
//     answer = await ask("What's your favorite Pokemon?")
//     checkFavPokemon(answer);
// }
// //end your code
// process.exit();