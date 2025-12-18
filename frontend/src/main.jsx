import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { AuthProvider } from "./providers/AuthProvider";
// import { CartProvider } from "./hooks/useCart";
import "./index.css";
import CartProvider from "./providers/CartProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <CartProvider>
      <RouterProvider router={router} >
        <AuthProvider></AuthProvider>
      </RouterProvider>
    </CartProvider>
    {/* </AuthProvider> */}
  </React.StrictMode>
);
