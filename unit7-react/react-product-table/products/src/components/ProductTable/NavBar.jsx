import "./styles/NavBar.css";

export default function NavBar({ onlyStocked, setOnlyStocked }) {
    return (
        <div className="NavBar">
            <input id="searchBar" type="text" placeholder="Search..."></input>
            <div>
                <input type="checkbox" checked={onlyStocked} onChange={(event) => setOnlyStocked(event.target.checked)}></input>
                <label>Only show products in stock</label>
            </div>
        </div>
    );
}