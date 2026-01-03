// import { lazy } from "react";
// const Home = lazy(() => import("../pages/Home/Home"));
// // const SellerDashboard = lazy(() => import("../pages/Dashboard/Seller/SellerDashboard"));

// const SellerRoutes = [
//     {
//         // path: "/",
//         // element: <SellerDashboard></SellerDashboard>,
//         element: <Home />,
//         ability: ['admin', 'seller']
//     }
// ]
// export default SellerRoutes;


import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const SellerRoutes = () => {
    const { user } = useSelector(state => state.auth);

    if (user?.role !== "seller") {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default SellerRoutes;
