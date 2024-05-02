import { useState } from "react";

export default function SignIn({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function submitSignIn(event) {
        // stop page from refreshing on submit
        event.preventDefault();

        // send username and password (INSECURE!!!!!!!) to backend
        const response = await fetch("http://localhost:3000/signin", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                password // INSECURE!!!!!!
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

    return (
        <form onSubmit={submitSignIn} className="SignUp">
            <h1>Sign In</h1>
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