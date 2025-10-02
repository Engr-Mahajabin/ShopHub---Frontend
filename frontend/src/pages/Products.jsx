import React, { useState, useEffect } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const { addToCart } = useCart();

    useEffect(() => {
        fetchProducts();
    }, [category, search]);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            let url = "/api/products?limit=50";

            if (category !== "all") {
                url += `&category=${category}`;
            }
            if (search) {
                url += `&search=${search}`;
            }

            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddToCart = async (productId) => {
        await addToCart(productId, 1);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                {/* Page Title + Filters */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-6">Our Products</h1>

                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="pl-10 w-full border rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        {/* Category Filter */}
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="border rounded-md py-2 px-3 w-full md:w-48 focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Categories</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Books">Books</option>
                            <option value="Home & Garden">Home & Garden</option>
                        </select>
                    </div>
                </div>

                {/* Product Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="border rounded-lg p-4 animate-pulse">
                                <div className="h-40 bg-gray-200 mb-4 rounded"></div>
                                <div className="h-4 bg-gray-200 w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-200 w-1/2"></div>
                            </div>
                        ))}
                    </div>
                ) : products.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No products found</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                            >
                                <div className="h-48 bg-gray-100 flex items-center justify-center">
                                    <img
                                        src={`https://source.unsplash.com/400x300/?${product.category.toLowerCase()},${product.name.toLowerCase()}`}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 cursor-pointer">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                                        {product.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold">${product.price}</span>
                                        <span className="text-xs text-gray-500">
                                            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-4 pt-0">
                                    <button
                                        className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md text-white font-medium ${product.stock === 0
                                                ? "bg-gray-400 cursor-not-allowed"
                                                : "bg-blue-600 hover:bg-blue-700"
                                            }`}
                                        onClick={() => handleAddToCart(product.id)}
                                        disabled={product.stock === 0}
                                    >
                                        <ShoppingCart className="h-4 w-4" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Products;
