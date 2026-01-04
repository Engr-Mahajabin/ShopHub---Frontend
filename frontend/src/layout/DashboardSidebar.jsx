import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, UserPlus, Users, ShoppingBag, Settings, LogOut } from 'lucide-react';

const DashboardSidebar = () => {
    return (
        <div className="h-screen w-64 bg-slate-900 text-white flex flex-col shadow-xl">
            {/* Logo Section */}
            <div className="p-6 border-b border-slate-700">
                <h1 className="text-2xl font-bold text-blue-400 tracking-tight">Admin Panel</h1>
            </div>

            {/* Navigation Options */}
            <nav className="flex-1 p-4 space-y-2">
                {/* Admin Home / Dashboard */}
                <NavLink
                    to="/dashboard/admin"
                    className={({ isActive }) => `flex items-center space-x-3 w-full p-3 rounded-lg transition-all ${isActive ? 'bg-slate-800 text-blue-400' : 'hover:bg-slate-800'}`}
                >
                    <LayoutGrid size={20} />
                    <span>Dashboard</span>
                </NavLink>

                {/* Add Vendor Option */}
                <NavLink
                    to="/dashboard/admin/add-vendor"
                    className={({ isActive }) => `flex items-center space-x-3 w-full p-3 rounded-lg transition-all ${isActive ? 'bg-blue-600' : 'hover:bg-slate-800 text-slate-300'}`}
                >
                    <UserPlus size={20} />
                    <span>Add Vendor</span>
                </NavLink>

                {/* All Vendors Option */}
                <NavLink
                    to="/dashboard/admin/all-vendors"
                    className={({ isActive }) => `flex items-center space-x-3 w-full p-3 rounded-lg transition-all ${isActive ? 'bg-slate-800 text-blue-400' : 'hover:bg-slate-800 text-slate-300'}`}
                >
                    <Users size={20} />
                    <span>All Vendors</span>
                </NavLink>

                <NavLink to="/dashboard/admin/orders" className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-slate-800 transition-all text-slate-300">
                    <ShoppingBag size={20} />
                    <span>Orders</span>
                </NavLink>

                <div className="pt-4 border-t border-slate-700 mt-4">
                    <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-slate-800 transition-all text-slate-400">
                        <Settings size={20} />
                        <span>Settings</span>
                    </button>
                    <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-red-900/20 text-red-400 transition-all">
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </nav>

            {/* Admin Profile Mini Section */}
            <div className="p-4 bg-slate-800 border-t border-slate-700 flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">A</div>
                <div>
                    <p className="text-sm font-medium">Main Admin</p>
                    <p className="text-xs text-slate-400">Admin Account</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;