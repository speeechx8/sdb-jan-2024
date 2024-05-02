import { Schema, model } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    userId: Schema.ObjectId,
    date: {
        type: Date,
        default: Date.now
    }
});

export default model("Post", postSchema);