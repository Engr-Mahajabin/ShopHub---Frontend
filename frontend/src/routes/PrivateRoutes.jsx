// import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// export default function PrivateRoutes({ children }) {
//     const { user, loading } = useAuth();
//     const location = useLocation();

//     if (loading) {
//         return <div className="text-center mt-10">Loading...</div>;
//     }

//     if (user) {
//         return children;
//     }

//     return (
//         <Navigate to="/login" state={{ from: location }} replace />
//     );
// }

import AdminRoutes from "./AdminRoutes";
import SellerRoutes from "./SellerRoutes";

const PrivateRoutes = [
    ...AdminRoutes,
    ...SellerRoutes
];

export default PrivateRoutes;