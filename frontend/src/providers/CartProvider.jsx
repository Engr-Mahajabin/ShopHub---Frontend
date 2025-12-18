import { useState } from "react";
import { CartContext } from "../context/CartContext";

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product, qty = 1) => {
        setCart((prev) => {
            const exists = prev.find((item) => item._id === product._id);

            if (exists) {
                return prev.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + qty }
                        : item
                );
            }

            return [...prev, { ...product, quantity: qty }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item._id !== id));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
}
