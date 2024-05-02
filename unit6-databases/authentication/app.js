import "dotenv/config";

// import jwt from "jsonwebtoken";

// const payload = {
//     "sub": "1234567890",
//     "name": "Troy Tanon",
//     "admin": true
// }

// const encrypted = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 2 });
// console.log(encrypted);

// const decrypted = jwt.verify(encrypted, process.env.SECRET_KEY);
// console.log(decrypted);

// setTimeout(() => {
//     console.log(jwt.verify(encrypted, process.env.SECRET_KEY))
// }, 3000);

import bcrypt from "bcrypt";

const saltRounds = 10;

bcrypt.hash(process.env.PASSWORD, saltRounds, (err, hash) => {
    bcrypt.compare("password", hash, (err, result) => {
        console.log(result);
    });
});
