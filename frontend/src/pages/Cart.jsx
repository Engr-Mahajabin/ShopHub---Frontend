import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";


export default function Cart() {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = cart.length > 0 ? 10 : 0;
    const total = subtotal + shipping;

    const navigate = useNavigate();

    const handleProceedToCheckout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        navigate("/checkout"); // Navigate to checkout page
    };


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center border rounded-2xl shadow-sm py-20 bg-white">
                            <div className="text-gray-500 mb-4">
                                <ShoppingBag className="h-15 w-15" />
                            </div>

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
                        cart.map((item) => (
                            <div key={item._id} className="flex items-center border p-4 rounded-lg">
                                <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded" />
                                <div className="ml-4 flex-1">
                                    <h2 className="font-semibold text-lg">{item.name}</h2>
                                    <p className="text-gray-600">${item.price}</p>
                                    <div className="flex items-center mt-2">
                                        <button
                                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                            className="px-3 py-1 border rounded"
                                        >-</button>
                                        <span className="mx-3">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                            className="px-3 py-1 border rounded"
                                        >+</button>
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
                        ))
                    )}
                </div>

                {/* Order Summary */}
                {cart.length > 0 && (
                    <div className="border p-6 rounded-lg shadow">
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
                            disabled={cart.length === 0}
                            className={`mt-6 w-full py-3 rounded text-white ${cart.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"
                                }`}
                        >
                            Proceed to Checkout
                        </button>

                    </div>
                )}
            </div>
        </div>
    );
}
