import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FeaturedProductsSection() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/products?featured=true&limit=6")
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="py-16 container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Featured Products</h2>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="border p-4 animate-pulse h-64"></div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((p) => (
                        <div key={p.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                            <img
                                src={`https://source.unsplash.com/400x300/?${p.category.toLowerCase()}`}
                                alt={p.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{p.name}</h3>
                                <p className="text-gray-600 text-sm line-clamp-2">{p.description}</p>
                                <div className="text-xl font-bold mt-2">${p.price}</div>
                                <Link
                                    to={`/product/${p.id}`}
                                    className="mt-2 block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
                                >
                                    Add to Cart
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
