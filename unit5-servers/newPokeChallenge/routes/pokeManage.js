import { Router } from "express";
const router = Router();
import fs from "fs";
import pokemon from "../pokemon.json" with { type: "json" };



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

// make edit route

// delete pokemon by id or name
router.delete("/:name", (request, response) => {
    console.log("delete request recieved");
    const poke = pokemon.findIndex((poke) => poke.name === request.params.name);

    // check if in list
    if(poke >= 0) {
        console.log("request successful")
        pokemon.splice(poke, 1);

        // write new array to file
        fs.writeFile("./pokemon.json", JSON.stringify(pokemon), () => {
            console.log("File has been written.")
        });

        response.send(`Deleted ${request.params.name} from database.`)   
    }
    else {
        response.send("Sorry, that pokemon is not available to delete!");
    }

});

export default router;