import React from "react";
import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
    return (
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
            <h2 className="mt-2 font-bold">{product.name}</h2>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`} className="text-blue-600 underline">
                View
            </Link>
        </div>
    );
}
