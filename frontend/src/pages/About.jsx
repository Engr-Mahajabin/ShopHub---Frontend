import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award, Users, TrendingUp, Heart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-100 via-blue-50 to-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">About ShopHub</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Your trusted partner in online shopping since 2020. We're committed to providing the best products and exceptional customer service.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
                    <p className="mb-4 text-gray-600">
                        ShopHub was founded with a simple mission: to make quality products accessible to everyone, everywhere. What started as a small online store has grown into a thriving marketplace serving over 50,000 happy customers worldwide.
                    </p>
                    <p className="mb-4 text-gray-600">
                        We believe that shopping should be easy, enjoyable, and most importantly, trustworthy. That's why we've built our business on three core principles: quality products, fair prices, and exceptional customer service.
                    </p>
                    <p className="text-gray-600">
                        Today, we offer over 10,000 products across multiple categories, from electronics to home goods, all carefully selected to meet our high standards.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                    <div className="border-2 p-6 rounded-lg bg-white">
                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <Target className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                                <p className="text-gray-600">
                                    To provide customers with access to high-quality products at competitive prices, backed by exceptional service and a seamless shopping experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 p-6 rounded-lg bg-white">
                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <Eye className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                                <p className="text-gray-600">
                                    To become the world's most trusted e-commerce platform, where every purchase is backed by quality assurance, transparent pricing, and customer satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Award, title: "Quality First", desc: "We never compromise on quality. Every product is carefully vetted to meet our standards." },
                        { icon: Heart, title: "Customer Obsessed", desc: "Your satisfaction is our top priority. We go above and beyond to ensure you're happy." },
                        { icon: TrendingUp, title: "Innovation Driven", desc: "We continuously improve our platform and services to provide the best experience." }
                    ].map((val, i) => (
                        <div key={i} className="border-2 p-6 rounded-lg hover:shadow-lg transition">
                            <div className="text-center">
                                <div className="h-16 w-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                                    <val.icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{val.title}</h3>
                                <p className="text-gray-600">{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Meet Our Team</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Behind ShopHub is a dedicated team of passionate individuals working hard to bring you the best.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { name: "John Smith", role: "CEO & Founder", initial: "J" },
                            { name: "Sarah Johnson", role: "Head of Operations", initial: "S" },
                            { name: "Michael Chen", role: "Customer Success", initial: "M" },
                            { name: "Emily Davis", role: "Product Manager", initial: "E" },
                        ].map((member, idx) => (
                            <div key={idx} className="border-2 p-6 rounded-lg text-center bg-white hover:shadow-lg">
                                <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-blue-600">
                                    {member.initial}
                                </div>
                                <h3 className="font-semibold text-lg">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 py-16">
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-12 text-center">
                    <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Become part of our growing family of satisfied customers. Start shopping with confidence today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                            Start Shopping <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link to="/contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
