import ProductCard from "../components/ProductCard";
import React from "react";
const sampleProducts = [
    { id: 1, name: "Laptop", price: 1200, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Phone", price: 800, image: "https://via.placeholder.com/150" },
];

export default function Products() {
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    );
}
