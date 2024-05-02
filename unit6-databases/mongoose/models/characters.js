import { Schema, model } from "mongoose";

const characterSchema = new Schema({
    name: String,
    height: String,
    mass: String,
    gender: String
});

export default model("Character", characterSchema);