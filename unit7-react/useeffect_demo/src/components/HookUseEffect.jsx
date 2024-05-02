import { useState, useEffect } from "react";

const HookUseEffect = () => {
	const [count, setCount] = useState(0);

	// do action on initial component mount and if state has changed
	// useEffect(() => {
	// 	console.log("component mounted / state has changed");
	// });

	// do action on initial component mount ONLY
	// useEffect(() => {
	// 	console.log("only shows on component mount");
	// }, []);

	// do action on initial compoonent mount and if specific state changes
	// useEffect(() => {
	// 	console.log("shows on component mount and specific state change");
	// }, [count]);



    return(
        <div>
            {/* <h3>{count}</h3>
			<button onClick={() => setCount((previousCount) => previousCount + 1)}>Add</button> */}
			<UseEffectFetch />
        </div>
    );
};

const UseEffectFetch = () => {
	const [selectedOption, setSelectedOption] = useState("films");
	const [results, setResults] = useState([]);
	const options = ["films", "people", "locations", "species", "vehicles"];

	useEffect(() => {
		const fetchResults = async () => {
			try {
				let json = await (await fetch(`https://ghibliapi.vercel.app/${selectedOption}`)).json();

				// console.log(json);
				setResults(json);
			}
			catch(err) {
				console.log(err);
			}
		};

		fetchResults();
	}, [selectedOption]);

	const displayResults = () => results.map((result) => (
		<div key={result.id} style={{border: "1px solid lightblue"}}>
			<img style={{maxWidth: "200px"}} src={result.image} alt="poster" />
			<h3>{result.title}</h3>
			<h3>{result.name}</h3>
			<h3>{result.description}</h3>
		</div>
	));

	return(
		<>
			<h2>Studio Ghibli</h2>
			<select onChange={(event) => setSelectedOption(event.target.value)}>
				{options.map((option) => (
					<option key={option}>{option}</option>
				))}
			</select>
			{displayResults()}
		</>
	);
};

export default HookUseEffect;