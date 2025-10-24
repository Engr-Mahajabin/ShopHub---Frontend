// import { Link, useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import axios from "axios";

// export default function Login() {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:5000/login", {
//                 email: formData.email,
//                 password: formData.password
//             });
//             // Assuming backend returns a token
//             localStorage.setItem("token", res.data.token);
//             alert("Login successful!");
//             navigate("/"); // redirect to user dashboard or home page
//         } catch (err) {
//             console.error(err);
//             alert("Login failed. Check your credentials.");
//         }
//     };

//     return (
//         <div className="p-6 max-w-md mx-auto">
//             <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

//             <form className="space-y-4" onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     className="w-full border p-2 rounded"
//                     value={formData.email}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     className="w-full border p-2 rounded"
//                     value={formData.password}
//                     onChange={handleChange}
//                 />

//                 <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//                 >
//                     Login
//                 </button>
//             </form>

//             <p className="mt-4 text-center">
//                 Don’t have an account?{" "}
//                 <Link to="/register" className="text-blue-600 underline">
//                     Register
//                 </Link>
//             </p>
//         </div>
//     );
// }


// import React from "react";
// import { SignIn } from "@clerk/clerk-react";

// export default function Login() {
//     return (
//         <div className="flex justify-center items-center h-screen">
//             <SignIn />
//         </div>
//     );
// }


import React from "react";
import { useSignIn } from "@clerk/clerk-react";
import { useState } from "react";

export default function Login() {
    const { signIn, isLoaded, setActive } = useSignIn();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLoaded) return;

        try {
            const result = await signIn.create({ identifier: email, password });
            if (result.status === "complete") {
                await setActive({ session: result.createdSessionId });
                alert("Logged in!");
            }
        } catch (err) {
            console.error(err.errors);
            alert("Invalid credentials");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="p-6 shadow-md bg-white rounded-xl w-80"
        >
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-3 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-3 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-blue-600 text-white p-2 rounded">
                Sign In
            </button>
        </form>
    );
}
