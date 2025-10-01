import { Link } from "react-router-dom";
import React from "react";
export default function Register() {
    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>

            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border p-2 rounded"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2 rounded"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border p-2 rounded"
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
