import React from "react";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                {/* Top Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        {/* <h3 className="font-bold text-lg mb-4">ShopHub</h3> */}
                        <Link to="/" className="text-2xl font-bold flex items-center gap-2 text-blue-600">
                            <Package className="h-6 w-6" />
                            ShopHub
                        </Link>
                        <p className="text-sm text-gray-600">
                            Your trusted online shopping destination for quality products at great prices.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link to="/products" className="hover:text-blue-600">Products</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-blue-600">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-blue-600">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link to="#" className="hover:text-blue-600">FAQ</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-blue-600">Shipping Info</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-blue-600">Returns</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="font-semibold mb-4">Follow Us</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <a href="#" className="hover:text-blue-600">Facebook</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">Twitter</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t pt-8 text-center text-gray-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
                    <p className="mt-2">Built by - Mahajabin Akter Ritu</p>
                </div>
            </div>
        </footer>
    );
}
