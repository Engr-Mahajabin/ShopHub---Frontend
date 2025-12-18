// import { useContext, createContext, useState, useEffect } from "react";

// // Create CartContext
// const CartContext = createContext();

// // CartProvider Component
// export function CartProvider({ children }) {
//     const [cart, setCart] = useState([]);

//     // Example addToCart function
//     const addToCart = (product) => {
//         setCart((prev) => {
//             const exists = prev.find((item) => item.id === product.id);
//             if (exists) {
//                 return prev.map((item) =>
//                     item.id === product.id
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 );
//             } else {
//                 return [...prev, { ...product, quantity: 1 }];
//             }
//         });
//     };

//     // Example removeFromCart
//     const removeFromCart = (productId) => {
//         setCart((prev) => prev.filter((item) => item.id !== productId));
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// }

// // Custom Hook
// export default function useCart() {
//     const context = useContext(CartContext);
//     if (!context) throw new Error("useCart must be used within CartProvider");
//     return context;
// }

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }

    return context;
}

