// import { NavLink } from "react-router-dom";
// import {
//     FaHome, FaShoppingCart, FaUsers, FaUtensils,
//     FaWallet, FaStar, FaCalendarCheck, FaShopify
// } from "react-icons/fa";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";
// import useVendor from "../hooks/useVendor";

// // import useAdmin from "../hooks/useAdmin";
// // import useVendor from "../hooks/useVendor";
// // import useCart from "../hooks/useCart";

// export default function DashboardSidebar() {
//     const [cart] = useCart();
//     const isAdmin = useAdmin();
//     const isVendor = useVendor();

//     return (
//         <div className="w-64 min-h-screen bg-orange-400">
//             <h1 className="text-2xl font-bold p-4">MultiVendor Shop</h1>
//             <ul className="menu p-4 space-y-2">

//                 {/* USER */}
//                 {!isAdmin && !isVendor && (
//                     <>
//                         <li><NavLink to="/dashboard/user">User Home</NavLink></li>
//                         <li><NavLink to="/dashboard/cart">
//                             <FaShoppingCart /> Cart ({cart.length})
//                         </NavLink></li>
//                         <li><NavLink to="/dashboard/addReview">
//                             <FaStar /> Review
//                         </NavLink></li>
//                     </>
//                 )}

//                 {/* VENDOR */}
//                 {isVendor && (
//                     <>
//                         <li><NavLink to="/dashboard/vendor">Vendor Home</NavLink></li>
//                         <li><NavLink to="/dashboard/vendor/products">
//                             <FaUtensils /> My Products
//                         </NavLink></li>
//                         <li><NavLink to="/dashboard/vendor/orders">
//                             <FaCalendarCheck /> Orders
//                         </NavLink></li>
//                     </>
//                 )}

//                 {/* ADMIN */}
//                 {isAdmin && (
//                     <>
//                         <li><NavLink to="/dashboard/admin">Admin Home</NavLink></li>
//                         <li><NavLink to="/dashboard/admin/users">
//                             <FaUsers /> Users
//                         </NavLink></li>
//                     </>
//                 )}

//                 <div className="divider" />

//                 {/* PUBLIC */}
//                 <li><NavLink to="/">Home</NavLink></li>
//                 <li><NavLink to="/shop/all">
//                     <FaShopify /> Shop
//                 </NavLink></li>
//             </ul>
//         </div>
//     );
// }

import React from 'react';

const DashboardSidebar = () => {
    return (
        <div>
            <h1>Dashboard Sidebar</h1>
        </div>
    );
};

export default DashboardSidebar;