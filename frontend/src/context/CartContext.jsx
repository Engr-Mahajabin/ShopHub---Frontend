// import React, { createContext, useState, useEffect, useContext } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState(() => {
//         const savedCart = localStorage.getItem("cart");
//         return savedCart ? JSON.parse(savedCart) : [];
//     });

//     useEffect(() => {
//         localStorage.setItem("cart", JSON.stringify(cart));
//     }, [cart]);

//     const addToCart = (product) => {
//         setCart((prev) => {
//             const existing = prev.find((item) => item._id === product._id);
//             if (existing) {
//                 return prev.map((item) =>
//                     item._id === product._id
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 );
//             }
//             return [...prev, { ...product, quantity: 1 }];
//         });
//     };

//     const removeFromCart = (id) => {
//         setCart((prev) => prev.filter((item) => item._id !== id));
//     };

//     const updateQuantity = (id, qty) => {
//         setCart((prev) =>
//             prev.map((item) =>
//                 item._id === id ? { ...item, quantity: Math.max(1, qty) } : item
//             )
//         );
//     };

//     const clearCart = () => setCart([]);

//     return (
//         <CartContext.Provider
//             value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
//         >
//             {children}
//         </CartContext.Provider>
//     );
// };

// // ✅ Add this export
// export const useCart = () => useContext(CartContext);

import { createContext } from "react";

export const CartContext = createContext(null);
