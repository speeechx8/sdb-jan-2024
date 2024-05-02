import "./App.css"
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import SignOut from "./components/SignOut.jsx";
import { useState } from "react";
import NewPost from "./components/NewPost.jsx";

export default function App() {
	const [token, setToken] = useState(localStorage.getItem("jwt-token"));

	return (
		<>
			{token ? 
				<div className="App-SignedIn">
					<SignOut setToken={setToken}></SignOut>
					<NewPost></NewPost>
				</div>
			:
				<div className="App-NotSignedIn">
					<SignUp setToken={setToken}></SignUp>
					<SignIn setToken={setToken}></SignIn>
				</div>
			}
		</>
	)
}