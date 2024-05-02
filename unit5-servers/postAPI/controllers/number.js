import { Router } from "express";
const router = Router();

router.post("/", (request, response) => {
    console.log("request recieved");

	const number = request.body.number;

	response.send(`good job bud! you sent the number ${number}`);
});

export default router;