import "./styles/SignUp.css";
import { useState, useEffect } from "react";
import { hash } from "bcryptjs";

export default function SignUp ({ setToken }) {
    // const [response, setResponse] = useState(""); 

    // async function displayServerResponse() {
    //     const serverResponse = await fetch("http://localhost:3000");
    //     const body = await serverResponse.json();
    //     setResponse(body.message);
    // }

    // useEffect(() => {
    //     displayServerResponse();
    // });

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function submitSignUp(event) {
        // stop page from refreshing on submit
        event.preventDefault();

        // hash password
        hash(password, 10, async (err, passwordHash) => {
            if(err) {
                // TODO: tell user the error in better way
                console.log(err);
            }
            else {
                // send username and password to backend
                const response = await fetch("http://localhost:3000/signup", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        username,
                        passwordHash
                    })
                });

                const body = await response.json();

                if(response.status === 200) {
                    localStorage.setItem("jwt-token", body.token);
                    setToken(body.token);
                }
                else {
                    console.log(body.message);
                }
            }
        });
    }

    return (
        <form onSubmit={submitSignUp} className="SignUp">
            <h1>Sign Up</h1>
            <label>
                <span>Username:</span>
                <input placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
            </label>
            <label>
                <span>Password:</span>
                <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}