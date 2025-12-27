import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import { lazy } from "react";

// Layouts
import MainLayout from "../layout/MainLayout";
import Dashboard from "../layout/Dashboard";

// Public Pages
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import VendorShop from "../pages/VendorShop/VendorShop";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";


const AdminLogin = lazy(() => import('../pages/Auth/AdminLogin'));
const Login = lazy(() => import('../pages/Auth/Login'));
const Register = lazy(() => import('../pages/Auth/Register'));

// import Login from "../pages/Auth/Login";
// import Register from "../pages/Auth/Register";
import NotFound from "../pages/NotFound/NotFound";

import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";

// Dashboard Pages
// User
// import UserHome from "../pages/Dashboard/User/Home";
// import Orders from "../Pages/Dashboard/User/Orders";
// import Payments from "../Pages/Dashboard/User/Payments";

// Vendor
// import VendorHome from "../Pages/Dashboard/Vendor/Home";
// import VendorProducts from "../Pages/Dashboard/Vendor/Products";
// import AddProduct from "../Pages/Dashboard/Vendor/AddProduct";
// import VendorOrders from "../Pages/Dashboard/Vendor/Orders";

// Admin
// import AdminHome from "../Pages/Dashboard/Admin/Home";
// import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
// import AllVendors from "../Pages/Dashboard/Admin/AllVendors";
// import Reports from "../Pages/Dashboard/Admin/Reports";

// Route Guards
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import SellerRoutes from "./SellerRoutes";

export const router = createBrowserRouter([
    // ---------------- Public Layout ----------------
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "products", element: <Products /> },
            { path: "product/:id", element: <ProductDetails /> },
            { path: "vendors", element: <VendorShop /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            { path: "admin/login", element: <AdminLogin /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "cart", element: <Cart /> },
            { path: "checkout", element: <Checkout /> },
        ],
    },

    // ---------------- Dashboard Layout ----------------
    {
        path: "/dashboard",
        element: (
            <PrivateRoutes>
                <Dashboard />
            </PrivateRoutes>
        ),
        children: [
            // Default route for /dashboard
            { index: true, element: <Navigate to="/dashboard/user" replace /> },

            // ---------------- User Routes ----------------
            // {
            //     path: "user",
            //     element: <Outlet />,
            //     children: [
            //         { index: true, element: <UserHome /> },
            //         { path: "orders", element: <Orders /> },
            //         { path: "payments", element: <Payments /> },
            //     ],
            // },

            // ---------------- Seller Routes ----------------
            {
                path: "seller",
                element: <SellerRoutes><Outlet /></SellerRoutes>,
                ability: ['admin', 'seller']
                // children: [
                //     { index: true, element: <VendorHome /> },
                //     { path: "products", element: <VendorProducts /> },
                //     { path: "add-product", element: <AddProduct /> },
                //     { path: "orders", element: <VendorOrders /> },
                // ],
            },

            // ---------------- Admin Routes ----------------
            {
                path: "admin",
                element: <AdminRoutes><Outlet /></AdminRoutes>,
                // children: [
                //     { index: true, element: <AdminHome /> },
                //     { path: "users", element: <AllUsers /> },
                //     { path: "vendors", element: <AllVendors /> },
                //     { path: "reports", element: <Reports /> },
                // ],
            },
        ],
    },

    // ---------------- 404 Not Found ----------------
    { path: "*", element: <NotFound /> },
]);
