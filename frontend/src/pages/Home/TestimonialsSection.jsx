import React from "react";
export default function TestimonialsSection() {
    const testimonials = [
        { name: "Sarah Johnson", role: "Verified Buyer", review: "Amazing products and fast delivery!", rating: 5 },
        { name: "Michael Chen", role: "Premium Member", review: "Best online shopping experience ever.", rating: 5 },
        { name: "Emily Davis", role: "Verified Buyer", review: "Great prices, fast shipping, excellent support.", rating: 5 },
    ];

    return (
        <section className="py-16 container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">What Our Customers Say</h2>
            <p className="text-center mb-12 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust ShopHub for their shopping needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="border p-6 rounded-lg hover:shadow-lg transition">
                        <div className="flex items-center gap-2 mb-4">
                            {"⭐".repeat(t.rating)}
                        </div>
                        <p className="italic text-gray-600 mb-4">"{t.review}"</p>
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <div className="font-semibold">{t.name}</div>
                                <div className="text-sm text-gray-500">{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
