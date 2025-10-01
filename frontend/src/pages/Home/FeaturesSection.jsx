import React from "react";
export default function FeaturesSection() {
    const features = [
        { title: "Free Shipping", description: "Free delivery on orders over $50", icon: "🚚" },
        { title: "Secure Payment", description: "100% secure payment with SSL", icon: "🔒" },
        { title: "24/7 Support", description: "Dedicated support team available anytime", icon: "📞" },
    ];

    return (
        <section className="py-16 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature) => (
                    <div key={feature.title} className="border p-6 rounded-lg hover:shadow-lg transition text-center">
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
