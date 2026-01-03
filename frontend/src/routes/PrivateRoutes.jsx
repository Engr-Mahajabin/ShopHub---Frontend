// import React from "react";

// import AdminRoutes from "./AdminRoutes";
// import SellerRoutes from "./SellerRoutes";

// const PrivateRoutes = [
//     ...AdminRoutes,
//     ...SellerRoutes
// ];

// export default PrivateRoutes;

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { userInfo } = useSelector(state => state.auth);

    if (!userInfo) {
        return <Navigate to="/login" replace />;
    }

    return children ? children : <Outlet />;
};
export default PrivateRoutes;
