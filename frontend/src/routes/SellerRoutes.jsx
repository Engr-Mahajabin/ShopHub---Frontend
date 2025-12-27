// import { Navigate, useLocation } from "react-router-dom";
// import useVendor from "../hooks/useVendor";
// import useAuth from "../hooks/useAuth";

// const VendorRoutes = ({ children }) => {
//     const { user, loading } = useAuth();
//     const [isVendor, isVendorLoading] = useVendor();
//     const location = useLocation();

//     if (loading || isVendorLoading) {
//         return <div>Loading...</div>;
//     }

//     if (user && isVendor) {
//         return children;
//     }

//     return (
//         <Navigate to="/dashboard/user" state={{ from: location }} replace />
//     );
// };

// export default VendorRoutes;

import { lazy } from "react";
const SellerDashboard = lazy(() => import("../pages/Dashboard/Seller/SellerDashboard"));

const SellerRoutes = [
    {
        path: "seller/sellerdashboard",
        element: <SellerDashboard></SellerDashboard>,
        ability: ['admin', 'seller']
    }
]
export default SellerRoutes;