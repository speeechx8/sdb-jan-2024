import express from "express";
const app = express();
app.use(express.json());

import numberController from "./controllers/number.js";
import indexController from "./controllers/index.js";

const port = 3000;

app.use("/", indexController);
app.use("/number", numberController);

// start the server
app.listen(port, () => {
	console.log(`PostAPI app is now listening on port: ${port}`);
});

