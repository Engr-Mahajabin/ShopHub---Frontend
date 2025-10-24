import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

export default function Cart() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
    const navigate = useNavigate();

    const subtotal = cart.reduce(
        (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
        0
    );
    const shipping = cart.length > 0 ? 10 : 0;
    const total = subtotal + shipping;

    const handleProceedToCheckout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        navigate("/checkout");
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

            {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center border rounded-2xl shadow-sm py-20 bg-white">
                    <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                    <p className="text-gray-500 mb-6">Add some products to get started</p>
                    <button
                        onClick={() => navigate("/products")}
                        className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800"
                    >
                        Browse Products
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        {cart.map((item) => (
                            <div
                                key={item._id}
                                className="flex items-center border p-4 rounded-lg bg-white gap-4"
                            >
                                <img
                                    src={item.imageUrl || "https://via.placeholder.com/80"}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded"
                                />
                                <div className="flex-1">
                                    <h2 className="font-semibold text-lg">{item.name}</h2>
                                    <p className="text-gray-600">${item.price}</p>
                                    <div className="flex items-center mt-2 gap-2">
                                        <button
                                            onClick={() =>
                                                updateQuantity(item._id, item.quantity - 1)
                                            }
                                            className="px-3 py-1 border rounded"
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() =>
                                                updateQuantity(item._id, item.quantity + 1)
                                            }
                                            className="px-3 py-1 border rounded"
                                        >
                                            +
                                        </button>
                                        <span className="ml-4 text-sm text-gray-500">
                                            ({item.stock || 50} available)
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item._id)}
                                    className="text-red-500 hover:text-red-700 ml-4"
                                >
                                    🗑
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="border p-6 rounded-lg shadow bg-white">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button
                            onClick={handleProceedToCheckout}
                            className="mt-6 w-full py-3 rounded bg-black text-white hover:bg-gray-800"
                        >
                            Proceed to Checkout
                        </button>
                        <button
                            onClick={clearCart}
                            className="mt-3 w-full py-2 rounded bg-red-600 text-white hover:bg-red-700"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
