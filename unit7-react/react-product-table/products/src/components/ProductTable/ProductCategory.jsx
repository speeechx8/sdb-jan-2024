import "./styles/ProductCategory.css";

export default function ProductCategory({ products, onlyStocked }) {
    return (
        <div className="ProductCategory">
            <h2>{products[0].category}</h2>
            <div className="ProductCategoryProds">
                {products.map((prod, i) => (
                    <>
                        {!(!prod.stocked && onlyStocked) &&
                            <div key={i} className="ProductCategoryProdRow">
                                <div className={`${prod.stocked ? "" :  "ProductCategoryNotStocked"}`}>{prod.name}</div>
                                <div>{prod.price}</div>
                            </div>
                        }
                    </>
                ))}
            </div>

            {/* <header>{categoryName}</header>
            <div className="categoryList">
                <div>{categoryList[0].name}</div>
                <div>{categoryList[0].price}</div>
                <div>{categoryList[1].name}</div>
                <div>{categoryList[1].price}</div>
                <div>{categoryList[2].name}</div>
                <div>{categoryList[2].price}</div>
            </div> */}
        </div>
    );
}