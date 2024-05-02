import ProductCategory from "./ProductCategory.jsx";
import "./styles/ProductTable.css";

export default function ProductTable({ onlyStocked }) {
    // products array we would get from a fetch
    const productsFromNetwork = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ];

    // *****below solution not ideal solution*****
    // array of categories of products
    let categories = [];
    productsFromNetwork.forEach((prod) => {
        if(!categories.includes(prod.category)) {
            categories.push(prod.category);
        }
    });
    // array of arrays breaking products into categories
    let products = [];
    categories.forEach((cat) => {
        products.push(productsFromNetwork.filter((prod) => prod.category === cat ));
    });

    return (
        <div className="ProductTable">
            <div className="headerCategory">Name</div>
            <div className="headerCategory">Price</div>
            {products.map((catArray, i) => (
                <div key={i} className={`${catArray[0].category}`}>
                    <ProductCategory 
                        products={catArray}
                        onlyStocked={onlyStocked}
                    ></ProductCategory>
                </div>
            ))}
            {/* <ProductCategory
                categoryName={"Fruits"}
                categoryList={[
                    {
                        name: "Apple",
                        price: "$1"
                    },
                    {
                        name: "Dragonfruit",
                        price: "$1"
                    },
                    {
                        name: "Passionfruit",
                        price: "$2"
                    }
                ]}
            >
            </ProductCategory>
            <ProductCategory
                categoryName={"Vegetables"}
                categoryList={[
                    {
                        name: "Spinach",
                        price: "$2"
                    },
                    {
                        name: "Pumpkin",
                        price: "$4"
                    },
                    {
                        name: "Peas",
                        price: "$1"
                    }
                ]}
            >
            </ProductCategory> */}
        </div>
    );
}