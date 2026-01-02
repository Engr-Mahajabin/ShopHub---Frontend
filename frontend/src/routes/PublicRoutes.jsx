import React from 'react';
import { lazy } from 'react';

const Login = lazy(() => import('../pages/Auth/Login'));
const Register = lazy(() => import('../pages/Auth/Register'));
const AdminLogin = lazy(() => import('../pages/Auth/AdminLogin'));

const PublicRoutes = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/admin/login",
        element: <AdminLogin />,
    },
]

export default PublicRoutes;
