import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const res = await axios.post("http://localhost:5000/register", {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
            alert("User registered successfully!");
            navigate("/login"); // redirect to login page
        } catch (err) {
            console.error(err);
            alert("Registration failed. Check console for error.");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full border p-2 rounded"
                    value={formData.name}
                    onChange={handleChange}
                />
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
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full border p-2 rounded"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                    Register
                </button>
            </form>

            <p className="mt-4 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 underline">
                    Login
                </Link>
            </p>
        </div>
    );
}
