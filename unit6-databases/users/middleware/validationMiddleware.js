import jwt from "jsonwebtoken";
import User from "../models/user.js";

export default async function validationMiddleware(request, response, next) {
    try {
        // decrypt jwt
        const decryptedToken = jwt.verify(request.headers.authorization, process.env.SECRET_KEY);
        // console.log(decryptedToken);
    
        // get user from id in jwt
        const user = await User.findById(decryptedToken.id);
        if(!user) {
            throw new Error("ID from JWT does not correspond to User in database.");
        }
    
        request.user = user;

        return next();
    }
    catch(error) {
        response.status(401).send({
            message: error.message
        })
    }
}