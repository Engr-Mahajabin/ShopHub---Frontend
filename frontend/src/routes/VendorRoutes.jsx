import { Navigate, useLocation } from "react-router-dom";
import useVendor from "../hooks/useVendor";
import useAuth from "../hooks/useAuth";

const VendorRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [isVendor, isVendorLoading] = useVendor();
    const location = useLocation();

    if (loading || isVendorLoading) {
        return <div>Loading...</div>;
    }

    if (user && isVendor) {
        return children;
    }

    return (
        <Navigate to="/dashboard/user" state={{ from: location }} replace />
    );
};

export default VendorRoutes;
