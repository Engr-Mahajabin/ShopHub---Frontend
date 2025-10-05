import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FeaturedProductsSection() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/api/products") // adjust backend URL/port if needed
            .then(res => res.json())
            .then(data => {
                const featured = data.filter(p => p.featured);
                setProducts(featured);
            })
            .catch(err => console.error("Error fetching products:", err))
            .finally(() => setLoading(false));
    }, []);

    // Handle Add to Cart
    const handleAddToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ ...product, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        navigate("/cart"); // 👈 take user to Cart page
    };

    return (
        <section className="py-16 container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-3xl font-bold">Featured Products</h2>
                    <p className="text-gray-600">Check out our handpicked selection of top products</p>
                </div>
                <Link
                    to="/products"
                    className="border px-4 py-2 rounded hover:bg-gray-100 transition"
                >
                    View All →
                </Link>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="border p-4 animate-pulse h-64"></div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((p) => (
                        <div
                            key={p._id}
                            className="border rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col"
                        >
                            {/* Product Image */}
                            <div className="relative bg-gray-100">
                                <img
                                    src={p.imageUrl}
                                    alt={p.name}
                                    className="w-full h-48 object-cover"
                                />
                                {p.featured && (
                                    <span className="absolute top-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-full shadow">
                                        Featured
                                    </span>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="p-4 flex-1 flex flex-col">
                                <h3 className="font-semibold text-lg">{p.name}</h3>
                                <p className="text-gray-600 text-sm flex-1">{p.description}</p>
                                <div className="text-xl font-bold mt-2">${p.price}</div>

                                {/* Add to Cart */}
                                <button
                                    onClick={() => handleAddToCart(p)}
                                    className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 flex items-center justify-center gap-2"
                                >
                                    🛒 Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
