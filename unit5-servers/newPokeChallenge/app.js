import express from "express";
const app = express();
import indexRouter from "./routes/index.js"; 

app.use(express.json());


const port = 3000;

// set routes from handlers
app.use("/", indexRouter);

// start the server
app.listen(port, () => {
    console.log(`Poke challenge listening on port ${port}!`);
});