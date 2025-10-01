import React from "react";
import { Link } from "react-router-dom";

export default function CategoriesSection() {
    const categories = ["Electronics", "Clothing", "Books", "Home & Garden"];

    return (
        <section className="py-16 bg-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((cat) => (
                    <Link key={cat} to={`/products?category=${cat}`}>
                        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition text-center p-4">
                            <div className="h-32 flex items-center justify-center mb-4 overflow-hidden rounded-lg">
                                <img
                                    src={`https://source.unsplash.com/300x300/?${cat.toLowerCase()}`}
                                    alt={cat}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-semibold text-lg">{cat}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
