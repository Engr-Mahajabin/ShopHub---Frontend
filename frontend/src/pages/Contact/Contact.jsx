import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageSquare,
} from "lucide-react";

// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact form submitted:", formData);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* <Navbar /> */}

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-gray-50 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Have questions? Reach out and we’ll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        {
                            icon: <Mail className="h-7 w-7 text-blue-600" />,
                            title: "Email Us",
                            desc: "Send us an email anytime",
                            value: "support@shophub.com",
                            href: "mailto:support@shophub.com",
                        },
                        {
                            icon: <Phone className="h-7 w-7 text-blue-600" />,
                            title: "Call Us",
                            desc: "Mon-Fri from 8am to 8pm",
                            value: "+1 (234) 567-890",
                            href: "tel:+1234567890",
                        },
                        {
                            icon: <MapPin className="h-7 w-7 text-blue-600" />,
                            title: "Visit Us",
                            desc: "Come say hello",
                            value: "123 Shopping St, NY 10001",
                        },
                        {
                            icon: <Clock className="h-7 w-7 text-blue-600" />,
                            title: "Working Hours",
                            desc: "Monday - Friday",
                            value: "8:00 AM - 8:00 PM EST",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="border-2 rounded-lg p-6 text-center hover:border-blue-500 transition-all hover:shadow-lg bg-white"
                        >
                            <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                            {item.href ? (
                                <a href={item.href} className="text-sm text-blue-600 hover:underline">
                                    {item.value}
                                </a>
                            ) : (
                                <p className="text-sm text-blue-600">{item.value}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact Form & FAQ */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
                        <p className="text-gray-600 mb-8">
                            Fill out the form below and we'll get back to you within 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {["name", "email", "subject"].map((field) => (
                                <div key={field}>
                                    <label
                                        htmlFor={field}
                                        className="block text-sm font-medium mb-2"
                                    >
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    <input
                                        id={field}
                                        name={field}
                                        type={field === "email" ? "email" : "text"}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        placeholder={`Enter your ${field}`}
                                        className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-300 outline-none"
                                        required
                                    />
                                </div>
                            ))}

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-300 outline-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md flex items-center justify-center gap-2"
                            >
                                <Send className="h-5 w-5" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* FAQ */}
                    <div className="lg:pl-8">
                        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "How can I track my order?",
                                    a: "You'll receive a tracking number via email. You can also check order status in your account.",
                                },
                                {
                                    q: "What is your return policy?",
                                    a: "We offer a 30-day return policy for most items. Products must be in original condition with tags.",
                                },
                                {
                                    q: "Do you ship internationally?",
                                    a: "Yes! We ship to over 100 countries worldwide. Shipping costs and times vary by location.",
                                },
                                {
                                    q: "How do I contact support?",
                                    a: "You can reach us via email, phone, or this contact form. We're available 24/7 to help.",
                                },
                            ].map((faq, i) => (
                                <div
                                    key={i}
                                    className="border rounded-lg p-4 flex gap-3 bg-white"
                                >
                                    <MessageSquare className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-2">{faq.q}</h3>
                                        <p className="text-sm text-gray-600">{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Find Us</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center border">
                            <div>
                                <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-500" />
                                <p className="font-semibold">ShopHub Headquarters</p>
                                <p>123 Shopping Street, New York, NY 10001</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
}
