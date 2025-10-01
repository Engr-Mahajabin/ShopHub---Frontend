import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-br from-blue-100 to-white py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to ShopHub</h1>
            <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
                Discover amazing products at unbeatable prices. Shop with confidence!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    to="/products"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Browse Products
                </Link>
                <Link
                    to="/register"
                    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
                >
                    Sign Up Free
                </Link>
            </div>
        </section>
    );
}
