import { useState } from "react";
import "./styles/NewPost.css";

export default function NewPost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [body, setBody] = useState("");

    async function submitNewPost(event) {
        // stop page from refreshing on submit
        event.preventDefault();

        // send title, desc, and body to backend
        const response = await fetch("http://localhost:3000/post", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: localStorage.getItem("jwt-token")
            },
            body: JSON.stringify({
                title,
                description,
                body
            })
        });

        const responseBody = await response.json();

        if(response.status === 200) {
            console.log(responseBody.message);
        }
        else {
            console.log(responseBody.message);
        }
    }

    return (
        <form onSubmit={submitNewPost} className="NewPost">
            <h1>New Post:</h1>
            <label>
                <span>Title</span>
                <input placeholder="Title" onChange={(e) => setTitle(e.target.value)}></input>
            </label>
            <label>
                <span>Description</span>
                <input placeholder="Description" onChange={(e) => setDescription(e.target.value)}></input>
            </label>
            <textarea placeholder="Body" onChange={(e) => setBody(e.target.value)}></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}