import React from "react";
import { useState } from "react";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Subscribed:", email);
        setEmail("");
    };

    return (
        <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-50">
            <div className="container mx-auto px-4 text-center max-w-lg">
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-gray-600 mb-6">
                    Get the latest updates on new products, exclusive deals, and special offers!
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    )
};