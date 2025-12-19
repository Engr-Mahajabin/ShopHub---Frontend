import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "user" // user | seller
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Register User:", formData);

        // if (formData.password !== formData.confirmPassword) {
        //     alert("Passwords do not match");
        //     return;
        // }

        // try {
        //     setLoading(true);

        //     const res = await axios.post(
        //         `${import.meta.env.VITE_API_URL}/api/users/register`,
        //         // "https://shophub-2g5d.onrender.com/api/users",
        //         {
        //             type: "register",
        //             name: formData.name,
        //             email: formData.email,
        //             password: formData.password,
        //             role: formData.role
        //         }
        //     );

        //     // 🔐 Save JWT + user (auto login after register)
        //     localStorage.setItem("token", res.data.token);
        //     localStorage.setItem("user", JSON.stringify(res.data.user));

        //     alert("Registration successful");
        //     navigate("/");
        // } catch (err) {
        //     console.error(err);
        //     alert(err.response?.data?.message || "Registration failed");
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-6 rounded shadow w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="w-full border p-2 rounded"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

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

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="w-full border p-2 rounded"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    {/* Role selection for multivendor */}
                    <select
                        name="role"
                        className="w-full border p-2 rounded"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="user">User</option>
                        <option value="seller">Seller</option>
                    </select>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>

                <p className="mt-4 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
