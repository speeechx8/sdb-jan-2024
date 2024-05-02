import { Router } from "express";
const router = Router();
import { writeFile } from "fs";
import pokemon from "../pokemon.json" with { type: "json" };

// handle the get request on the home page
router.get("/", (request, response) => {
    response.send(pokemon);
});

// get pokemon
router.get("/:name", (request, response) => {
    // get single pokemon by name or id
    console.log("get pokemon request recieved")
    const requestedPoke = pokemon.find((poke) => poke.name === request.params.name.toLowerCase());
    // check if in list
    if(requestedPoke) {
        console.log("request successful")
        response.send(requestedPoke);
    }
    else {
        response.send("Sorry, that pokemon is not available!");
    }
});

// add pokemon to list
router.post("/", (request, response) => {
    console.log("---Request recieved---");

    const newPokemon = request.body;

    // check is post body is already included
    if(pokemon.some((p) => newPokemon.id === p.id || newPokemon.name === p.name)) {
        response.send(`Sorry, ${newPokemon.name} is already included!`);
    }
    else { // add post body to file
        pokemon.push(newPokemon);

        writeFile("./pokemon.json", JSON.stringify(pokemon, null, 4), (err) => {
            if(err) {
                console.log("Something went wrong, file not written.");
            }
            else {
                console.log("File has been written.");
            }
        });

        response.send(`Congrats, you've added ${newPokemon.name} to the list!`);
    }
});

// delete pokemon by id or name
router.delete("/:name", (request, response) => {
    console.log("delete request recieved");
    const requestedPoke = pokemon.findIndex((poke) => poke.name === request.params.name.toLowerCase());

    // check if in list
    if(requestedPoke >= 0) {
        console.log("request successful")
        pokemon.splice(requestedPoke, 1);

        // write new array to file
        writeFile("./pokemon.json", JSON.stringify(pokemon, null, 4), (err) => {
            if(err) {
                console.log("Something went wrong, file not written.");
            }
            else {
                console.log("File has been written.");
            }
        });

        response.send(`Deleted ${request.params.name} from database.`)   
    }
    else {
        response.send("Sorry, that pokemon is not available to delete!");
    }
});

// edit a pokemon on the list
router.post("/:name/", (request, response) => {
	console.log("---Edit request recieved---");
    const requestedPokeIndex = pokemon.findIndex((poke) => poke.name === request.params.name.toLowerCase());
	
	// check if in list
    if(requestedPokeIndex >= 0) {
		// loop through keys on requested pokemon object
		Object.keys(pokemon[requestedPokeIndex]).forEach((key) => {
			// check if request.body contains a matching key
			if(Object.keys(request.body).includes(key)) {
				// check if trying to change name or id
				if(key === "name" || key === "id") {
					console.log(`Cannot change ${key}`)
					return;
				}
				else {
					// change key's value to new value
					pokemon[requestedPokeIndex][key] = request.body[key];
					console.log(`${key} is included in request body.`);
				}
			}
		});
		// write new array to file
		writeFile("./pokemon.json", JSON.stringify(pokemon, null, 4), (err) => {
			if(err) {
				console.log("Something went wrong, file not written.");
			}
			else {
				console.log("File has been written.");
				response.send(`Editted ${request.params.name} on our list.`);
			}
		});
	}
    else {
        response.send("Sorry, that pokemon is not available to edit!");
    }
});

export default router;