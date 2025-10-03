import React, { useState, useEffect } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import axios from "axios";

function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const { addToCart } = useCart();

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [products, search, category]);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:5000/api/products"); // backend URL
            if (Array.isArray(response.data)) {
                setProducts(response.data);
            } else {
                console.error("Invalid data from backend:", response.data);
                setProducts([]);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    const filterProducts = () => {
        let temp = [...products];

        // Category filter
        if (category !== "all") {
            temp = temp.filter((p) => p.category.toLowerCase() === category.toLowerCase());
        }

        // Search filter
        if (search.trim() !== "") {
            temp = temp.filter((p) =>
                p.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredProducts(temp);
    };

    const handleAddToCart = (productId) => {
        addToCart(productId, 1);
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
                            <option value="Home">Home</option>
                            <option value="Sports">Sports</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                    </div>
                </div>

                {/* Product Grid */}
                {loading ? (
                    <p>Loading products...</p>
                ) : filteredProducts.length === 0 ? (
                    <p>No products found</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product._id}
                                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                            >
                                <div className="h-48 bg-gray-100 flex items-center justify-center">
                                    <img
                                        src={product.imageUrl}
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
                                            {product.stock > 0
                                                ? `${product.stock} in stock`
                                                : "Out of stock"}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-4 pt-0">
                                    <button
                                        className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md text-white font-medium ${product.stock === 0
                                                ? "bg-gray-400 cursor-not-allowed"
                                                : "bg-blue-600 hover:bg-blue-700"
                                            }`}
                                        onClick={() => handleAddToCart(product._id)}
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
