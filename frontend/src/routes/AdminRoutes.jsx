// import { lazy } from "react";
// const AdminDashboard = lazy(() => import("../pages/Dashboard/Admin/AdminDashboard"));;


// const AdminRoutes = [
//     {
//         Path: "admin/dashboard",
//         element: <AdminDashboard></AdminDashboard>,
//         role: 'admin'
//     }
// ];

// export default AdminRoutes;


import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
const AdminRoutes = () => {
    const { userInfo, loader } = useSelector(state => state.auth);

    // যতক্ষণ ডাটা লোড হচ্ছে, ততক্ষণ অপেক্ষা করো
    if (loader) {
        return <div>Loading...</div>; // এখানে একটা স্পিনার দিতে পারেন
    }

    if (userInfo && userInfo.role === "admin") {
        return <Outlet />;
    }

    return <Navigate to="/login" replace />;
};
export default AdminRoutes;
