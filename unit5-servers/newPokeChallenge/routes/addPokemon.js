import { Router } from "express";
const router = Router();
import fs from "fs";
import pokemon from "../pokemon.json" with { type: "json" }


router.post("/", (request, response) => {
    console.log("---Request recieved---");

    const newPokemon = request.body;

    // check is post body is already included
    if(pokemon.some((p) => newPokemon.id === p.id )) {
        response.send(`Sorry, ${newPokemon.name} is already included!`);
    }
    else { // add post body to file
        pokemon.push(newPokemon);

        fs.writeFile("./pokemon.json", JSON.stringify(pokemon), () => {
            console.log("File has been written.")
        });

        response.send(`Congrats, you've added ${newPokemon.name} to the list!`);
    }
});


export default router;