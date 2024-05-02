import { useState } from "react";
import NavBar from "./NavBar.jsx";
import ProductTable from "./ProductTable.jsx";
import "./styles/ProductLayout.css";

export default function ProductLayout() {
    const [onlyStocked, setOnlyStocked] = useState(false); 

    return (
        <div className="ProductLayout">
            <NavBar 
                onlyStocked={onlyStocked} 
                setOnlyStocked={setOnlyStocked}
            ></NavBar>
            <ProductTable
                onlyStocked={onlyStocked} 
            ></ProductTable>
        </div>
    );
}