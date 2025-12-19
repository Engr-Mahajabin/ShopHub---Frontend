import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Package } from "lucide-react";
import { useDispatch } from "react-redux";
import { admin_login } from "../../store/Reducers/authSlice";

export default function Login() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(admin_login(formData));
        // console.log("Admin Login:", formData);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-6 rounded shadow w-full max-w-md">

                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-2xl font-bold text-blue-600"
                    >
                        <Package className="h-6 w-6" />
                        ShopHub
                    </Link>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full border p-2 rounded"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full border p-2 rounded"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
