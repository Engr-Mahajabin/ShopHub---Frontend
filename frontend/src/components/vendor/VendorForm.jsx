import React, { useState } from 'react';

const VendorForm = ({ onAdd }) => {
    const [vendor, setVendor] = useState({ name: '', email: '', shop: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(vendor);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text" placeholder="Owner Name" required
                className="w-full p-2 border rounded-md"
                onChange={(e) => setVendor({ ...vendor, name: e.target.value })}
            />
            <input
                type="email" placeholder="Email" required
                className="w-full p-2 border rounded-md"
                onChange={(e) => setVendor({ ...vendor, email: e.target.value })}
            />
            <input
                type="text" placeholder="Shop Name" required
                className="w-full p-2 border rounded-md"
                onChange={(e) => setVendor({ ...vendor, shop: e.target.value })}
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded-md">Add Vendor</button>
        </form>
    );
};

export default VendorForm;