import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import React from "react";
const sampleProducts = [
    { id: 1, name: "Laptop", price: 1200, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Phone", price: 800, image: "https://via.placeholder.com/150" },
];

export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = sampleProducts.find(p => p.id === parseInt(id));

    if (!product) return <p>Product not found</p>;

    return (
        <div className="p-6">
            <img src={product.image} alt={product.name} className="w-64 h-64" />
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p>${product.price}</p>
            <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
            >
                Add to Cart
            </button>
        </div>
    );
}
