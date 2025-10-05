import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// -------------------- Context --------------------
const AuthContext = createContext();

// -------------------- Provider --------------------
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
        setLoading(false);
    }, []);

    // -------------------- Login --------------------
    const login = async (email, password) => {
        try {
            const response = await fetch("/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || "Login failed");
            }

            const userData = await response.json();
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));
            navigate("/");
        } catch (err) {
            alert(err.message);
        }
    };

    // -------------------- Register --------------------
    const register = async (name, email, password, address, phone) => {
        try {
            const response = await fetch("/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, address, phone }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || "Registration failed");
            }

            const userData = await response.json();
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));
            navigate("/");
        } catch (err) {
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
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// -------------------- Custom Hook --------------------
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
}
