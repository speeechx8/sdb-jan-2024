import express from "express";
import "dotenv/config";
import router from "./controllers/routes.js";
import mongoose from "mongoose";
import cors from "cors";

// initialize express server
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

// run server
app.listen(process.env.PORT, () => {
    console.log(`Server is now listening on port: ${process.env.PORT}`);
});

// create mongoose connection
mongoose.connect("mongodb://localhost:27017/exampleSignup");
const db = mongoose.connection;

db.on("connected", () => {
    console.log("connected to database");
});
db.on("error", (err) => {
    console.log(err);
});