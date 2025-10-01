import React from "react";
export default function StatsSection() {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
                <div>
                    <div className="text-3xl font-bold">50K+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                    <div className="text-3xl font-bold">10K+</div>
                    <div className="text-sm text-gray-600">Products</div>
                </div>
                <div>
                    <div className="text-3xl font-bold">99%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div>
                    <div className="text-3xl font-bold">4.9/5</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                </div>
            </div>
        </section>
    );
}
