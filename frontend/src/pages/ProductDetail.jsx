import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowLeft, Minus, Plus } from "lucide-react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        if (id) fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/products/${id}`);
            if (!res.ok) throw new Error("Failed to fetch");
            const data = await res.json();
            setProduct(data);
        } catch (err) {
            console.error("Error fetching product:", err);
            navigate("/products");
        } finally {
            setLoading(false);
        }
    };

    const handleAddToCart = () => {
        if (product) {
            addToCart(product, quantity);
            alert(`${product.name} added to cart!`);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="container mx-auto px-4 py-10">
                    <div className="animate-pulse space-y-6">
                        <div className="h-6 w-32 bg-gray-300 rounded"></div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="h-[400px] bg-gray-300 rounded"></div>
                            <div className="space-y-4">
                                <div className="h-10 w-1/2 bg-gray-300 rounded"></div>
                                <div className="h-6 w-24 bg-gray-300 rounded"></div>
                                <div className="h-20 w-full bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!product) return null;

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-gray-600 hover:text-black mb-6"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Products
                </button>

                {/* Product Details Section */}
                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Product Image */}
                    <div className="border rounded-xl p-4 shadow-sm bg-gray-50">
                        <img
                            src={product.imageUrl || `https://source.unsplash.com/800x600/?${product.name}`}
                            alt={product.name}
                            className="w-full h-[400px] object-contain rounded-lg"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm text-gray-500">{product.category}</p>
                            <h1 className="text-3xl font-bold">{product.name}</h1>
                            <p className="text-2xl font-semibold text-gray-900 mt-2">${product.price}</p>
                            {product.stock > 0 ? (
                                <p className="text-sm text-green-600 mt-1">
                                    ✓ In Stock ({product.stock} available)
                                </p>
                            ) : (
                                <p className="text-sm text-red-600 mt-1">✗ Out of Stock</p>
                            )}
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-2">Description</h2>
                            <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        </div>

                        {/* Quantity & Add to Cart */}
                        <div className="border rounded-lg p-6 bg-gray-50 shadow-sm space-y-4">
                            <div>
                                <label className="text-sm font-medium mb-2 block">Quantity</label>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        disabled={quantity <= 1}
                                        className="p-2 border rounded hover:bg-gray-100 disabled:opacity-50"
                                    >
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="text-xl font-semibold w-10 text-center">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                        disabled={quantity >= product.stock}
                                        className="p-2 border rounded hover:bg-gray-100 disabled:opacity-50"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                disabled={product.stock === 0}
                                className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
