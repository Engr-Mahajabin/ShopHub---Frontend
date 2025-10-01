import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-br from-white to-blue-200 py-20 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to ShopHub</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-500">
                Discover amazing products at unbeatable prices. Your one-stop shop for everything you need. Shop with confidence and enjoy free shipping on orders over $50!
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
                    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-200 transition"
                >
                    Sign Up Free
                </Link>
            </div>
        </section>
    );
}
