import React from 'react';
import { useNavigate } from 'react-router-dom';
import VendorForm from '../../../components/vendor/VendorForm';

const AddVendor = () => {
    const navigate = useNavigate();

    const handleAddVendor = (newVendor) => {
        const currentVendors = JSON.parse(localStorage.getItem('my_vendors') || '[]');

        const updatedVendors = [...currentVendors, newVendor];

        localStorage.setItem('my_vendors', JSON.stringify(updatedVendors));

        navigate('/dashboard/admin/all-vendors');
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-slate-800">Add New Vendor</h1>
            <div className="max-w-xl bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <VendorForm onAdd={handleAddVendor} />
            </div>
        </div>
    );
};

export default AddVendor;