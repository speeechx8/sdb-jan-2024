import { useState } from 'react';
import './App.css';
import FancyButton from "./components/FancyButton.jsx";

function App() {
	// hooks go in "root" of component function
  	const [displayMessage, setDisplayMessage] = useState("No button has been clicked.");

  return (
    <div className="App">
		Hello there
		<p>{displayMessage}</p>
		<FancyButton
			setMessage={setDisplayMessage}
			clickMessage={"Button 1 was clicked"}
		>
		</FancyButton>
		<FancyButton
			setMessage={setDisplayMessage}
			clickMessage={"Button 2 was clicked"}
		>
		</FancyButton>
		<FancyButton
			setMessage={setDisplayMessage}
			clickMessage={"Button 3 was clicked"}
		>
		</FancyButton>
    </div>
  );
}

export default App;
