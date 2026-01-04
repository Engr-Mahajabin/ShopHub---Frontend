import React from 'react';

const VendorTable = ({ vendors }) => {
    return (
        <table className="w-full bg-white rounded-lg overflow-hidden shadow">
            <thead className="bg-slate-100">
                <tr>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Shop</th>
                    <th className="p-3 text-left">Email</th>
                </tr>
            </thead>
            <tbody>
                {vendors.map((v, i) => (
                    <tr key={i} className="border-b">
                        <td className="p-3">{v.name}</td>
                        <td className="p-3">{v.shop}</td>
                        <td className="p-3">{v.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default VendorTable;