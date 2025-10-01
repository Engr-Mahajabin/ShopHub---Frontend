import { useCart } from "../context/CartContext";
import React from "react";
export default function Cart() {
    const { cart } = useCart();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cart.length === 0 ? <p>No items yet</p> : (
                cart.map((item, idx) => (
                    <div key={idx} className="border p-2 mb-2 rounded">
                        {item.name} - ${item.price}
                    </div>
                ))
            )}
        </div>
    );
}
