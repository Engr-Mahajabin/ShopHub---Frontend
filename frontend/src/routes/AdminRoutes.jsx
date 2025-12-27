// import { Navigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import useAdmin from "../hooks/useAdmin";

// const AdminRoutes = ({ children }) => {
//     const { user, loading } = useAuth();
//     const isAdmin = useAdmin();

//     if (loading) {
//         return <div className="text-center mt-10">Loading...</div>;
//     }

//     if (user && isAdmin) {
//         return children;
//     }

//     return <Navigate to="/" replace />;
// };
// export default AdminRoutes

import { lazy } from "react";
const AdminDashboard = lazy(() => import("../pages/Dashboard/Admin/AdminDashboard"));

const AdminRoutes = [
    {
        Path: "admin/admindashboard",
        element: <AdminDashboard></AdminDashboard>,
        role: 'admin'
    }
];


export default AdminRoutes;