import { useState } from 'react'
import './App.css'
import HookUseEffect from "./components/HookUseEffect.jsx"

function App() {
	const [show, setShow] = useState(false);

	return (
		<>
			<button onClick={() => {
				setShow((prev) => !prev)
			}}>Show effect stuff</button>

			{show && <HookUseEffect />}
			{/* {show ? <>show is true</> : <>show is false</>} */}


		</>
	)
}

export default App
