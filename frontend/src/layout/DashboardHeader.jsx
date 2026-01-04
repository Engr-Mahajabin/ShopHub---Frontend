import React from 'react';
import { Bell, Search, Menu, User } from 'lucide-react';

const DashboardHeader = () => {
    return (
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8 sticky top-0 z-10">

            {/* Left Side: Search Bar */}
            <div className="flex items-center flex-1">
                <div className="relative w-96">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                        <Search size={18} />
                    </span>
                    <input
                        type="text"
                        placeholder="Search for vendors, orders, or data..."
                        className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md leading-5 bg-slate-50 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
                    />
                </div>
            </div>

            {/* Right Side: Icons and Profile */}
            <div className="flex items-center space-x-6">

                {/* Notification Icon */}
                <button className="relative text-slate-600 hover:text-blue-600 transition-colors">
                    <Bell size={22} />
                    <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
                </button>

                {/* Vertical Divider */}
                <div className="h-8 w-px bg-slate-200"></div>

                {/* Admin Profile Details */}
                <div className="flex items-center space-x-3 cursor-pointer group">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">Admin</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-600 group-hover:bg-blue-50 transition-all">
                        <User size={24} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;