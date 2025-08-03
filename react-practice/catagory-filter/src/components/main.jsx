import { useState } from "react";


const products = [
    {
        id: 1,
        name: "iPhone 14",
        category: "Mobiles",
        price: 80000
    },
    {
        id: 2,
        name: "Samsung Galaxy",
        category: "Mobiles",
        price: 50000
    },
    {
        id: 3,
        name: "Dell Laptop",
        category: "Laptops",
        price: 60000
    },
    {
        id: 4,
        name: "Nike Shoes",
        category: "Shoes",
        price: 4000
    }
];


export default function FilterCategory() {
    const [SelectedCategory, setSelectedCategory] = useState("All");

    let finalarr = SelectedCategory === "All" ? products : products.filter((p) => {
        //  console.log(p);
        return p.category === SelectedCategory
    });

    console.log(finalarr)

    return (
        <>

            <div>
                <button onClick={() => setSelectedCategory("All")}>All</button>
                <button onClick={() => setSelectedCategory("Mobiles")}>Mobiles</button>
                <button onClick={() => setSelectedCategory("Laptops")}>Laptops</button>
                <button onClick={() => setSelectedCategory("Shoes")}>Shoes</button>
            </div>

            {
                finalarr.map((product) => (
                    <div key={product.id} style={{display:"flex"}}>
                        <p> name = {product.name} ,</p>
                        <p style={{marginLeft: "10px"}}> price = {product.price}</p>

                    </div>
                ))
            }

        </>
    )
}