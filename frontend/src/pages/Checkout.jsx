import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function CheckoutPage() {
    const { cart, updateCart } = useCart();
    const { user } = useAuth();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [shippingAddress, setShippingAddress] = useState("");
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: "",
    });

    useEffect(() => {
        if (!user) return;

        setShippingAddress(user.address || "");

        if (cart?.length > 0) {
            // Map cart to include product info directly (assuming cart already has product info)
            setCartItems(cart);
        } else {
            setCartItems([]);
        }
        setLoading(false);
    }, [cart, user]);

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!shippingAddress.trim()) return alert("Please enter a shipping address");
        if (!paymentInfo.cardNumber || !paymentInfo.cardName || !paymentInfo.expiryDate || !paymentInfo.cvv)
            return alert("Please fill in all payment details");

        try {
            setSubmitting(true);

            const orderItems = cartItems.map((item) => ({
                productId: item.id,
                quantity: item.quantity,
                price: item.price,
            }));

            const totalAmount = calculateSubtotal() + 10;

            // Simulate API call
            console.log("Order placed:", { userId: user.id, items: orderItems, totalAmount, shippingAddress });

            await updateCart([]);
            alert("Order placed successfully!");
        } catch (err) {
            console.error(err);
            alert("Failed to place order");
        } finally {
            setSubmitting(false);
        }
    };

    if (!user) return <p>Please login to proceed</p>;

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Checkout</h1>

                {loading ? (
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 space-y-6">
                            <div className="bg-white rounded shadow p-6 h-64 animate-pulse"></div>
                        </div>
                        <div>
                            <div className="bg-white rounded shadow p-6 h-48 animate-pulse"></div>
                        </div>
                    </div>
                ) : cartItems.length === 0 ? (
                    <p className="text-center text-lg">Your cart is empty.</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-2 space-y-6">
                                {/* Shipping Info */}
                                <div className="bg-white rounded shadow p-6 space-y-4">
                                    <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                                    <div>
                                        <label className="block mb-1 font-medium">Full Name</label>
                                        <input value={user.name} disabled className="w-full border rounded p-2" />
                                    </div>
                                    <div>
                                        <label className="block mb-1 font-medium">Email</label>
                                        <input value={user.email} disabled className="w-full border rounded p-2" />
                                    </div>
                                    <div>
                                        <label className="block mb-1 font-medium">Shipping Address *</label>
                                        <input
                                            value={shippingAddress}
                                            onChange={(e) => setShippingAddress(e.target.value)}
                                            placeholder="123 Main St, City, State, ZIP"
                                            className="w-full border rounded p-2"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Payment Info */}
                                <div className="bg-white rounded shadow p-6 space-y-4">
                                    <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                                    <div className="bg-gray-100 p-4 rounded text-sm">
                                        <p className="font-semibold mb-1">Demo Payment</p>
                                        <p className="text-gray-600">Use any values for payment info.</p>
                                    </div>
                                    <div>
                                        <label className="block mb-1 font-medium">Card Number *</label>
                                        <input
                                            value={paymentInfo.cardNumber}
                                            onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                                            placeholder="1234 5678 9012 3456"
                                            className="w-full border rounded p-2"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1 font-medium">Cardholder Name *</label>
                                        <input
                                            value={paymentInfo.cardName}
                                            onChange={(e) => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })}
                                            placeholder="John Doe"
                                            className="w-full border rounded p-2"
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block mb-1 font-medium">Expiry Date *</label>
                                            <input
                                                value={paymentInfo.expiryDate}
                                                onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
                                                placeholder="MM/YY"
                                                className="w-full border rounded p-2"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 font-medium">CVV *</label>
                                            <input
                                                value={paymentInfo.cvv}
                                                onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                                                placeholder="123"
                                                className="w-full border rounded p-2"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div>
                                <div className="bg-white rounded shadow p-6 sticky top-24 space-y-4">
                                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                                    <div className="space-y-2">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="flex justify-between text-sm">
                                                <span>{item.name} × {item.quantity}</span>
                                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t pt-4 space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Subtotal</span>
                                            <span className="font-semibold">${calculateSubtotal().toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Shipping</span>
                                            <span className="font-semibold">$10.00</span>
                                        </div>
                                        <div className="flex justify-between text-lg font-bold pt-2 border-t">
                                            <span>Total</span>
                                            <span>${(calculateSubtotal() + 10).toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 disabled:opacity-50"
                                        disabled={submitting}
                                    >
                                        {submitting ? "Placing Order..." : "Place Order"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
