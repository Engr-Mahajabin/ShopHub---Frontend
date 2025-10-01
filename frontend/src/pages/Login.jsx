import { Link } from "react-router-dom";
import React from "react";
export default function Login() {
    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

            <form className="space-y-4">
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

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>
            </form>

            <p className="mt-4 text-center">
                Don’t have an account?{" "}
                <Link to="/register" className="text-blue-600 underline">
                    Register
                </Link>
            </p>
        </div>
    );
}
