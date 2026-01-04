import React, { useEffect, useState } from 'react';
import VendorTable from '../../../components/vendor/VendorTable';

const AllVendors = () => {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        const savedVendors = JSON.parse(localStorage.getItem('my_vendors') || '[]');

        setVendors(savedVendors);
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-slate-800">All Registered Vendors</h1>

            {vendors.length > 0 ? (
                <VendorTable vendors={vendors} />
            ) : (
                <div className="bg-white p-10 text-center rounded-xl shadow-sm border">
                    <p className="text-slate-500">No vendors added yet!</p>
                </div>
            )}
        </div>
    );
};

export default AllVendors;