import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    // -------------------- Login --------------------
    const login = async (email, password) => {
        try {
            const res = await fetch("/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json(); // single call to json()
            if (!res.ok) throw new Error(data.error || "Login failed");

            setUser(data);
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/");
        } catch (err) {
            console.error("Login Error:", err);
            alert(err.message);
        }
    };

    // -------------------- Register --------------------
    const register = async ({ name, email, password, address, phone }) => {
        try {
            const res = await fetch("/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, address, phone }),
            });

            const data = await res.json(); // single call to json()
            if (!res.ok) throw new Error(data.error || "Registration failed");

            setUser(data);
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/");
        } catch (err) {
            console.error("Register Error:", err);
            alert(err.message);
        }
    };

    // -------------------- Logout --------------------
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <AuthContext.Provider
            value={{ user, loading, login, register, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}
