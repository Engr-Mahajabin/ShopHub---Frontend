import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/login`,
                {
                    email: formData.email,
                    password: formData.password
                }
            );

            // Save token
            localStorage.setItem("token", res.data.token);

            alert("Login successful!");
            navigate("/");
        } catch (err) {
            console.error(err);
            alert("Login failed. Check your credentials.");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full border p-2 rounded"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>
            </form>

            <p className="mt-4 text-center">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-600 underline">
                    Register
                </Link>
            </p>
        </div>
    );
}
