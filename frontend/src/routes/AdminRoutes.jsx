// import { lazy } from "react";
// const AdminDashboard = lazy(() => import("../pages/Dashboard/Admin/AdminDashboard"));

// const AdminRoutes = [
//     {
//         Path: "admin/dashboard",
//         element: <AdminDashboard></AdminDashboard>,
//         role: 'admin'
//     }
// ];

// export default AdminRoutes;

import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoutes = () => {
    const { user } = useSelector(state => state.auth);

    if (user?.role !== "admin") {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default AdminRoutes;
