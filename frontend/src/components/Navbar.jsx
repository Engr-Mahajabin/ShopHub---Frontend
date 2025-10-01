// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//     return (
//         <nav className="bg-blue-600 text-white p-4 flex justify-between">
//             <Link to="/" className="font-bold text-xl">🛒 MyShop</Link>
//             <div className="space-x-4">
//                 <Link to="/products">Products</Link>
//                 <Link to="/cart">Cart</Link>
//                 <Link to="/login">Login</Link>
//             </div>
//         </nav>
//     );
// }

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, Package, Mail, Info, Sparkles, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState(null); // Dummy auth state
    const [cart, setCart] = useState({ items: [] }); // Dummy cart state

    const cartItemsCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);

    const categories = [
        { name: "Electronics", icon: "💻" },
        { name: "Clothing", icon: "👕" },
        { name: "Books", icon: "📚" },
        { name: "Home & Garden", icon: "🏡" },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery);
            setSearchQuery("");
        }
    };

    return (
        <nav className="bg-white border-b sticky top-0 z-50 shadow">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold flex items-center gap-2 text-blue-600">
                    <Package className="h-6 w-6" />
                    ShopHub
                </Link>

                {/* Search Bar - Desktop */}
                <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <input
                            type="search"
                            placeholder="Search products..."
                            className="pl-10 pr-4 py-2 border rounded-md w-full focus:ring focus:ring-blue-200"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </form>

                {/* Links - Desktop */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link to="/products" className="hover:text-blue-600 flex items-center gap-1">
                        <Sparkles className="h-4 w-4" /> All Products
                    </Link>

                    {/* Categories Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-blue-600">
                            Categories <ChevronDown className="h-4 w-4" />
                        </button>
                        <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-md hidden group-hover:block w-48">
                            {categories.map((c) => (
                                <Link
                                    key={c.name}
                                    to={`/products?category=${c.name}`}
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    {c.icon} {c.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link to="/about" className="hover:text-blue-600 flex items-center gap-1">
                        <Info className="h-4 w-4" /> About
                    </Link>
                    <Link to="/contact" className="hover:text-blue-600 flex items-center gap-1">
                        <Mail className="h-4 w-4" /> Contact
                    </Link>
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-3">
                    {/* Cart */}
                    <Link to="/cart" className="relative">
                        <ShoppingCart className="h-5 w-5" />
                        {cartItemsCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                                {cartItemsCount}
                            </span>
                        )}
                    </Link>

                    {/* Auth */}
                    {user ? (
                        <button onClick={() => setUser(null)} className="flex items-center gap-1 hover:text-blue-600">
                            <User className="h-5 w-5" /> Logout
                        </button>
                    ) : (
                        <Link to="/login" className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-md">
                            <User className="h-4 w-4" /> Sign In
                        </Link>
                    )}

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="md:hidden px-4 pb-2">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <input
                        type="search"
                        placeholder="Search products..."
                        className="pl-10 pr-4 py-2 border rounded-md w-full focus:ring focus:ring-blue-200"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </form>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t p-4 space-y-2">
                    <Link to="/products" className="block hover:text-blue-600">
                        All Products
                    </Link>
                    {categories.map((c) => (
                        <Link
                            key={c.name}
                            to={`/products?category=${c.name}`}
                            className="block hover:text-blue-600"
                        >
                            {c.icon} {c.name}
                        </Link>
                    ))}
                    <Link to="/about" className="block hover:text-blue-600">
                        About
                    </Link>
                    <Link to="/contact" className="block hover:text-blue-600">
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
