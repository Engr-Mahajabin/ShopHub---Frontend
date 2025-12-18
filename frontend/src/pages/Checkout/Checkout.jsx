import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function Checkout() {
    const { cart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [shippingAddress, setShippingAddress] = useState("");
    const [payment, setPayment] = useState({
        cardNumber: "",
        cardName: "",
        expiry: "",
        cvv: "",
    });

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = cart.length > 0 ? 10 : 0;
    const total = subtotal + shipping;

    const handlePlaceOrder = () => {
        if (cart.length === 0) return alert("Cart is empty!");
        alert("Order placed successfully!");
        clearCart();
        navigate("/");
    };

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[70vh]">
                <h2 className="text-2xl font-semibold mb-4">Your cart is empty.</h2>
                <button
                    onClick={() => navigate("/")}
                    className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                    Back to Shop
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Forms */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Shipping Info */}
                    <div className="border rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full border rounded px-3 py-2"
                                    placeholder="John Customer"
                                    disabled
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full border rounded px-3 py-2"
                                    placeholder="customer@email.com"
                                    disabled
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Shipping Address *</label>
                                <input
                                    type="text"
                                    value={shippingAddress}
                                    onChange={(e) => setShippingAddress(e.target.value)}
                                    className="w-full border rounded px-3 py-2"
                                    placeholder="456 Customer Ave, City, ZIP"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Payment Info */}
                    <div className="border rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>

                        <div className="bg-gray-100 text-sm p-3 rounded mb-4">
                            <p className="font-medium mb-1">Demo Payment</p>
                            <p>This is a demo. Use any values for payment info.</p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Card Number *</label>
                                <input
                                    type="text"
                                    value={payment.cardNumber}
                                    onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                                    placeholder="1234 5678 9012 3456"
                                    className="w-full border rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Cardholder Name *</label>
                                <input
                                    type="text"
                                    value={payment.cardName}
                                    onChange={(e) => setPayment({ ...payment, cardName: e.target.value })}
                                    placeholder="John Doe"
                                    className="w-full border rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Expiry Date *</label>
                                    <input
                                        type="text"
                                        value={payment.expiry}
                                        onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
                                        placeholder="MM/YY"
                                        className="w-full border rounded px-3 py-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">CVV *</label>
                                    <input
                                        type="text"
                                        value={payment.cvv}
                                        onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
                                        placeholder="123"
                                        className="w-full border rounded px-3 py-2"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Order Summary */}
                <div className="border rounded-lg p-6 h-fit">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-2 mb-4">
                        {cart.map((item) => (
                            <div key={item._id} className="flex justify-between text-sm">
                                <span>{item.name} × {item.quantity}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-2">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <button
                        onClick={handlePlaceOrder}
                        className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}
